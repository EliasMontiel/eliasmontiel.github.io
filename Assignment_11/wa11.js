const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArr = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    "pic1.jpg": "Closeup of a human eye",
    "pic2.jpg": "Wavy rock formation",
    "pic3.jpg": "Purple flowers",
    "pic4.jpg": "Ancient egyptian wall paintings",
    "pic5.jpg": "Brown butterfly on green leaf"
};

/* Looping through images */
for(let i=0; i<imageArr.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${imageArr[i]}` );
    newImage.setAttribute('alt', altText[imageArr[i]] );
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('color');
    if(btnClass == 'dark'){
        btn.setAttribute('color', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else{
        btn.setAttribute('color','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});