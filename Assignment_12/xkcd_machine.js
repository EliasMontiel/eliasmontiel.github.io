let myData = {};

function fetchData(){
    let random = Math.floor(Math.random() * 3000) + 1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${random}/info.0.json`)
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
            // title
            document.getElementById("title").innerHTML = (`"${myData.title}"`);
            // image
            document.getElementById("image").src = myData.img;
            document.getElementById("image").setAttribute("alt", myData.alt);
            // data
            let month = myData.month;
            let day = myData.day;
            let year = myData.year;

            document.getElementById("data").innerHTML = (`Date: ${month}/${day}/${year}`)
        })  
        .catch(error => {console.log(error), alert("ERROR")})
}


fetchData();
document.getElementById("generate").addEventListener("click", e=> {fetchData();})