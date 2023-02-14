// Ler o valor que tem dentro do input nomeCompleto
function pegaValorNomeCompleto() {
    console.log(document.getElementById('nomeCompleto').value)
    var valorInput = document.getElementById('nomeCompleto').value
}

var elemCaixa = document.getElementById('caixa')

// value pega o valor digitado
function mudarCorCaixa() {
    // Leitura do valor insirido no input
    let novaCor = document.getElementById('textoCor').value
    // Pega o elemento declarado e muda a propriedade
    elemCaixa.style.backgroundColor = novaCor



}

function imparPar() {
    // Leitura do valor insirido no input
    let numero = document.getElementById('texto').value
    // Pega o elemento declarado e imprime
    Number(numero)
    if (numero.length > 0) {
        if ((numero % 2) == 0) {
            alert(numero + " É par")
        } else {
            alert(numero + " É impar")
        }
    } else {
        alert("Sem informação")
    }

}


// Adicionar dentro de uma array pelo input
let arrNomes = []

function nomesRegistrar() {
    let nomes = document.getElementById("nomes").value
    // trim tira os espaços
    if (nomes.trim().length > 0) {
        // Adicionar no array
        arrNomes.push(nomes)

        // Linha serve para resetar oque está escrito no input
        document.getElementById("nomes").value = ''

        // Adicionar diretamente no HTML
        document.getElementById("listaNomes").innerHTML += '<li>' + nomes + '</li>'
    }

}

let arr = []

function register() {

    let names = document.getElementById('name').value.trim()
    let lastName = document.getElementById('lastName').value.trim()
    let age = document.getElementById('age').value.trim()

    if (names.length > 0 && lastName.length > 0  && age.length > 0) {

       arr.push({
        nome: names,
        sobrenome: lastName,
        idade: age
       })
       atualizaCards()
    }else{
        alert("Sem dados")
    }

console.log(arr)
}

function atualizaCards(){
    let cardsHtml = ''
    for(let i = 0; i < arr.length; i++){
        cardsHtml += `
        <div class="itemCard" onclick="removerPessoa(${i})">
            <span>Nome</span>
            <p>${arr[i].nome}</p>
            <span>Sobrenome</span>
            <p>${arr[i].sobrenome}</p>
            <span>Idade</span>
            <p>${arr[i].idade}</p>
        </div>
      `
    }
    document.getElementById('containerCards').innerHTML = cardsHtml
}

function removerPessoa(i){
    arr.splice(i,1)
    atualizaCards()
}

//  listadeCompras.splice(listadeCompras.indexOf(function),1) 