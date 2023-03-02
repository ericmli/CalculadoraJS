// FAÇA UMA TELA ONDE LISTA AS NOTICIAS E ABAIXO ADICIONA ELAS
// Os campos precisam todos ter valores
// O campo categoria pode ser "Brasil" "Mundo" "Esporte" "Economia"

document.addEventListener("DOMContentLoaded", function () {
    att()
})

function att() {
    $.ajax({


        url: "http://localhost:3000/noticias",
        type: "GET",
        headers: {
            "accept": "application/json"
        },
        success: function (data) {
            console.log(data)
            for (let i = 0; i < data.length; i++) {
                let list = ''
                list += `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].titulo}</td>
                <td >${data[i].subtitulo}</td>
                <td>${data[i].corpo}</td>
                <td>${data[i].categoria}</td>
                <td>${data[i].dataPostagem}</td>
                <td> <button type="button" class="btn btn-danger" onclick="excluir(${data[i].id})">Excluir</button></td>
            </tr>
                `
                document.getElementById('listaNoticias').innerHTML += list
            }
        },
        error: function (data) {
            console.log(data)
        }
    })

}

function excluir(id){
    $.ajax({
        url: `http://localhost:3000/noticias/${id}`,
        type: "DELETE",
        headers: {
            "accept": "application/json"
        },
        success: function (data) {
            console.log(data)
            att()
        },
        error: function (data) {
            console.log(data)

        }
    })
}

function enviar(){

    let titulo = document.getElementById('inputTitulo').value.trim()
    let subTitulo = document.getElementById('inputSubTitulo').value.trim()
    let corpo = document.getElementById('inputCorpo').value.trim()
    let categoria = document.getElementById('inputCategoria').value.trim()
    let data = document.getElementById('inputData').value

    if(titulo.length == 0 || subTitulo.length == 0 || corpo.length == 0 || categoria.length == 0 || data.length == 0){
        if(titulo.length == 0 || titulo.length < 3){
            document.getElementById('inputTitulo').classList.add(`addStyle`)
        }else{
            document.getElementById('inputTitulo').classList.remove(`addStyle`)
        }
        if(subTitulo.length == 0 || subTitulo.length < 3){
            document.getElementById('inputSubTitulo').classList.add(`addStyle`)
        }else{
            document.getElementById('inputSubTitulo').classList.remove(`addStyle`)
        }
        if(corpo.length == 0 || corpo.length < 3){
            document.getElementById('inputCorpo').classList.add(`addStyle`)
        }else{
            document.getElementById('inputCorpo').classList.remove(`addStyle`)
        }
        if(categoria.length == 0 || categoria.length < 3){
            document.getElementById('inputCategoria').classList.add(`addStyle`)
        }else{
            document.getElementById('inputCategoria').classList.remove(`addStyle`)
        }
        if(data.length == 0){
            document.getElementById('inputData').classList.add(`addStyle`)
        }else{
            document.getElementById('inputData').classList.remove(`addStyle`)
        }
    }else{

        let novaNoticia = {
            titulo : titulo,
            subtitulo : subTitulo,
            corpo : corpo,
            categoria : categoria,
            dataPostagem : data
        }

    $.ajax({

        url: "http://localhost:3000/noticias",
        type: "POST",
        headers: {
            "accept": "application/json"
        },
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(novaNoticia),
        success: function(data){
            console.log(data)
            att()
        },
        error: function(data){
            console.log(data)
        }
    })
}
}

