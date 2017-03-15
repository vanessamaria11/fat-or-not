$(document).ready(function(){
    $("#fast-food").hide();
    $("#restaurant").hide();
 });

    $("#menu-head").on("click", function(){
        $("#display-food").hide(1000);
        $("#fast-food").show(1000);
        $("#restaurant").hide(1000);
        $(".food-button").on("click", function(){
            $("#display-food").show(1000);
        });
       
    });

    $("#menu-head-2").on("click", function(){
        $("#display-food").hide(1000);
        $("#restaurant").show(1000);
        $("#fast-food").hide(1000);
        $(".food-button").on("click", function(){
            $("#display-food").show(1000);
        });
        
    });



 $(document).on("click", "#mcdonalds", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000053&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response);

      //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/mcdonalds-uh1.png'));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/mcdonalds-uh2.png'));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/mcdonalds-uh1.png'));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});


$(document).on("click", "#wendys", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c00000f&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

      //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/wendys-uh1.png'));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/wendys-uh2.png'));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/wendys-uh3.png'));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);


	});
});


$(document).on("click", "#taco-bell", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000020&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

      //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/tacobell-uh1.png').addClass("rounded-image"));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/tacobell-uh2.png'));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/tacobell-uh3.png'));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});

$(document).on("click", "#chick-fil-a", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000025&results=0%3A5&cal_min=650&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

    //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/chick-uh1.png'));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/chick-uh2.png'));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/chick-uh3.png'));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});


$(document).on("click", "#subway", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000005&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

      //displaying the first object
    $("#image-1").html($('<img>').attr("src", 'images/food-images/subway-uh1.jpg'));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/subway-uh2.jpg'));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/subway-uh3.upload'));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});

$(document).on("click", "#outback", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c00001a&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

      //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/outback-uh1.jpg').addClass("rounded-image"));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/outback-uh2.jpg').addClass("rounded-image"));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/outback-uh3.jpg').addClass("rounded-image"));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});

$(document).on("click", "#applebees", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000015&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

     //displaying the first object
  $("#image-1").html($('<img>').attr("src", 'images/food-images/apple-uh1.jpg').addClass("rounded-image"));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/apple-uh2.png').addClass("rounded-image").addClass("small-image"));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/apple-uh3.jpg').addClass("rounded-image"));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);



	});
});

$(document).on("click", "#ihop", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000018&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

     //displaying the first object
      $("#image-1").html($('<img>').attr("src", 'images/food-images/ihop-uh1.jpg').addClass("rounded-image"));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/ihop-uh2.jpg').addClass("rounded-image"));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/ihop-uh3.jpg').addClass("rounded-image").addClass("small-image"));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});

$(document).on("click", "#olive-garden", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c000024&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

    //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/olive-uh1.jpg').addClass("rounded-image"));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/olive-uh2.jpg').addClass("rounded-image"));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/olive-uh3.jpg').addClass("rounded-image").addClass("small-image"));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});

$(document).on("click", "#yard-house", function(){


    $.ajax({
      url: "https://api.nutritionix.com/v1_1/search/?brand_id=513fbc1283aa2dc80c0000b6&results=0%3A5&cal_min=800&cal_max=1500&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_sugars%2Cnf_protein&appId=3e544efb&appKey=01d76c440bf1a074f579403c61b0c1c7",
      method: "GET"
    }).done(function(response) {
      console.log(response); 

     //displaying the first object
     $("#image-1").html($('<img>').attr("src", 'images/food-images/yard-uh1.jpg').addClass("rounded-image"));
     $("#food-item").html("Item:" + " " + response.hits[0].fields.item_name);
     $("#calories").html("Calories:" + " " + response.hits[0].fields.nf_calories);
     $("#fat").html("Total Fat:" + " " + response.hits[0].fields.nf_total_fat);
     $("#carbs").html("Total Carbohydrates:" + " " + response.hits[0].fields.nf_total_carbohydrate);
     $("#protien").html("Protein:" + " " + response.hits[0].fields.nf_protein); 

     //displaying the second object
     $("#image-2").html($('<img>').attr("src", 'images/food-images/yard-uh2.jpg').addClass("rounded-image").addClass("small-image"));
     $("#food-item-2").html("Item:" + " " + response.hits[1].fields.item_name);
     $("#calories-2").html("Calories:" + " " + response.hits[1].fields.nf_calories);
     $("#fat-2").html("Total Fat:" + " " + response.hits[1].fields.nf_total_fat);
     $("#carbs-2").html("Total Carbohydrates:" + " " + response.hits[1].fields.nf_total_carbohydrate);
     $("#protien-2").html("Protein:" + " " + response.hits[1].fields.nf_protein); 

     //displaying the third object
     $("#image-3").html($('<img>').attr("src", 'images/food-images/yard-uh3.jpg').addClass("rounded-image"));
     $("#food-item-3").html("Item:" + " " + response.hits[2].fields.item_name);
     $("#calories-3").html("Calories:" + " " + response.hits[2].fields.nf_calories);
     $("#fat-3").html("Total Fat:" + " " + response.hits[2].fields.nf_total_fat);
     $("#carbs-3").html("Total Carbohydrates:" + " " + response.hits[2].fields.nf_total_carbohydrate);
     $("#protien-3").html("Protein:" + " " + response.hits[2].fields.nf_protein);

	});
});




