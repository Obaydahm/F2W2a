import 'bootstrap/dist/css/bootstrap.css'

/* Joke exercise
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

document.getElementById("getJokeButton").onclick = function(){
    var jokeId = document.getElementById("jokeid").value-1;
    var joke = jokes.getJokeById(jokeId)
    if(isNaN(jokeId) || joke == undefined){
        document.getElementById("joke").innerHTML = "Joke not found";
    }else{
        document.getElementById("joke").innerHTML = joke;
    }
}

document.getElementById("addJokeButton").onclick = function(){
    var newJoke = document.getElementById("addJokeInputField").value;
    if(newJoke == undefined){
        document.getElementById("joke").innerHTML = "Joke not allowed";
    }else{
        jokes.addJoke(newJoke);
        document.getElementById("addJokeParagraph").innerHTML = jokes.getJokes().map(joke => "<li>"+joke+"</li>").join("\n");
    }
}
*/

// 2. Small application to display a quote of the hour
function getQuote(){
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        document.getElementById("quote").innerHTML = "ID: " + data.id + "<br>Quote: " + data.joke + "<br>Reference: " + data.reference;
    })
    .catch(err => {
        if(err.status){
          err.fullError.then(e=> console.log(e.detail))
        }
        else{console.log("Network error"); }
     });
}

document.getElementById("getQuoteBtn").addEventListener("click", getQuote);
