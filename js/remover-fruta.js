var Frutas = document.querySelectorAll(".fruta")

var tabela = document.querySelector(".tabela-frutas");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },1300);

});
