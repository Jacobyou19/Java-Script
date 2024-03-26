let TT = document.getElementById("tt");

document.getElementById("iconL").onclick = aaa;
document.getElementById("iconM").onclick = bbb;
document.getElementById("iconS").onclick = ccc;

let N = 16;

function aaa(e) {
    N += 1;
    TT.style.cssText = "fontSize:20px; color: rgb:
    e.peventdefault();
}

function bbb(e) {
    N = 16;
    TT.style.fontSize = "N+px";
    e.peventdefault();

}

function ccc(e) {
    N -= 1;
    TT.style.fontSize = "N+px";
    e.peventdefault();

}