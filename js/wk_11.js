// console.log(document.querySelector('button'));
// console.log(document.querySelectorAll('button'));
// console.log(document.querySelector('button')[1]);
// console.log(document.getElementsByClassName('my_button'));
// console.log(document.getElementsByClassName('my_button')[2]);


// hello("Elias");

// function hello(name){
//     alert("hello " + name);
// }


// function even(n){
//     if(n % 2 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(even(20));
// console.log(even(2));
// console.log(even(13));

// let text = ["one", "two", "three"];
// let paragraph = "";

// function buildText(arr){
//     for(let i=0; i<arr.length; i++){
//         // console.log(arr[i]);
//         paragraph += arr[i] + " ";
//     }
//     document.getElementById("paragraphy").innerHTML = paragraph;
// }

// buildText(text);

tellFortune(2, "Lulu", "Alaska", "hunter", "paragraph1");
tellFortune(10, "Maria", "Colombia", "lawyer", "paragraph2");
tellFortune(0, "Alex", "Brazil", "soccer player", "paragraph3")

function tellFortune(children, partners_name, location, job, id){
    sentence = "You will be a " + job + " in " + location + ", and married to " + partners_name + " with " + children + " kids.";
    document.getElementById(id).innerHTML = sentence;
}


calculateDogAge(7, "dawg1");
calculateDogAge(2, "dawg2");
calculateDogAge(10, "dawg3");

function calculateDogAge(puppy_age, id){
    dog_years = (puppy_age * 7);
    sentence = "Your doggie is " + dog_years + " years old in dog years!";
    document.getElementById(id).innerHTML = sentence;
}


reverse("32243", "reverse1");
reverse("123456789", "reverse2");

function reverse(number, id){
    let reversed = "";
    for(let i = (number.length - 1); i >= 0; i--){
        reversed += number[i];
    }
    document.getElementById(id).innerHTML = reversed;
}


alphaOrder("gfedcba", "string1");
alphaOrder("hello", "string2");

function alphaOrder(string, id){
    let myArray = string.split('');
    myArray.sort();
    let newString = myArray.join('');
    document.getElementById(id).innerHTML = newString;
}


upperCase("the quick brown fox", "upper1");
upperCase("hello new world", "upper2");

function switchUpper(index, array){
    array[index] = array[index].at(0).toUpperCase() + array[index].slice(1);
}
function upperCase(string, id){
    let myArray = string.split(' ');
    for(let i = 0; i < myArray.length; i++){
        switchUpper(i, myArray); 
    }
    let newString = myArray.join(' ');
    document.getElementById(id).innerHTML = newString;
}