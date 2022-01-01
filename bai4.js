var divs = document.querySelectorAll("#bai4 div")
function onDivs(){
    for(var k = 0 ; k<= divs.length; k++){
       if(k%2 == 0){
           console.log(divs[k]);
           divs[k].style.background="red"
           divs[k].style.display="block"

       }
       else if(k%2 != 0){
        divs[k].style.background="blue"
        divs[k].style.display="block"

    
       }
    
    }
    
}

