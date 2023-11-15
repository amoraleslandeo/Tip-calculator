//funcion que muestra el id:customInput
function mostrarCustomInput() {
    var element = document.getElementById("customInput");//asignando id:custominput a variable element
    element.classList.add("mostrar");//agrega clase mostrar
    element.classList.remove("ocultar");//borrar clase ocultar

    var element = document.getElementById("customBtnInput");
    element.classList.add("ocultar");//agrega clase ocultar
    element.classList.remove("mostrar");//borrar clase mostrar

    document.getElementById("customInput").focus()//funcion que enciende la clase
}
//funcion que oculta el id:customInput
function ocultarCustomInput() {
    var element = document.getElementById("customInput");//asignando id:custominput a variable element
    element.classList.add("ocultar");//agrega clase ocultar
    element.classList.remove("mostrar");//borrar clase mostrar

    var element = document.getElementById("customBtnInput");
    element.classList.add("mostrar");//agrega clase mostrar
    element.classList.remove("ocultar");//borrar clase ocultar
    //asigna valor vacio al id:customInput
    document.getElementById("customInput").value = ''

}




function reset() {
    document.getElementById('inputOne').value = ''
    document.getElementById('inputTwo').value = ''
    document.getElementById('tipAmount').innerText = '$0.00'
    document.getElementById('billTotal').innerText = '$0.00'
    document.getElementById('reset').disabled = true
    //desabilitar dentro del grupo de botones 'tip_items' el boton 'active'
    var allElements = document.querySelectorAll('input[type="button"].item.active');
    //los elementos seran recorridos y por cada uno se le da la funcion 'remove'
    allElements.forEach(item => {
        item.classList.remove('active')
    })
}




function setTip(tip, elemento) {
    //asignando el valor del input a la variable bill como numerico
    var bill = document.getElementById('inputOne').valueAsNumber
    //asignando el valor del input a la variable peopleNumber como numerico
    var peopleNumber = document.getElementById('inputTwo').valueAsNumber

    if (bill > 0 && peopleNumber > 0) {
        //asignando el calculo de la propina por persona a la variable calcTip
        var calcTip = (bill * tip / 100) / (peopleNumber)
        if (calcTip % 1 != 0) {
            calcTip = calcTip.toFixed(2)
        }
        //pintando la operacion calcTip concatenada con el string
        document.getElementById('tipAmount').innerText = '$' + calcTip
        //asignando el calculo total por persona a la variable calcTotal
        var calcTotal = (bill / peopleNumber) + parseFloat(calcTip)
        if (calcTotal % 1 != 0) {
            //console.log(tip, bill, peopleNumber, calcTip, calcTotal)
            calcTotal = calcTotal.toFixed(2)
        }
        //pintando la operacion calcTotal concatenada con el string
        document.getElementById('billTotal').innerText = '$' + calcTotal

        //eliminando clases activas de los botones no clickeados
        var allElements = document.querySelectorAll('input[type="button"].item.active');
        //los elementos seran recorridos y por cada uno se le da la funcion 'remove'
        allElements.forEach(item => {
            item.classList.remove('active')
        })

        //agregar clase 'active' al boton clicleado
        elemento.classList.add('active')

        //habilitar boton reset
        document.getElementById('reset').disabled = false

    } else {
        document.getElementById('reset').disabled = true

        //la condicional indica que Si la variable bill es un dato numerico que no esta definido o que la variable es menor o igual a 0 entonces:
        if (isNaN(bill) || bill <= 0) {
            //el elemento span ha sido asignado a la variable
            var labelInput_1 = document.querySelector('.input_1 > span');
            //asignar a la variable labelInput_1 la clase error_text
            labelInput_1.classList.add('error_text')
            //utilizando la variable bill anteriormente asignada
            var bill = document.getElementById('inputOne');
            //asignar a la variable bill la clase error_input
            bill.classList.add('error_input')

        }
        //la condicional indica que Si la variable peopleNumber es un dato numerico que no esta definido o que la variable es menor o igual a 0 entonces:
        if (isNaN(peopleNumber) || peopleNumber <= 0) {
            //el elemento span ha sido asignado a la variable
            var labelInput_2 = document.querySelector('.input_2 > span');
            //asignar a la variable labelInput_2 la clase error_text
            labelInput_2.classList.add('error_text')
            //utilizando la variable peopleNumber anteriormente asignada
            var peopleNumber = document.getElementById('inputTwo');
            //asignar a la variable peopleNumber la clase error_input
            peopleNumber.classList.add('error_input')
        }
    }
}

function remove(id, elementContainer) {
    //la variable esta asignada por el id del input tag del HTML 
    var input = document.getElementById(id)
    input.classList.remove('error_input')

    //la variable esta asignada por la clase .input_1 e .input_2 que incluyen al tag span quien tiene el elemento a modificar
    var labelInput = document.querySelector('.' + elementContainer + '> span'); //.input_1 > span && .input_2 > span
    labelInput.classList.remove('error_text')

}