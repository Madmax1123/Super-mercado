var titulo = document.querySelector(".titulo");
titulo.textContent = "Supermercado virtual";

var Frutas = document.querySelectorAll(".fruta");

for(var i = 0; i < Frutas.length ; i++){
    
    var Fruta = Frutas[i];

    var tdValor= Fruta.querySelector(".info-Valor");
    var Valor = tdValor.textContent;
    
    var tdQuantidade = Fruta.querySelector(".info-Quantidade");
    var Quantidade = tdQuantidade.textContent;

    
    
    var tdTotal =  Fruta.querySelector(".info-Total");
       
    var Total = calculaTotal(Valor,Quantidade);
        tdTotal.textContent = Total;
 
    }

    
function calculaTotal(Valor,Quantidade){
    var Total = 0;

    Total = (Valor * Quantidade) 
  

    return Total;
}
