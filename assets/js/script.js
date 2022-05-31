var factSpan = document.querySelector("#dog-fact");
var factBtn = document.querySelector("#fact-btn");

var dogFacts = [];

var getDogFact = function() {
    var dogFactApiUrl = "https://cors-anywhere.herokuapp.com/https://dog-api.kinduff.com/api/facts?number=100";
    fetch(dogFactApiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {                
                dogFacts.push(data);
                console.log(dogFacts);
            })
        }
    })
};

var displayFact = function() {
    var fact = dogFacts[0].facts[Math.floor(Math.random() * (dogFacts[0].facts).length)];
    console.log(fact);
    factSpan.textContent= fact;
};

factBtn.addEventListener("click", displayFact);
getDogFact();
