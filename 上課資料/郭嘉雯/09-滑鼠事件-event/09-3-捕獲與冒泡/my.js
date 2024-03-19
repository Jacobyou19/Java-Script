let grandpa = document.getElementById("grandpa");
let father = document.getElementById("father");
let child = document.getElementById("child");
let bb = document.getElementById("bb");

grandpa.onclick = aaa
father.onclick = bbb
child.onclick = ccc
bb.onclick = ddd

function aaa(e) { 
    grandpa.style.backgroundColor = "red";
    e.stopPropagation();
}
function bbb(e) {
    father.style.backgroundColor = "green";
    e.stopPropagation();
}
function ccc(e) {
    child.style.backgroundColor = "yellow";
    e.stopPropagation();
}
function ddd(e) {
    bb.style.backgroundColor = "blue";
    e.stopPropagation();
}
