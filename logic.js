// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//NOTE: I removed my API Keys, as you guys should when you push.
// NEVER FORGET TO REMOVE/HIDE YOUR API KEYS! 

function getWeatherData(city, stateCode) {
    // var city = "austin";
    console.log(city);
    console.log(stateCode);

    // Template Strings!!!!!
    var string = "smash " + city + " test " + stateCode + " guineapig";
    var templateString = `smash ${city} test ${stateCode} guineapig`;

    console.log(string);
    console.log(templateString);

    // $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},us&units=imperial&appid=${apiKey}`)
    // .then(function(data) {
    //     console.log(data);
    // })
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},us&units=imperial&appid=${apiKey}`)
    .then(function(response) {
        //response is just pure data, not usable
        return response.json(); // {data: main: {temp: 300, etc.}}
    }).then(function(data) {
        console.log(data);
        // for(var key in data.main) {
        //     console.log(key, data.main[key]);
        //     // console.log(data.main["temp"])
        // }

        $("#weather-data").empty();
        $("#weather-data").append(`<li>${data.main.temp}</li>`); 
    });
}

function fetchKanye() {
    fetch("https://api.kanye.rest")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var quote = data.quote;
        
        var highlightWords = [
            "I",
            "genius"
        ];

        var words = quote.split(" ");
        // This, is, my, quote
        //     ^  ^  ^
        var html = "";
        for (var i = 0; i < words.length; i++) {
            var currentWord = words[i];
            if (highlightWords.indexOf(currentWord) !== -1) {
                html += ` <span class = "highlight">${currentWord}</span>`
            }
            else {
                html += " " + currentWord + " ";
            }
        }

        $("#kanye").html(html);

        //404: Asset/Resource/Response not found
    })
}

function getBacon() {
    fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        $("#bacon").text(data);
    })
}

getWeatherData("houston", "tx");
fetchKanye();
getBacon();


$("#submit").on("click", function() {
    var city = $("#city").val().trim();
    var state = $("#state").val().trim();
    getWeatherData(city, state);
});




