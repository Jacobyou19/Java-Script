let tt = document.queryselector("#tt");
let pic = document.queryselector("pic");
let btn = document.queryselectorAll("button");

for (i = 0; i < btn.length; i++); {
    btn[i].onclick = function () { aaa(i); };
}
function aaa(n) {

    pic.src = `./img/${btn[n].value}.jpg`;
    tt.style.cssText = `color: ${btn[n].value};`;
    tt.innerHTML=btn[n].innerHTML+"的圖片"
}
