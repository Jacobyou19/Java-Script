let x = 12
document.getElementById("add").onclick = aaa
document.getElementById("minus").onclick = bbb

function aaa() { 
    x=x+1
    document.getElementById("num").innerHTML=x
}
function bbb() {
    x = x - 1
    document.getElementById("num").innerHTML = x
    x == 0
    x = x+0
} 

