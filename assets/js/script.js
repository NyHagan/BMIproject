
function calculateBMI(){
    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result");
    
    // check if entered height is a number, or empty or negative
    if (height === "" || isNaN(height) || height < 0) {
        result.innerHTML = "Please enter a valid positive height";
    }else if(weight === "" || isNaN(weight)|| weight < 0){
        result.innerHTML = "Please enter a valid positive weight";
    }else{
         bmi = (weight / ((height * height) 
        / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
        displayInfo();
    }
    
}

function displayInfo(){
    // This function displays the result to the info id element
    const info= document.getElementById("info");
    if (bmi < 18.6) {
        info.innerHTML ="<p>You are UNDERWEIGHT</p>" ;
    }else if (bmi >= 18.6 && bmi < 24.9){
        info.innerHTML ="<p>You are NORMAL WEIGHT</p>" ;
    }else{
        info.innerHTML ="<p>You are OVERWEIGHT</p>" ;
    }

}


function displayReset(){
    const again = document.getElementById("reload");
        again.style.visibility ="visible";
}

function changeText(){
    const text = document.getElementById("text");
        text.innerText = "Your Body Mass Index Is:";
}


console.log("hello");