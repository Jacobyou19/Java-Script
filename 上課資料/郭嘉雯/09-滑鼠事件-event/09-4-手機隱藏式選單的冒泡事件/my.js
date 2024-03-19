document.getElementById("icon").onclick = show;

document.body.onclick = hide;

function show(e) {
    
    document.getElementById("menu").style.display = "block";
    e.stopPropagation = ();
}

function hide() {
    
    document.getElementById("menu").style.display = "none";

}
    
document.getElementById("aa").onclick = aa;
document.getElementById("bb").onclick = bb;

function aa(e) {

    e.stopPropagation();
    

}

function bb(e) {

    e.stopPropagation();


}