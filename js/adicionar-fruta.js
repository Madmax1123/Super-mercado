var botaoAdicionar = document.querySelector("#adicionar-fruta");
botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var Fruta = obtemFrutaDoFormulario(form)    

    var FrutaTr = montaTr(Fruta);

   
    var tabela = document.querySelector("#tabela-frutas")

    tabela.appendChild(FrutaTr);
    
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro")
    mensagensErro.innerHTML = "";

});

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function obtemFrutaDoFormulario(form){

    var fruta = {
        Nome: form.Nome.value,
        Valor: form.Valor.value,
        Quantidade: form.Quantidade.value,
        Total: calculaTotal(form.Valor.value, form.Quantidade.value)
    }
   
    return fruta;
}

function montaTr(fruta){
    var frutaTr = document.createElement("tr")
    frutaTr.classList.add("produtos");

    frutaTr.appendChild(montaTd(fruta.Nome, "info-Nome"));
    frutaTr.appendChild(montaTd(fruta.Valor, "info-Valor"));
    frutaTr.appendChild(montaTd(fruta.Quantidade, "info-Quantidade"));
    frutaTr.appendChild(montaTd(fruta.Total, "info-Total"));
    

    return frutaTr
}


function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}


function validaFruta(Fruta){
    
    var erros = [];
    
    if( Fruta.Nome.length == 0){
        erros.push("O nome não pode estar em branco!");
    }


    
    if( Fruta.Valor.length == 0){
        erros.push("O valor não pode estar em branco!")
    }
    
    if( Fruta.Quantidade.length == 0){
        erros.push("A quantidade não pode estar em branco!")
    }
    return erros;
}