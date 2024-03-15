let pic = document.getElementById("pic")
let tt = document.getElementById("tt")

function aaa() {
    pic.src = "./img/g02.jpg"; 
    tt.innerHTML= "珊瑚粉";
}
function bbb() {
    pic.src = "./img/g01.jpg";
    tt.innerHTML = "芥末綠";
}

document.getElementById("icon1").onclick = bbb
document.getElementById("icon2").onclick= aaa