let subdomain = window.location.href.slice(window.location.href.lastIndexOf("/")-9, window.location.href.lastIndexOf("."));
// the minus 9 is because of the "showcases" folder
console.log(subdomain);


fetch('/JS_Project/projects.json')
    .then(response =>{
        return response.json();
    }).then(projects => {
        //console.log(projects);
        proj = projects;
        findProjectInJSON(projects);
        // parseData(projects);
    }).catch(err =>{
        console.log(`error ${err}`);
    })

function findProjectInJSON(projects){
    for(let i=0; i<projects.projects.length; i++){
        if(projects.projects[i].subdomain == subdomain){
            buildPage(projects.projects[i]);
            break;
        }else{
            continue;
        }
    }
}

function buildPage(project){
    console.log(project);
    document.getElementById("project").innerHTML += `
    <h1>${project.name}</h1>
    <a href="${project.link}" target="_blank">Link to Website</a>
    `;
}