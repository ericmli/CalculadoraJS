document.addEventListener("DOMContentLoaded", function () {
    pegarProdutos()
})

function pegarProdutos() {
    $.ajax({
        url: "http://localhost:3000/produtos",
        type: "GET",
        headers: {
            "accept": "application/json"
        },
        success: function (data) {
            console.log(data)
            let htmlTab = ''

            for (let i = 0; i < data.length; i++) {
                let sale = ''
                if (data[i].sale) {
                    sale = 'Sim'
                } else {
                    sale = 'Não'
                }
                htmlTab += `
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].stock}</td>
                    <td>${data[i].categorie}</td>
                    <td>${data[i].launch}</td>
                    <td>${sale}</td>

                    <td> <button type="button" class="btn btn-warning" onclick="editarProduto(${data[i].id})"; return false>Editar</button> </td>

                    <td> <button type="button" class="btn btn-danger" onclick="deleteProduct(${data[i].id})"; return false>Deletar</button> </td>
                </tr>
                `
                document.getElementById('infosProdutos').innerHTML = htmlTab
            }
        },
        error: function (data) {
            console.log(data)
        }
    })
}

function deleteProduct(id) {

    $.ajax({
        url: `http://localhost:3000/produtos/${id}`,
        type: "DELETE",
        headers: {
            "accept": "application/json"
        },
        success: function (data) {
            console.log(data)
            pegarProdutos()


        },
        error: function (data) {
            console.log(data)

        }
    })

}

function editarProduto(id) {

    localStorage.setItem("idProduto", id)
    window.location.href = `http://127.0.0.1:5500/Pinheiro/CRUD/update.html`

}