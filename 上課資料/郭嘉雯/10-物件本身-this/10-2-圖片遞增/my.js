let N = 1; 

let CAKE = document.getElementById("cake");
CAKE.onclick = aaa;

function aaa() {

    if (N >= 6) { N = 1 } else{N= N+1}
       
        this.src = "./img/photo" +N+ ".jpg"

}