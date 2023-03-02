function irParaInterna() {

    let nome = document.getElementById('inputNome').value.trim()

    localStorage.setItem('nome', nome)

    // Mudar para minha página interna
    window.location.href = 'http://127.0.0.1:5500/Pinheiro/urlParam/interno.html'

}



function sendAPI() {

    $.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
        type: 'GET',
        headers: {
            'accept': 'application/json'
        },
        success: function (data) {
            console.log(data)
            let htmlLis = ''
            for (let i = 0; i < data.results.length; i++) {
                htmlLis += `  
                <button type="button" class="list-group-item list-group-item-action"
                onclick="pkmInterno('${data.results[i].url}')" >
                  ${ data.results[i].name }
                </button>
`

            }

            document.getElementById('list').innerHTML = htmlLis
        },
        error: function (error) {
            console.log(error)
        },
    })

}

// Função que recebe a url do pokemon clicado como parâmetro
function pkmInterno(urlPkm) {
    console.log(urlPkm)
    // Coloca um item com propriedade e valor recebido
    localStorage.setItem('pokemonUrl', urlPkm)
    // Mandar o usuário para a página interna
    window.location.href = "http://127.0.0.1:5500/Pinheiro/urlParam/interno.html";
}