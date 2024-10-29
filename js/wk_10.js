let age = 1; // age is one ahead of display
// var my_other_var = "hello world";
// console.log(my_other_var);
// my_other_var += "!";
// alert("this is an alert");

// how to interact with DOM
console.log(document.getElementById("my_head"));
document.getElementById("my_head").addEventListener("click", function(random){
    // alert("clicked the h1");
    document.getElementById("paragraph_1").innerHTML = "Age " + age;
    age++;
    // document.getElementById("paragraph").style.color = "blue";
    if(age == 14){
        document.getElementById("image").src = "/img/act_7_img/kitty.png";
    }
    else if(age % 2 == 0){
        document.getElementById("image").src = "/img/act_7_img/chick.png";
    }
    else{
        document.getElementById("image").src = "/img/act_7_img/unicorns/unicorn (1).png";
    }
    

    if(age == 14){
        document.getElementById("body").style.backgroundColor = "blue";
        document.getElementById("my_head").style.color = "white";
        document.getElementById("paragraph_1").style.color = "white";
        document.getElementById("paragraph_2").style.color = "white";
    }
    else{
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("my_head").style.color = "black";
        document.getElementById("paragraph_1").style.color = "black";
        document.getElementById("paragraph_2").style.color = "black";
    }
});


console.log(document.getElementById("my_head").innerHTML);