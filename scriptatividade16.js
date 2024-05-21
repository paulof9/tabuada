function tabuada() {
    let num = Number(document.querySelector('input#numero').value)
    let tabuada = (document.querySelector('select#tabuada'))
    if (isNaN(num) || num === 0) {
       window.alert('Por favor digete a tabuada!') 
       return;
    }
    if (tabuada.options.length > 0) {
        tabuada.innerHTML = ''; //limpar o antes do comando
    }else{ 
for (let c=1;c <=10; c++) {
let item= document.createElement('option')
item.text= `${num} x ${c} = ${num*c}`
tabuada.appendChild(item)
}}}