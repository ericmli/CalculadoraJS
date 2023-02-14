// function ordem() {


//     var num1 = Number(prompt("Número um"))
//     var num2 = Number(prompt("Número dois"))
//     var num3 = Number(prompt("Número três"))

//     var array = [num1, num2, num3]


//     for (var i = 0; i < array.length; i++) {
//         for (var j = 1; j < array.length; j++) {
//             if (array[i] < array[j]) {
//                 console.log("Número : " + array[i])
//             } else if (array[i] < array[j++]) {
//                 console.log("Número : " + array[i])
//             } else {
//                 console.log("Número : " + array[i])
//             }
//         }
//     }

// }

// METODOS
// Propriedades do objeto
// var carro = {
//     marca: 'Fiat',
//     modelo: 'Uno',
//     ano: 2020,
//     acelerar: function(){
//         // Acelerar o possante

//     },
//     frear: function(){
//         //  Frear o possante
//     },

// }

// carro.acelerar()


// var senha = "abcdefg1001"

// senha = prompt("Digite a nova senha: ")

// if(senha.length < 10 && senha.length > 20){
//     alert("Senha inválida")
// }else{
//     senha = senha
//     console.log("Sua nova senha é: " + senha)
// }



var string = []

function item() {
    let novoItem = prompt("Digite o item: ")
    string.push(novoItem)


}

function removeItem() {
    if (string.length > 0) {

        string.pop()
        alert("Último item removido com sucesso!")
    }else{
        alert("Array já vazio")
    }
}