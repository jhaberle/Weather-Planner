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


        var APIKey = "7794d8b2471a03493686efae31c07492";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch +",Burundi&appid=7794d8b2471a03493686efae31c07492";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {
        console.log(queryURL);
        console.log(response);
    })

    //   add in a search weather function that will pass the weather from the ajax call into the dom -- we can do this in the newbutton()






    });

})





