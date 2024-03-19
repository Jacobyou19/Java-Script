document.getElementById("s1").onclick = aaa
document.getElementById("s2").onclick = aaa
document.getElementById("s3").onclick = aaa
document.getElementById("s4").onclick = aaa
document.getElementById("s5").onclick = aaa
document.getElementById("s6").onclick = aaa



function aaa() {
    if (this.id == "s1") {
        document.getElementById("pic").src = "./img/001.jpg";
    
    }
    if (this.id == "s2") {
        document.getElementById("pic").src = "./img/002.jpg";

    }
    if (this.id == "s3") {
        document.getElementById("pic").src = "./img/003.jpg";

    }
    if (this.id == "s4") {
        document.getElementById("pic").src = "./img/004.jpg";

    }
    if (this.id == "s5") {
        document.getElementById("pic").src = "./img/005.jpg";

    }
    if (this.id == "s6") {
        document.getElementById("pic").src = "./img/006.jpg";

    }
}