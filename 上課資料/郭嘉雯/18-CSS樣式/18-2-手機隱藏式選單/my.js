document.getElementById("icon").onclick = aaa;
document.getElementById("close").onclick = bbb;

function aaa(e) {
    document.getElementById("menu").style.csstext = "display:block; ";
    e.peventDefault()
    
}

function bbb() {
    document.getElementById("menu").style.csstext="display:none"

}