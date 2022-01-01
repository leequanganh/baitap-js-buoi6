  
var sumbt1El = document.getElementById("input-bai1")
var pBt1El = document.querySelector("#bai1 p")
function timNBai1(){
    var sumbt1 = sumbt1El.value*1
    var sumSubbt1 = 0
    // var i = 1
    // do{
    //     i++
    //     sumSubbt2 = sumSubbt2 +i
    // }
    // while(sumSubbt2 < sumbt1){
    //     console.log(i);
    //     pBt1El.innerText = "n="+ " " + i
    // }
    for (var i = 1 ; sumSubbt1 < sumbt1 ; i++ ){
        sumSubbt1 = sumSubbt1 + i
        console.log(i);
        pBt1El.innerText = "n="+ " " + i
        
    }

    
}
