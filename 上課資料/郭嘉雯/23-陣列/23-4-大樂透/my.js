
let Button = document.getElementById("ButtonId")

Button.onclick = aaa

function aaa() {
    let loty = [], number;
    while (loty.length < 6) {
        number = Math.ceil(Math.random() * 48);

        if (loty.includes(number, 0) !== true) {
            loty.push(number);
        }
    }
    console.log(loty);

    loty.sort((a, b) => { return (a - b) })

    let ball = document.querySelectorAll(".ball")
    ball.forEach((a, b) => {
        a.innerHTML = loty[b]
    })
}



