/*=========================  一個蘿蔔一個坑 =========================*/
// document.getElementById("s1").onclick = aaa;
// document.getElementById("s2").onclick = bbb;
// document.getElementById("s3").onclick = ccc;
// document.getElementById("s4").onclick = ddd;
// document.getElementById("s5").onclick = eee;
// document.getElementById("s6").onclick = fff;

// function aaa() {
//     document.getElementById("pic").src = "./img/001.jpg";
// }
// function bbb() {
//     document.getElementById("pic").src = "./img/002.jpg";
// }
// function ccc() {
//     document.getElementById("pic").src = "./img/003.jpg";
// }
// function ddd() {
//     document.getElementById("pic").src = "./img/004.jpg";
// }
// function eee() {
//     document.getElementById("pic").src = "./img/005.jpg";
// }
// function fff() {
//     document.getElementById("pic").src = "./img/006.jpg";
// }

/*=========================  多個蘿蔔一個坑 =========================*/
// document.getElementById("s1").onclick = aaa;
// document.getElementById("s2").onclick = aaa;
// document.getElementById("s3").onclick = aaa;
// document.getElementById("s4").onclick = aaa;
// document.getElementById("s5").onclick = aaa;
// document.getElementById("s6").onclick = aaa;

// function aaa() {
//     if (this.id == "s1") { document.getElementById("pic").src = "./img/001.jpg"; }
//     if (this.id == "s2") { document.getElementById("pic").src = "./img/002.jpg"; }
//     if (this.id == "s3") { document.getElementById("pic").src = "./img/003.jpg"; }
//     if (this.id == "s4") { document.getElementById("pic").src = "./img/004.jpg"; }
//     if (this.id == "s5") { document.getElementById("pic").src = "./img/005.jpg"; }
//     if (this.id == "s6") { document.getElementById("pic").src = "./img/006.jpg"; }
//}

for (let i = 1; i <= 6; i++){
    document.getElementById("s" + i).onclick=aaa

}
function aaa() {
    for (let i = 1; i <= 6; i++) {
        if (this.id == "s" + i) {
            document.getElementById("pic").src = "./img/00" + i + ".jpg"
        }
    }
}

