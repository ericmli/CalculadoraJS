//  Adiciona um evento para ser executado após o conteúdo ser carregado
document.addEventListener("DOMContentLoaded", function () {
    // Seu code aqui


})


function addAPI() {

    let name = document.getElementById('nome').value

    $.ajax({
        url: 'https://api.nationalize.io?name=' + name,
        type: 'GET',
        headers: {
            'accept': 'application/json'
        },
        success: function (data) {
            console.log(data)
            let htmlLis = ''
            for (let i = 0; i < data.country.length; i++) {
                htmlLis += `
                <li class="list-group-item">${data.country[i].country_id} - Probabilidade ${data.country[i].probability}</li>
                `
            }
            document.getElementById('listaPaises').innerHTML = htmlLis
        },
        error: function (error) {
            console.log(error)
        },
    })

}


function addCEP() {

    let cep = document.getElementById('cep').value

    $.ajax({
        url: 'https://viacep.com.br/ws/' + cep + '/json/',
        type: 'GET',
        headers: {
            'accept': 'application/json'
        },
        success: function (data) {
            console.log(data)
            let htmlLis = ''

            htmlLis += `<li class="list-group-item">CEP: ${data.cep}  Logradouro: ${data.logradouro} - Complemento: ${data.complemento} - Bairro: ${data.bairro} - Localidade : ${data.localidade} - UF: ${data.uf} </li>
                `

            document.getElementById('listaCEP').innerHTML = htmlLis
        },
        error: function (error) {
            console.log(error)
        },
    })

}