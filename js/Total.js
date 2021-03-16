var totalFruta = document.querySelectorAll(".frutas");

for(var i = 0; i < totalFruta.length ; i++){
    
    var Total = totalFrutas[i];
       
    var total = calculaTotal(Valor,Quantidade);
    var t = calculaTotal2(Quantidade)
    var v = calculaTotal3(Valor)
}

  
    
function calculaTotal(Valor,Quantidade){
    let tdTotal = 0;
    

    tdTotal = (Valor * Quantidade) 
      
    return tdTotal;

} 

function calculaTotal2(Quantidade){
    let q = 0

    q = parseInt(Quantidade)

    return q;
}
function calculaTotal3(Valor){
    let v = 0

    v = parseInt(Valor)

    return v
}


