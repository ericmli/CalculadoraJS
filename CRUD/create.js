function criarProduto(){

    let produto = document.getElementById('inputProduto').value.trim()
    let preco = document.getElementById('inputPreco').value.trim()
    let estoque = document.getElementById('inputEstoque').value.trim()


    if(produto.length == 0 || preco.length == 0 || estoque.length == 0){
        if(produto.length == 0 && produto.length < 3){
            document.getElementById('inputProduto').classList.add(`addStyle`)
        }
        if(preco.length == 0 ){
            document.getElementById('inputPreco').classList.add(`addStyle`)
        }
        if(estoque.length == 0){
            document.getElementById('inputEstoque').classList.add(`addStyle`)
        }

    }else{
        let novoProduto = {
            name: produto,
            price: preco,
            stock: estoque
        }

        $.ajax({
            url: "http://localhost:3000/produtos",
            type: "POST",
            headers: {
                "accept": "application/json"
            },
            dataType: 'json', // Tipo de informação que sera enviado
            contentType: 'application/json', // Tipo de conteúdo da informação que será enviado
            data: JSON.stringify(novoProduto), // Transforma meu objeto em uma string JSON para enviar
            success: function(data){
                console.log(data)
                window.location.href = "http://127.0.0.1:5500/Pinheiro/CRUD/read.html"
            },
            error: function(data){
                console.log(data)
            }
        })

    }

}