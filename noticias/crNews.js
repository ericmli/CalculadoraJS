// ADICIONE DE FORMA DINÂMICA AS OPÇÕES DO SELECT DE CATEGORIAS DA NOTÍCIA USANDO O db.json

document.addEventListener("DOMContentLoaded", function () {

    pegarInfos()

})


function pegarInfos() {

    $.ajax({
        url: `http://localhost:3000/categories`,
        type: "GET",
        headers: {
            "accept": "application/json"
        },
        success: function (data) {
            console.log(data)
            let html = ''
            for (let percorrer of data) {
                html = `
            <option value="${percorrer.id}">
                ${percorrer.category}
            </option>
                `
                document.getElementById('selectCateg').innerHTML += html
            }

            

        },
        error: function (data) {
            console.log(data)

        }
    })

}

function criarCategoria(){
    category = document.getElementById('inputCategoria').value
    let novoJogo = {
        category: category,
    }

    $.ajax({
        url: "http://localhost:3000/categories",
        type: "POST",
        headers: {
            "accept": "application/json"
        },
        dataType: 'json',
        contentType: 'application/json', 
        data: JSON.stringify(novoJogo),
        success: function(data){
            console.log(data)
            window.location.href = "file:///C:/Codes/Pinheiro/noticias/crNews.html"
        },
        error: function(data){
            console.log(data)
        }
    })
}

function criarAutor(){
    author = document.getElementById('inputAutor').value
    let novoJogo = {
        author: author,
    }

    $.ajax({
        url: "http://localhost:3000/authors",
        type: "POST",
        headers: {
            "accept": "application/json"
        },
        dataType: 'json',
        contentType: 'application/json', 
        data: JSON.stringify(novoJogo),
        success: function(data){
            console.log(data)
            window.location.href = "file:///C:/Codes/Pinheiro/noticias/crNews.html"
        },
        error: function(data){
            console.log(data)
        }
    })
}