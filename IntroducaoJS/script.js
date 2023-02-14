var nome = "Volta Vida";
var i = 0;

for(i; i < 2 ; i++){
    alert(nome)
}

if( i = 5){
    console.log("MINI MESSI")
}

console.log(3**2) // Elevado a potência

var numAlu = Number(prompt("Número de alunos? :"));

var total = numAlu % 2;

if (total === 0){
    console.log("Número par")
}else{
    console.log("Número impar")
}

var peso, altura, total;

peso = Number(prompt("Informe seu peso: "))
altura = Number(prompt("Informe sua altura: "))

total = (peso / (altura**2))

if(total > 25){
    console.log("Sobrepeso")
}else if(total < 25 && total > 18.5){
    console.log("Saudavel")
}else{
    console.log("Magreza")
}


console.log(total)

