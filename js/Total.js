var totalFruta = document.querySelectorAll(".frutas");

for(var i = 0; i < totalFruta.length ; i++){
    
    var Total = totalFrutas[i];

    var tdquantidade = total.querySelector(".info-quantidade");
    var quantidade = tdquantidade.textContent;

    var tDTotal = total.querySelector(".total")
    
       
    var total = calculaTotal(Valor,Quantidade);
        tdTotal.textContent = total;
    
 
    }

  
    
function calculaTotal(Valor,Quantidade){
    var tdTotal = 0;

    tdTotal = (Valor * Quantidade) 
      
    return tdTotal;

} 

function Total(total, p){
    var p = 0;

    p = (total + p)

    return totall;
}