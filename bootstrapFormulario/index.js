
var arraySolid = []

function cancelar() {
    alert("Registro cancelado!")
}

function limpar() {
    document.getElementById("nome").value = ''
    document.getElementById("email").value = ''
    document.getElementById("celular").value = ''
    document.getElementById("cidade").value = ''

    document.getElementById('nome').classList.remove(`inputErrado`)
    document.getElementById('email').classList.remove(`inputErrado`)
    document.getElementById('celular').classList.remove(`inputErrado`)
    document.getElementById('cidade').classList.remove(`inputErrado`)

}

function enviar() {

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let celular = document.getElementById('celular').value
    let cidade = document.getElementById('cidade').value
    

    if (nome.length > 0 && email.length > 0 && celular.length > 0 && cidade.length > 0) {
        arraySolid.push({
            nome: nome,
            email: email,
            celular: celular,
            cidade: cidade
        })

    document.getElementById("nome").value = ''
    document.getElementById("email").value = ''
    document.getElementById("celular").value = ''
    document.getElementById("cidade").value = ''
        
    document.getElementById('nome').classList.remove(`inputErrado`)
    document.getElementById('email').classList.remove(`inputErrado`)
    document.getElementById('celular').classList.remove(`inputErrado`)
    document.getElementById('cidade').classList.remove(`inputErrado`)

    } else {
        document.getElementById('nome').classList.add(`inputErrado`)
        document.getElementById('email').classList.add(`inputErrado`)
        document.getElementById('celular').classList.add(`inputErrado`)
        document.getElementById('cidade').classList.add(`inputErrado`)

    }

}

// function insertEnter(event) {

//     if (vNome.length <= 3) {
//         document.getElementById('nomeInput').classList.add(`inputErrado`)
//     } else if (event.key == 'Enter') {
//         arrNome.push(vNome)
//         alert(arrNome)
//     } else {
//         document.getElementById('nomeInput').classList.remove('inputErrado')
//     }

// }