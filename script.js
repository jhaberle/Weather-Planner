// Initial Cities in sidebar

var cities = ["Denver", "Atlanta", "Phoenix"];

function newButton (){
    $(".side-button").empty();
    for (var i = 0; i < cities.length; i++){
        var newCity = $("<button>");
        newCity.addClass("button");
        newCity.attr("data-city", cities[i]);
        newCity.text(cities[i]);
        $("#side-button").append(newCity);
    }
}


$("#search-button").on("click", function(event){
        event.preventDefault();
        var citySearch = $("#city-input").val().trim();
        cities.push(citySearch);
        newButton();
});





