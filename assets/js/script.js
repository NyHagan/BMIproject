document.addEventListener("DOMContentLoaded", function(){
    let button= document.getElementById("submit");
    button.addEventListener("click", calculateBMI);
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
        let bmi = (weight / ((height * height) 
        / 10000)).toFixed(2);
    }

    result.innerHTML = <h1>${bmi}</h1>;

}

console.log(hello)