// Initial Cities in sidebar

var cities = [];

function newButton (){
    var newCity = $("<div>");
    newCity.empty();
    for (var i = 0; i < cities.length; i++){
        newCity.addClass("button");
        $("#new-button").append(newCity);
        newCity.text(cities[i]);
    }
    
}



$(document).ready(function () {
   var weatherSearch = $("#search-button").on("click", function(event){
        event.preventDefault();
        var citySearch = $("#city-input").val().trim();
        window.localStorage.setItem('City', JSON.stringify(cities));
        $("#city-input").val("");
        cities.push(citySearch);
        console.log("CitySearch " + citySearch);
        console.log("Cities " + cities);
        newButton();



// current weather ajax call 
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch +",Burundi&appid=7794d8b2471a03493686efae31c07492";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(response);
    
    $("#city").html("<h1>" + response.name + "</h1>");

    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $("#temp").text("Temperature (F): " + tempF.toFixed(2));

    $("#humidity").text("Humidity: " + response.main.humidity + "%");

    $("#wind-speed").text("Wind Speed: " + response.wind.speed);
    })



// 5 day forecast ajax call----------------------





     var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=7794d8b2471a03493686efae31c07492";

     $.ajax({
        url: queryURL2,
        method: "GET"
    })
    
    .then(function(response2){
        console.log(response2);



// -------------Day 1-------------------------------


        $("#forecast-date1").text(response2.list[3].dt_txt);
        $("#forecast-description1").text(response2.list[3].weather[0].description);

        var tempF2 = (response2.list[3].main.temp_max - 273.15) * 1.80 + 32;
        $("#forecast-temp1").text("Temp (F): " + tempF2.toFixed(2));
        
        $("#forecast-humidity1").text("Humidity: " + response2.list[3].main.humidity + "%")


        // ------------ Day 2 ----------------------

        $("#forecast-date2").text(response2.list[11].dt_txt);
        $("#forecast-description2").text(response2.list[11].weather[0].description);

        var tempF2 = (response2.list[11].main.temp_max - 273.15) * 1.80 + 32;
        $("#forecast-temp2").text("Temp (F): " + tempF2.toFixed(2));
        
        $("#forecast-humidity2").text("Humidity: " + response2.list[11].main.humidity + "%")



    //    --------------Day 3---------------------


    $("#forecast-date3").text(response2.list[19].dt_txt);
    $("#forecast-description3").text(response2.list[19].weather[0].description);

    var tempF2 = (response2.list[19].main.temp_max - 273.15) * 1.80 + 32;
    $("#forecast-temp3").text("Temp (F): " + tempF2.toFixed(2));
    
    $("#forecast-humidity3").text("Humidity: " + response2.list[19].main.humidity + "%")


// --------------------Day 4-------------------------

$("#forecast-date4").text(response2.list[27].dt_txt);
    $("#forecast-description4").text(response2.list[27].weather[0].description);

    var tempF2 = (response2.list[27].main.temp_max - 273.15) * 1.80 + 32;
    $("#forecast-temp4").text("Temp (F): " + tempF2.toFixed(2));
    
    $("#forecast-humidity4").text("Humidity: " + response2.list[27].main.humidity + "%")

    // ------------------Day 5-------------------------

    $("#forecast-date5").text(response2.list[35].dt_txt);
    $("#forecast-description5").text(response2.list[35].weather[0].description);

    var tempF2 = (response2.list[35].main.temp_max - 273.15) * 1.80 + 32;
    $("#forecast-temp5").text("Temp (F): " + tempF2.toFixed(2));
    
    $("#forecast-humidity5").text("Humidity: " + response2.list[35].main.humidity + "%")

    })

    });


    $(".side-buttons").on("click", weatherSearch);
    


})



