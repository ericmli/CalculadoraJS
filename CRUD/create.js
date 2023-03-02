function criarProduto(){

    let produto = document.getElementById('inputProduto').value.trim()
    let preco = document.getElementById('inputPreco').value.trim()
    let estoque = document.getElementById('inputEstoque').value.trim()
    let descricao = document.getElementById('inputDescricao').value.trim()
    let lancamento = document.getElementById('inputLancamento').value
    let categoria = document.getElementById('inputCategoria').value
    let promocao = document.getElementById('inputPromocao').value

    if(promocao == "Sim"){
        promocao = true
    }else if(promocao == "Não"){
        promocao = false
    }

    if(produto.length == 0 || preco.length == 0 || estoque.length == 0
       || produto == 0 || preco == 0 || estoque == 0 || descricao.length < 25  || lancamento.length == 0 ){

        if(produto.length == 0 || produto.length < 3){
            document.getElementById('inputProduto').classList.add(`addStyle`)
        }else{
            document.getElementById('inputProduto').classList.remove(`addStyle`)

        }
        if(preco.length == 0 || preco == 0){
            document.getElementById('inputPreco').classList.add(`addStyle`)
        }else{
            document.getElementById('inputPreco').classList.remove(`addStyle`)

        }
        if(estoque.length == 0 || estoque == 0){
            document.getElementById('inputEstoque').classList.add(`addStyle`)
        }else{
            document.getElementById('inputEstoque').classList.remove(`addStyle`)

        }if(descricao.length < 25){
            document.getElementById('inputDescricao').classList.add(`addStyle`)
        }else{
            document.getElementById('inputDescricao').classList.remove(`addStyle`)
        }if(lancamento.length == 0 ){
            document.getElementById('inputLancamento').classList.add(`addStyle`)
        }else{
            document.getElementById('inputLancamento').classList.remove(`addStyle`)
        } if(categoria.length < 1){
            document.getElementById('inputCategoria').classList.add(`addStyle`)
        }else{
            document.getElementById('inputCategoria').classList.remove(`addStyle`)
        }

    }else{
        let novoProduto = {
            name: produto,
            price: Number(preco),
            stock: Number(estoque),
            description : descricao,
            categorie : categoria,
            launch : lancamento,
            sale : promocao,
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
                window.location.href = "http://127.0.0.1:5500/Pinheiro/CRUD/read.html" // Voltar para a tela
            },
            error: function(data){
                console.log(data)
            }
        })

    }

}