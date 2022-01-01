


var bai5 = document.getElementById("bai5")
var numBt5 = document.getElementById("numBt5")
var ketQua = document.createElement ("h2")
bai5.appendChild(ketQua)
function searchPrime(){
  ketQua.innerText= ""
  var num = numBt5.value*1
  var soNt = ""
  for(var i = 1 ; i <= num ; i++){
    isPrime = true
    for(var n = 2 ; n <= i ; n++){
      if(i % n == 0 && n != i){
        isPrime = false
      }
    }
    if(isPrime == true){
      console.log(i);
      soNt = soNt +" " + i
      ketQua.innerText= "cac so nguyen to tu 1 den " + " " + num + " " + "la" + " " + soNt
    }
  }
  
}