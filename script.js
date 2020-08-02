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

    //   add in a search weather function that will pass the weather from the ajax call into the dom -- we can do this in the newbutton()






});

});





