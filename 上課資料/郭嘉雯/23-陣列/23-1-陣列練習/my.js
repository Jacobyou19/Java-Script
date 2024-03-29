const arr = ["蘋果", "橘子", "香蕉"]
document.getElementById("t1").innerHTML = arr;

arr.push("芒果");
document.getElementById("t2").innerHTML = arr;

arr.unshift("芒果");
document.getElementById("t3").innerHTML = arr;

let x = arr.includes("橘子",2)
document.getElementById("t4").innerHTML = x;

arr.pop();
document.getElementById("t5").innerHTML = arr;

arr.shift();
document.getElementById("t6").innerHTML = arr;