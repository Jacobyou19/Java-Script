let TT = document.getElementById("tt");

document.getElementById("iconL").onclick = aaa;
document.getElementById("iconM").onclick = bbb;
document.getElementById("iconS").onclick = ccc;

function aaa() {
    
    TT.style.fontSize = "32px";
}

function bbb() {

    TT.style.fontSize = "16px";
}

function ccc(e) {

    TT.style.fontSize = "12px";
    e.preventDefault()
}