let N = 1
CAR= document.getElementById("car")

function aaa() {
    
    if (N <= 6) { N = N + 1 } else { N = 1 }
    CAR.src = "./img/0" + N + ".jpg"
}

setInterval(aaa,5000)