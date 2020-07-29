// Initial Cities in sidebar

var cities = [];

function newButton (){
      $("new-button").empty();
    for (var i = 0; i < cities.length; i++){
        var newCity = $("<div>");
        newCity.addClass("button");
        newCity.attr("side-button", cities[i]);
        newCity.text(cities[i]);
        $("#new-button").append(newCity);
        // $(cities).empty();
    }
    
}


$("#search-button").on("click", function(event){
        event.preventDefault();
        var citySearch = $("#city-input").val().trim();
        cities.push(citySearch);
        newButton();
      
});





