function confirmar() {

    let numero = document.getElementById('numero').value


    document.getElementById("listaTab").innerHTML = ''
    for (let i = 0; i <= 10; i++) {

        document.getElementById("listaTab").innerHTML += '<li>' + numero + ' X ' + i + ' = ' + (i * numero) + '</li>'

        
    }
    numero = document.getElementById('numero').value = ''

}

function aleatorio() {
    let tabuadaHTML = ''
    for (let i = 1; i <= 10; i++) {

        tabuadaHTML +=  '<ul>'
        for (let j = 0; j <= 10; j++) {
            tabuadaHTML+= '<li>' + i + ' X ' + j + ' = ' + (i * j) + '</li>'
        }
        tabuadaHTML += '</ul>'
    }
    document.getElementById('listaTab').innerHTML = tabuadaHTML
    console.log(tabuadaHTML)
}