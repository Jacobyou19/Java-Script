document.getElementById("btn1").onclick = function () { aaa("red"); }
document.getElementById("btn2").onclick = function () { aaa("green"); }
document.getElementById("btn3").onclick = function () { aaa("blue"); }

function aaa(x) {
    document.getElementById("pic").src = `./img/${x}.jpg`
    document.getElementById("tt").style.csstext = `color:${x}`
}






