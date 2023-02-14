function validLogin() {
    let username = document.getElementById('inputUser').value
    let password = document.getElementById('inputPass').value
    if (username.length == 0) {
        document.getElementById('inputUser').classList.add(`inputErrado`)

    } else {
        document.getElementById('inputUser').classList.remove(`inputErrado`)

    }
    if (password.length == 0) {
        document.getElementById('inputPass').classList.add(`inputErrado`)
    } else {
        document.getElementById('inputPass').classList.remove(`inputErrado`)
    }
}

function validaCampo(event) {
    // console.log( event )
    console.log(event.target.value)
}

function validCep(event) {
    console.log(event.target.value.length)
    if (event.target.value.length == 8) {
        document.getElementById(`btnCep`).disabled = false
        document.getElementById(`inputCep`).disabled = true
    }
}



function validPass() {
    let pass1 = document.getElementById('inputRepitaSenha').value
    let pass2 = document.getElementById('inputRepitaSenha2').value

    if (pass1.length > 7 && pass1 == pass2) {
        document.getElementById(`btnPass`).disabled = false
        console.log("teste")
    } else {
        document.getElementById(`btnPass`).disabled = true
    }
}

var arrNome = []

function insertEnter(event) {
    let vNome = document.getElementById('nomeInput').value
    if (vNome.length <= 3) {
        document.getElementById('nomeInput').classList.add(`inputErrado`)
    } else if (event.key == 'Enter') {
        arrNome.push(vNome)
        alert(arrNome)
    } else {
        document.getElementById('nomeInput').classList.remove('inputErrado')
    }

}