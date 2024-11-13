
let myData = {};

function fetchData(link, paragraph){
    fetch(`${link}`)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                console.log(res);
            }
            
        }).then(res => {
            myData = res;
            console.log(myData);
            document.getElementById(`${paragraph}`).innerHTML = myData.joke;


            // if(paragraph == "Joke"){

            // }
            // else if(paragraph == "Cat"){
            //     document.getElementById(`${paragraph}`).innerHTML = myData.fact;
            // }
            // else if(paragraph == "Chuck"){
            //     document.getElementById(`${paragraph}`).innerHTML = myData.value;
            // }  
        })
        .catch(error => {console.log(error), alert("ERROR")})
}


let link = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let paragraph = "Joke";
fetchData(link, paragraph);
document.getElementById("generate1").addEventListener("click", e=> {fetchData(link, paragraph);})

// link = "https://catfact.ninja/fact";
// paragraph = "Cat";
// document.getElementById("generate2").addEventListener("click", e=> {fetchData(link, paragraph);})

// link = "https://api.chucknorris.io/jokes/random";
// paragraph = "Chuck";
// document.getElementById("generate3").addEventListener("click", e=> {fetchData(link, paragraph);})

