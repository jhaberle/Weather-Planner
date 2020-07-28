var citySearch = [""];


$("#city-search").on("click", function(){
    alert("I just searched for city  " + citySearch + "!");
    $("#city-input").push(citySearch);

});


// $("#city-search").click(function(){
//     alert("I typed " + citySearch + "!");
// });

