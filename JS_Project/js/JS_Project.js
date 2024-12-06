// let proj; // Store projects JSON data

// // Fetch JSON Data
// fetch('/JS_Project/projects.json')
//   .then((response) => response.json())
//   .then((projects) => {
//     console.log(projects);
//     proj = projects; // Cache the JSON data
//   })
//   .catch((err) => {
//     console.error(`Error fetching JSON: ${err}`);
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   const contentDiv = document.getElementById("content");
//   const links = document.querySelectorAll("nav a");
//   const underlines = document.querySelectorAll(".underline");

//   // Function to load the content
//   async function loadPage(page) {
//     try {
//       const response = await fetch(page);
//       if (!response.ok) throw new Error(`Failed to load ${page}`);
//       const html = await response.text();
//       contentDiv.innerHTML = html; // Replace content in the `#content` div

//       // Check if the newly loaded page requires JSON data (e.g., projects.html or home.html)
//       if (page === "projects.html" || page === "home.html") {
//         // Ensure the `#projects` container exists before calling parseData
//         const projectsContainer = document.getElementById("projects");
//         if (projectsContainer && proj) {
//           parseData(proj); // Use cached JSON data
//         }
//       }
//     } catch (error) {
//       contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
//     }
//   }

//   // Initial page load
//   loadPage("home.html"); // Default page

//   // Handle link clicks
//   links.forEach((link, index) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault(); // Prevent default navigation
//       const page = link.getAttribute("data-page");

//       // Update underline animation
//       underlines.forEach((underline) => {
//         underline.style.transform = `translate3d(${index * 100}%, 0, 0)`;
//       });

//       // Load the content dynamically
//       loadPage(page);

//       // Update active link styling
//       links.forEach((lnk) => lnk.classList.remove("active"));
//       link.classList.add("active");
//     });
//   });
// });

// // Parse and Render Projects Data
// function parseData(data) {
//   const projectsContainer = document.getElementById("projects");
//   if (!projectsContainer) {
//     console.error("Projects container not found on this page.");
//     return;
//   }

//   projectsContainer.innerHTML = ""; // Clear previous content
//   data.projects.forEach((project) => {
//     projectsContainer.innerHTML += `
//       <a href="/JS_Project/${project.subdomain}.html">
//         <div class="row project" id="${project.subdomain}">
//           <div class="projimg"><img src="${project.images}" alt="${project.name}"></div>
//           <div class="description">
//             <h2>${project.name}</h2>
//             <p class="subtitle">${project.subtitle}</p>
//             <p>${project.abstract}</p>
//           </div>
//         </div>
//       </a>`;
//   });
// }

// for(b of document.querySelectorAll("#buttons button")){
//     b.addEventListener("click", e=>{
//         console.log(e.target.value);
//         sortProjects(e.target.value);
//     })
// }

// function sortProjects(button){
//     if(button == "clear"){
//         for(let i=0; i<proj.projects.length; i++){
//             document.getElementById(proj.projects[i].subdomain).style.display = "flex";
//         }
//     }else if(button != undefined){
//         for(let i=0; i<proj.projects.length;i++){
//             if(proj.projects[i].category.includes(button) == true){
//                 document.getElementById(proj.projects[i].subdomain).style.display = "flex";
//             }else{
//                 document.getElementById(proj.projects[i].subdomain).style.display = "none";
//             }
//         }
//     }else{
//         console.log("error, button value is undefined");
//     }

// }




  



let proj;


fetch('/JS_Project/projects.json')
    .then(response => {
        return response.json();
    }).then(projects => {
        console.log(projects);
        proj = projects;
        parseData(projects);
    }).catch(err => {
        console.log(`error ${err}`);
    })



// function parseData(data){
//     for(let i=0; i<data.projects.length; i++){
//         document.getElementById("projects").innerHTML += 
//         `<a href="/JS_Project/${data.projects[i].subdomain}.html">
//         <div class="row project" id="${data.projects[i].subdomain}">
//         <div class="projimg"><img src="${data.projects[i].images}"></div>
//         <div class="description"><h2>${data.projects[i].name}</h2>
//         <p class="subtitle">${data.projects[i].subtitle}</p>
//         <p>${data.projects[i].abstract}</p></div></div></a>`;
//         }

// }
function parseData(data) {
    const projectsContainer = document.getElementById("projects");
    // if (!projectsContainer) {
    //   console.error("Projects container not found on this page.");
    //   return;
    // }
  
    projectsContainer.innerHTML = ""; // Clear previous content
    data.projects.forEach((project) => {
      projectsContainer.innerHTML += `
        <a href="/JS_Project/${project.subdomain}.html">
          <div class="row project" id="${project.subdomain}">
          <div class="description">
              <h2>${project.name}</h2>
              <p>${project.abstract}</p>
            </div>
            <div class="projimg"><img src="${project.images}" alt="${project.name}"></div>
          </div>
        </a>`;
    });
  }
  

for(b of document.querySelectorAll("#buttons button")){
    b.addEventListener("click", e=>{
        console.log(e.target.value);
        sortProjects(e.target.value);
    })
}

function sortProjects(button){
    if(button == "clear"){
        for(let i=0; i<proj.projects.length; i++){
            document.getElementById(proj.projects[i].subdomain).style.display = "flex";
        }
    }else if(button != undefined){
        for(let i=0; i<proj.projects.length;i++){
            if(proj.projects[i].category.includes(button) == true){
                document.getElementById(proj.projects[i].subdomain).style.display = "flex";
            }else{
                document.getElementById(proj.projects[i].subdomain).style.display = "none";
            }
        }
    }else{
        console.log("error, button value is undefined");
    }

}






