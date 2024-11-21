fetch('/JS_Project/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        parseData(projects);
    }).catch(err => {
        console.log(`error ${err}`);
    })

function parseData(data){
    for(let i=0; i<data.projects.length; i++){
       document.getElementById("projects").innerHTML += 
       `<div class="row project" id="${data.projects[i].subdomain}>"
       <div class="proj_img"><img src="images/.........  (${i + 1}).png"></div>
       <div class="description"><h2>${projects.project[i].name}</h2><p class="subtitle">${data.projects[i].subtitle}</p>
       <p>${data.projects[i].abstract}</p></div></div>`;
       data.projects[i].name;

    }
}