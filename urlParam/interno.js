document.addEventListener("DOMContentLoaded", function() {
    // Rodar essa função quando o documento e arquivos forem carregados
  
    let nomeDoLocalStorage = localStorage.getItem('nome')
    // alert(nomeDoLocalStorage)
  
    // Chamar a função de pegar pokemon pela url do local storage
    pegarPkmEspecifico()
    
  });
  
  // Function para pegar pokemon
  function pegarPkmEspecifico(){
  
    // Guardar em uma variável a informação guardada no local storage com key pokemonUrl
    let urlDoPkm = localStorage.getItem('pokemonUrl')
  
    $.ajax({
      url: urlDoPkm, // usar a url do local storage para fazer a api
      type: `GET`,
      headers: {
        "accept": "application/json"
      },
      success: function(data){
        console.log(data)
        document.getElementById('img1').src = data.sprites.front_default
        document.getElementById('img2').src = data.sprites.front_shiny
        document.getElementById('nomePkm').innerHTML = `Luiz cabeça de ${data.name}`

        for(let i = 0 ; i <  data.moves.length ; i++){
            let htmlAdd = ''

            htmlAdd += `
            <li class="list-group-item">${data.moves[i].move.name}</li>
            `
            document.getElementById('listaMoves').innerHTML += htmlAdd
        }

      },
      error: function(erro){
        console.log(erro)
      }
    })
  
  }