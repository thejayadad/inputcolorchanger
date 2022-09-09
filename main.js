
function newColor(){
    let color = document.getElementById("color").value;
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = color;
}