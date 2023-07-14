let seg = 0
window.onload = function() {  

 intervalo = setInterval(iContagem, 100) 

}    


function iContagem(){ 
    seg++
    if(seg == 30){
        document.querySelector('#status').src = "verde.jpg";
    }
    if (seg === 40){
        document.querySelector('#status').src = "amarelo.jpg";
    }
    if (seg === 50){
        document.querySelector('#status').src = "vermelho.jpg";
        seg=0
    }

}

