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
    $("#search-button").on("click", function(event){
        event.preventDefault();
        var citySearch = $("#city-input").val().trim();
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
    $("#temp").text("Temperature (F) " + tempF.toFixed(2));

    $("#humidity").text("Humidity: " + response.main.humidity);

    $("#wind-speed").text("Wind Speed: " + response.wind.speed);
    })



// 5 day forecast ajax call




     var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearch + "&appid=7794d8b2471a03493686efae31c07492";

     $.ajax({
        url: queryURL2,
        method: "GET"
    })
    
    .then(function(response2){
        console.log(response2);
    })

    });

})




