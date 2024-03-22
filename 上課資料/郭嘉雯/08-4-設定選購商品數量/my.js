let N=12;

document.getElementById("minus").onclick=aaa;
document.getElementById("add").onclick=bbb;



function aaa() {
    // N=N-1;
    // document.getElementById("num").innerHTML=N;
    click(-1)
    check()
}

function bbb() {
    // N=N+1;
    // document.getElementById("num").innerHTML = N;
    click(1)
    check()
    }
    
function click(num) { 
    N = N + num;
    document.getElementById("num").innerHTML = N;
}

function check(){
    if (N < 10){
        document.getElementById("text").innerHTML = "沒有優惠";
    }
    else if (N >= 10 && N < 20){
        document.getElementById("text").innerHTML = "打8折";
    }
    else {
        document.getElementById("text").innerHTML = "打6折";
        }
}



