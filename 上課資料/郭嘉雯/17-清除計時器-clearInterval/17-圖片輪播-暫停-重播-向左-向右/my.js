let N = 1
let TT = setInterval(aaa, 1000);
let car = document.getElementById("car");
let box = document.getElementById("box");
let iconL = document.getElementById("iconL");
let iconR = document.getElementById("iconR");

function aaa() {
    if (N <= 6) { N = N + 1 } else { N = 1 }
    car.src = "./img/0" + N + ".jpg"
}

box.onmouseover = stop;
box.onmouseout = start;
function stop() {
    
    clearInterval(TT)
    }
function start() {
    TT = setInterval(aaa, 1000)
 }

iconL.onclick = L 
iconR.onclick = R 
function L() {
    
    if (N > 1) { N -= 1 } else (N = 6)
    car.src = "./img/0" + N + ".jpg"
}

function R() {

    if (N < 6) { N += 1 } else (N = 1)
    car.src = "./img/0" + N + ".jpg"
}
