function send(){
    let num1 = document.getElementById('num1').value.trim()
    let op = document.getElementById('operator').value.trim()
    let num2 = document.getElementById('num2').value.trim()
    

    if(num1.length > 0 && op.length > 0 && num2.length > 0){
        switch(op){
            case '+' : return alert(Number(num1) + Number(num2)) 
            case '-': return alert(num1 - num2)
            case '*' : return alert(num1 * num2)
            case '/': return alert(num1 / num2)
            default : alert(`Operador '${op}' não indentificado!`)
        }
    }else{
        alert("Campo inválido")
    }
    
    document.getElementById('num1').value = ''
    document.getElementById('op').value = ''
    document.getElementById('num2').value = ''
}

var arrAdd=[]

function add(){
    let item = document.getElementById('item').value
    
    arrAdd.push(item)

    let arrHtml = ''
    for(let i = 0; i < arrAdd.length; i++){
        arrHtml += `
        <p>
            ${arrAdd[i]}
        </p>
      `
    }
    document.getElementById('arrayUl').innerHTML = arrHtml
    document.getElementById('item').value = ''
}

function remove(){
    let itemRemove = document.getElementById('itemRemove').value


    arrAdd.splice(arrAdd.indexOf(itemRemove),1)
    add()

    document.getElementById('itemRemove').value = ''
}
