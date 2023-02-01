function confirmar(){

    let numero = document.getElementById('numero').value

    
    document.getElementById("listaTab").innerHTML = ''
    for(let i = 0; i<= 10 ; i++){

        document.getElementById("listaTab").innerHTML += '<li>'+ numero + ' X ' + i + ' = ' + (i * numero) +'</li>'

        console.log(i)
    }
    numero = document.getElementById('numero').value =''

}