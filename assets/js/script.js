document.addEventListener("DOMContentLoaded", function(){
    let button= document.getElementById("submit");
    button.addEventListener("click", calculateBMI);
})

function calculateBMI(){
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let result = document.getElementById("result");
}