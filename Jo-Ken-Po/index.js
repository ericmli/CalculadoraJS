function send() {
    let value = document.getElementById('jokenpo').value

    let random = Math.floor(Math.random() * 3) + 1
    console.log(value)
    console.log(random)

    if (value != random) {
        if (value == 1 && random == 2) {
            alert("Vítoria Maquina")
        }
        if (value == 1 && random == 3) {
            alert("Vítoria !")
        }
        if (value == 2 && random == 1) {
            alert("Vítoria Maquina")
        }
        if (value == 2 && random == 3) {
            alert("Vítoria !")
        }
        if (value == 3 && random == 1) {
            alert("Vítoria Maquina")
        }
        if (value == 3 && random == 2) {
            alert("Vítoria !")
        }
    } else {
        alert("Empate")
    }

}




function par(){
    let parImpar = Math.floor(Math.random() * 100) + 1 

    if(parImpar % 2 == 0){
        alert(`Acertou (número gerado ${parImpar})`)
    }else{
        alert(`Errou (número gerado ${parImpar})`)
    }

}

function impar(){
    let parImpar = Math.floor(Math.random() * 100) + 1 
    if(parImpar % 2 != 0){
        alert(`Acertou (número gerado ${parImpar})`)
    }else{
        alert(`Errou (número gerado ${parImpar})`)
    }
}

var arr = []

function enviarNome(){
    let a = document.getElementById('nome').value

    arr.push(a)
}

function sortearNome(){
    let numero = Math.floor(Math.random() * arr.length);
    alert(arr[numero])
}


var arrTimes = []


function enviarTime(){
    let times = document.getElementById('time').value

    if(arrTimes.length < 8 ){
        arrTimes.push(times)
    }

    if(arrTimes.length == 8){
        document.getElementById('btnSorteio').disabled = false
    }
}

function sortearTime(){

    if(arrTimes.length == 8 ){
        let htmlLista =''
        for(let i = 0 ; i < 4 ; i++){
            let numero = Math.floor(Math.random() * arrTimes.length);
            let tim1 = arrTimes.splice(numero , 1)[0]
            let numero2 = Math.floor(Math.random() * arrTimes.length);
            let tim2 = arrTimes.splice(numero2 , 1)[0]
            htmlLista += `<li> ${tim1} X ${tim2}</li>`
        }
        document.getElementById('listaTimes').innerHTML = htmlLista
    }
}

function validLogin(){
    
}