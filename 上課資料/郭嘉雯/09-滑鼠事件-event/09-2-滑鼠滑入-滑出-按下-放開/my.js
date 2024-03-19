document.getElementById("pic").onmouseover = aaa;
document.getElementById("pic").onmouseover = bbb;
document.getElementById("pic").onmousedown = ccc;
document.getElementById("pic").onmouseup = aaa;

function aaa() { 

    this.src = "./img/p2.png"
}

function bbb() {
    
    this.src = "./img/p1.png"
}

function ccc() {

    this.src = "./img/p3.png"
}