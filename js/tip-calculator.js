
function mostrar() {
    var element = document.getElementById("customInput");
    element.classList.add("mostrar");
    element.classList.remove("ocultar");

    var element = document.getElementById("customBtnInput");
    element.classList.add("ocultar");
    element.classList.remove("mostrar");

    document.getElementById("customInput").focus()
  }

function reset(){
    document.getElementById('inputOne').value = ''
    document.getElementById('inputTwo').value = ''
}

function setTip(tip, elemento){
    //asignando el valor del input a la variable bill como numerico
    var bill = document.getElementById('inputOne').valueAsNumber
    //asignando el valor del input a la variable peopleNumber como numerico
    var peopleNumber = document.getElementById('inputTwo').valueAsNumber
    //asignando el calculo de la propina por persona a la variable calcTip
    var calcTip = (bill * tip/100)/(peopleNumber)
    if(calcTip % 1 !=0){
        calcTip = calcTip.toFixed(2)
    }
    //pintando la operacion calcTip concatenada con el string
    document.getElementById('tipAmount').innerText = '$'+calcTip
    //asignando el calculo total por persona a la variable calcTotal
    var calcTotal = (bill / peopleNumber) + parseFloat(calcTip)
    if(calcTotal % 1 !=0){
        //console.log(tip, bill, peopleNumber, calcTip, calcTotal)
        calcTotal = calcTotal.toFixed(2)
    }
    //pintando la operacion calcTotal concatenada con el string
    document.getElementById('billTotal').innerText = '$'+calcTotal

    //eliminando clases activas de los botones no clickeados
    var allElements = document.querySelectorAll('input[type="button"].item.active');
    //los elementos seran recorridos y por cada uno se le da la funcion 'remove'
    allElements.forEach(item =>{
        item.classList.remove('active')
    })


    //agregar clase 'active' al boton clicleado
    elemento.classList.add('active')
}


