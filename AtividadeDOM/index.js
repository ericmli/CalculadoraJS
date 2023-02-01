function confirmar() {

    let numero = document.getElementById('numero').value


    document.getElementById("listaTab").innerHTML = ''
    for (let i = 0; i <= 10; i++) {

        document.getElementById("listaTab").innerHTML += '<li>' + numero + ' X ' + i + ' = ' + (i * numero) + '</li>'

        console.log(i)
    }
    numero = document.getElementById('numero').value = ''

}

function aleatorio() {
    document.getElementById("listaTab").innerHTML = ''
    for (let i = 1; i <= 10; i++) {

        for (let j = 0; j <= 10; j++) {

            document.getElementById("listaTab").innerHTML += '<li>' + i + ' X ' + j + ' = ' + (i * j) + '</li>'

            console.log(i)
        }
    }
}