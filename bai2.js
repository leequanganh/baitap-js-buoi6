// input
var xInput = document.getElementById("x")
var nInput = document.getElementById("n")
var p2El = document.getElementById("ket-qua-bai-hai")
function tinhSum(){
    var sum = 0
    var x = xInput.value*1
    var n = nInput.value*1
     
    // var i = 1
    // do {
    //     sum= sum + Math.pow(x,i)
    //     i++
    // } while(i<=n){
    //     console.log({sum});
    //     p2El.innerText="ket qua la : " + " " + sum
    //     return
    // }

    for (var i = 1 ; i <= n ; i++){
        sum= sum + Math.pow(x,i) 
    
        p2El.innerText="ket qua la : " + " " + sum
        
    } 
}
var btnEl = document.querySelector("#bai2 button")
btnEl.addEventListener("click",tinhSum)