
var inputA = document.getElementById("inputA")
var inputB = document.getElementById("inputB")


function sumNumber() {
    var result = inputA.value !== "" && inputB.value!== "" ? parseInt (inputA.value) + parseInt (inputB.value) : "Error";
    console.log(result);
    document.getElementById("inputResult").value = result; 
}

function resNumber() {
    var result = inputA.value !== "" && inputB.value!== "" ? parseInt (inputA.value) - parseInt (inputB.value) : "Error";
    console.log(result);
    document.getElementById("inputResult").value = result; 
}

function mulNumber() {
    var result = inputA.value !== "" && inputB.value!== "" ? parseInt (inputA.value) * parseInt (inputB.value) : "Error";
    console.log(result);
    document.getElementById("inputResult").value = result; 

}

function divNumber() {
    var result = inputA.value !== "" && inputB.value!== "" ? parseInt (inputA.value) / parseInt (inputB.value) : "Error";
    console.log(result);
    document.getElementById("inputResult").value = result; 
}



document.getElementById("sumButton").addEventListener("click", () => sumNumber());
document.getElementById("resButton").addEventListener("click", () => resNumber());
document.getElementById("mulButton").addEventListener("click", () => mulNumber());
document.getElementById("divButton").addEventListener("click", () => divNumber());


