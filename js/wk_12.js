let ourObject = {
    "name": "Elias",
    "profession": "student",
    "age": "19",
    "pets": "none :("
}

console.log(ourObject);

let myData = {};

function fetchData(){
    fetch('https://catfact.ninja/fact')
        .then(res => {
            if(res.ok){
                return res.json();
            }
            else{
                console.log(res);
            }
            
        }).then(res => {
            myData = res;
            console.log(myData["fact"]);
            document.getElementById("fact").innerHTML = myData.fact;
        })
        .catch(error => {console.log(error)})
}

fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})

let name = "Elias";
let myString = `hello ${name}`;