let arr = ["杏色", "粉色", "灰色", "咖啡", "軍綠"];
let icon = document.querySelectorAll(".icon");

icon.forEach((a, b) => {
    a.onclick = function () { xxx(b); }
    
})
function xxx(N) {
    document.getElementById("tt").innerHTML = arr[N];
    document.getElementById("pic").src = "./img/cc"+N+ ".jpg"

}