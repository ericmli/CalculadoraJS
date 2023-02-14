function gerar() {


    let random = Math.floor(Math.random() * 88) + 11
    $.ajax({
        url: `https://brasilapi.com.br/api/ddd/v1/${random}`,
        type: 'GET',
        headers: {
            'accept': 'application/json'
        },
        success: function (data) {
            console.log(data)
            let htmlLis = ''
            for (let i = 0; i < data.cities.length; i++) {
                htmlLis += `
                <li class="list-group-item">${data.cities[i]}</li>
                `
            }
            document.getElementById('list').innerHTML = htmlLis
        },
        error: function (error) {
            console.log(error)
        },
    })

    document.getElementById('text').innerHTML = `DDD Gerado : ${random}`

}


function addCep() {

    let cep = document.getElementById('inputCep').value



    $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        type: 'GET',
        headers: {
            'accept': 'application/json'
        },
        success: function (data) {
            console.log(data)

            document.getElementById('rua').value = data.logradouro
            document.getElementById('complemento').value = data.complemento
            document.getElementById('bairro').value = data.bairro
            document.getElementById('cidade').value = data.localidade
            document.getElementById('uf').value = data.uf

        },
        error: function (error) {
            console.log(error)
        },
    })
}

function limpar() {

    document.getElementById('nome').value = ''
    document.getElementById('inputCep').value = ''
    document.getElementById('numero').value = ''
    document.getElementById('rua').value = ''
    document.getElementById('complemento').value = ''
    document.getElementById('bairro').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('uf').value = ''

    document.getElementById('nome').classList.remove(`inputErrado`)
    document.getElementById('inputCep').classList.remove(`inputErrado`)
    document.getElementById('numero').classList.remove(`inputErrado`)

}

function confirmar() {

    let nome = document.getElementById('nome').value
    let cep = document.getElementById('inputCep').value
    let numero = document.getElementById('numero').value
    let rua = document.getElementById('rua').value
    let complemento = document.getElementById('complemento').value
    let bairro = document.getElementById('bairro').value
    let cidade = document.getElementById('cidade').value
    let uf = document.getElementById('uf').value
    let text = ''
    if (nome.length == 0 && cep.length == 0 && numero.length == 0) {
        document.getElementById('nome').classList.add(`inputErrado`)
        document.getElementById('inputCep').classList.add(`inputErrado`)
        document.getElementById('numero').classList.add(`inputErrado`)
        alert("Todos os campos nulos")
    } else if (nome.length == 0) {
        if (nome.length == 0 && cep.length == 0) {
            alert("Campos Nome e CEP estão nulos")
            document.getElementById('nome').classList.add(`inputErrado`)
            document.getElementById('inputCep').classList.add(`inputErrado`)

        }
        if (nome.length == 0 && numero.length == 0) {
            document.getElementById('nome').classList.add(`inputErrado`)
            document.getElementById('numero').classList.add(`inputErrado`)

            alert("Campos Nome e Número estão nulos")
        } else {
            document.getElementById('nome').classList.add(`inputErrado`)
            alert("Nome está nulo")
        }

    } else if (cep.length == 0) {
        if (cep.length == 0 && numero.length == 0) {
            document.getElementById('inputCep').classList.add(`inputErrado`)
            document.getElementById('numero').classList.add(`inputErrado`)

            alert("Campos CEP e Número estão nulos")
        } else {
            document.getElementById('inputCep').classList.add(`inputErrado`)

            alert("CEP está nulo")
        }

    } else if (numero.length == 0) {
        document.getElementById('numero').classList.add(`inputErrado`)
        alert("Número está nulo")
    } else if (nome.length > 0 && cep.length > 0 && numero.length > 0) {

        alert(`
        Nome Cadastrado : ${nome}
        CEP Cadastrado : ${cep}
        Rua Cadastrado : ${rua}
        Número Cadastrado : ${numero}
        Complemento Cadastrado : ${complemento}
        Bairro Cadastrado : ${bairro}
        Cidade Cadastrado : ${cidade}
        Estado Cadastrado : ${uf}
        `)
        limpar()
    }

}

