let big = document.querySelector("#pic");
let small = document.querySelectorAll("#BOX img")


small.forEach((a, b)=>{
    a.onclick = function () { aaa(b); }

})

// // for (let i = 0; i <small.length; i++){
// //     small[i].onclick = function () { aaa(i); };
// }

function aaa(n) {
    n = n + 1;
    big.src = "./img/00" + n + ".jpg"
}

// function aaa() {
//     for(let i=1;i<=6;i++){
//         if(this.id=="s"+i){ document.getElementById("pic").src ="./img/00"+i+".jpg"}
//     }
// }



