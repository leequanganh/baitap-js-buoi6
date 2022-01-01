var zInput = document.getElementById("z")
var pEl = document.querySelector("#bai3 > p ")
function tinhMul (){
    var z = zInput.value*1
    var mul = 1
    var l =1
    do{
        mul = mul*l
        l++
    ////////////////////////////////////////////////////////////////////
    }while(l <=z){
        console.log({mul});
        pEl.innerText= "ket qua la :" + " "+ mul
    }
}


