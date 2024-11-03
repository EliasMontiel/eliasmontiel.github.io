// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = "In the middle of :inserty:, young artist :insertx: sat on a bench sketching, while an elderly man named Mr. Bob observed the scene quietly beside her. Without warning, a gust of wind swept through the 65 fahrenheit degree air, snatching :insertx:'s sketchbook from her hands and scattering her drawings across the pavement. Mr. Bob, with surprising :insertz:, stood up and began gathering the papers, holding them steady against the wind. “Looks like these belong to you, and wow, they feel like they weight 14 pounds.” he said, handing them back with a smile. :insertx: nodded, thanking him, as they both settled back on the bench, watching the city come to life around them, strangers sharing a brief, unspoken understanding of its beauty.";

let insertX = ["Ruby", "Beth", "Suzanne"];
let insertY = ["a coffee shop", "an ocean, on a boat", "the Titanic"];
let insertZ = ["agility", "prowess", "grace"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = storyText.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(14/14) + " stone";
        const temperature =  Math.round((65-32)*(5/9)) + " centigrade";

        newStory = newStory.replace("65 fahrenheit", temperature);
        newStory = newStory.replace("14 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}