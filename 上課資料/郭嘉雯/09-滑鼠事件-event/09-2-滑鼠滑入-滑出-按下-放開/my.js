let PIC = document.getElementById("pic")
let N = 0
let audio = document.createElement("audio")
document.getElementById("pic").onmouseover = aaa;
document.getElementById("pic").onmouseout = bbb;
document.getElementById("pic").onmousedown = ccc;
document.getElementById("pic").onmouseup = aaa;

function aaa() {

    this.src = "./img/p2.png"
}

function bbb() {

    this.src = "./img/p1.png"
}

function ccc() {
    N = N + 1
    this.src = "./img/p3.png"
    document.getElementById("tt").innerHTML = N
    audioplay()
}

function autoplay() {
    audio.src = "./a.mp3";
    audio.play

}