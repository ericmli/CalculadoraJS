document.addEventListener("DOMContentLoaded",function(){
    pegarProdutos()
})

function pegarProdutos(){
    $.ajax({
        url: "http://localhost:3000/produtos",
        type: "GET",
        headers: {
            "accept": "application/json"
        },
        success: function(data){
            console.log(data)
            let htmlTab = ''
            for(let i = 0 ; i < data.length; i++){
                htmlTab += `
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].price}</td>
                    <td>${data[i].stock}</td>
                </tr>
                `
                document.getElementById('infosProdutos').innerHTML = htmlTab
            }
        },
        error: function(data){
            console.log(data)
        }
    })
}