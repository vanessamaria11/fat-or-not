  //create variable that will hold the address, geocoding URL, and map.
  var geoURL;
  var map;
  var address;

  //labels for markers on the map
  var markers = [];
  var labels = 'AB';
  var labelIndex = 0;

  //function to delete markers
  function deleteMarker(markerIndex){
    markers[markerIndex].setMap(null);
    labelIndex = 0;
  };

  //on click event for when entering an address/location to initalize and center map on this location
  $(document).on("click","#search-address", function() {

    event.preventDefault();

    //take input and make it usable in URL
    address = $("#location-input").val().trim();
    address = address.replace(/\s/g, "+");
    console.log(address);

    geoURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBuDeLdb6rcXdYYbfB_GoCiWLLNPq-wmsk";
    console.log(geoURL);


    //ajax request to take geoURL and get the coordinates of the location you entered
    $.ajax({
          url: geoURL,
          method: "GET"
        }).done(function(response){

        console.log(response);
        console.log(response.results[0].geometry.location.lat);
        console.log(response.results[0].geometry.location.lng);

        var center_lat = response.results[0].geometry.location.lat;
        var center_long = response.results[0].geometry.location.lng;
        var center_coord = new google.maps.LatLng(center_lat, center_long);
        
        //creating map and centering it on the coordinates
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: center_lat, lng: center_long},
          zoom: 12
        });

        //place marker on input location
        var marker = new google.maps.Marker({
          position: center_coord,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'assets/images/ic_home_black_24dp_1x.png',
          });

        });

  });

  //depending on the restaurant button clicked,
  //will located and place markers on the 2 closest restaurant spots
  //to the entered location
  $(document).on("click", "#food", function() {
      
      event.preventDefault();

      //delete markers on map if there are any
      if (markers[0] != null){
        deleteMarker(0);
        deleteMarker(1);
      }

      console.log($(this).attr("value"));

      var restaurant = $(this).attr("value");

      var queryURL = "https://dry-plateau-27231.herokuapp.com/?limit=2&term=" + restaurant + "&location=" + address;

      console.log(queryURL);

      //ajax request 
      $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response){
        response_obj = JSON.parse(response);


        //for loop for limit of two closest restaurant locations
        for (var i=0; i < 2; i++) {

          //taking restaurant latitude and longitude and assigning to variables
          restaurant_lat = response_obj.businesses[i].coordinates.latitude;
          restaurant_long = response_obj.businesses[i].coordinates.longitude;

          console.log("latitude " + restaurant_lat);
          console.log("longitude " + restaurant_long);
          console.log("Address " + response_obj.businesses[i].location.address1 + " " + response_obj.businesses[0].location.city);

          var coordinates = new google.maps.LatLng(restaurant_lat, restaurant_long);

          //create marker for restaurant[i]
          var marker = new google.maps.Marker({
          position: coordinates,
          label: {
            text: labels[labelIndex++ % labels.length],
            color: "white",
          },
          animation: google.maps.Animation.DROP,
          icon: "assets/images/small_burger.png",
          map: map
          }); 
          markers[i] = marker;

          // $("#location1").html(Address);

          console.log(marker);
        }      

      });

    });


    