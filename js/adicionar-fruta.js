var botaoAdicionar = document.querySelector("#adicionar-fruta");

var t = []
var t2 = []
var t3 = []

botaoAdicionar.addEventListener("click", function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    var Fruta = obtemFrutaDoFormulario(form)    


    var FrutaTr = montaTr(Fruta);

   
    var tabela = document.querySelector("#tabela-frutas")

    tabela.appendChild(FrutaTr);

    form.reset();
    MostratrTotalMesmo()
    MostratrQuantidade()
    MostrartrValor()
});


function obtemFrutaDoFormulario(form){{

    var fruta = {
        Nome: form.Nome.value,
        Valor: form.Valor.value,
        Quantidade: form.Quantidade.value,
        Total: calculaTotal(form.Valor.value, form.Quantidade.value),
        Total2: calculaTotal2(form.Quantidade.value),
        Total3: calculaTotal3(form.Valor.value)
    }
    
}

t.push(calculaTotal(form.Valor.value, form.Quantidade.value))
t2.push(calculaTotal2(form.Quantidade.value))
t3.push(calculaTotal3(form.Valor.value))
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


function MostratrTotalMesmo(){
    let total = document.querySelector(".total")
    console.log(t.reduce((a, b) => a + b))
    total.textContent = t.reduce((a, b) => a + b)
}
function MostratrQuantidade(){
    let quantidade = document.querySelector(".quantidade")
    quantidade.textContent = t2.reduce((a, b) => a + b)
}
function MostrartrValor(){
    let valor = document.querySelector(".valor")
    valor.textContent = t3.reduce((a, b) => a + b)
}

