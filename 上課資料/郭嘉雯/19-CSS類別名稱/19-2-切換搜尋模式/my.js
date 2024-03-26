document.getElementById("page").onclick = aaa();
document.getElementById("img").onclick = bbb();

function aaa() {
    document.getElementById("page").className ="page tag-selected"
    document.getElementById("img").className= "image tag"
}

function bbb() {
    document.getElementById("page").className = "image tag"
    document.getElementById("img").className = "page tag-selected"
}
