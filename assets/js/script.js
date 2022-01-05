document.addEventListener("DOMContentLoaded", function(){
    let button= document.getElementById("submit");

})

function calculateBMI(){
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("result");
    

    if (height === "" || isNaN(height)) {
        result.innerHTML = "Please enter a valid height";
    }else if(weight === "" || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight";
    }else{
         bmi = (weight / ((height * height) 
        / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
        displayInfo();
    }
    
}

function displayInfo(){
    let info= document.getElementById("info");
    if (bmi < 18.6) {
        info.innerHTML ="<p>You are UNDERWEIGHT</p>" ;
    }else if (bmi >= 18.6 && bmi < 24.9){
        info.innerHTML ="<p>You are NORMAL WEIGHT</p>" ;
    }else{
        info.innerHTML ="<p>You are OVERWEIGHT</p>" ;
    }

}


function displayReset(){
    let again = document.getElementById("reload");
        again.style.visibility ="visible";
}


console.log("hello");