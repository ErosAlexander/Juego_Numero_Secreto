let numeroSecreto = 0;
let cantidadIntentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//--------------- ASIGNAR TEXTO A UN ELEMENTO DEL HTML ---------------

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

//--------------- VERIFICAR INTENTO ---------------

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
        if (numeroSecreto === numeroUsuario){
            //En el pedazo de codigo "${cantidadIntentos} ${(...)}" estamos usando el Operador Ternario, que es una ABREVIATURA de el If - Else
            asignarTextoElemento("p", `Acertaste al numero secreto en ${cantidadIntentos} ${(cantidadIntentos == 1 ? "vez" : "veces")}, EXCELENTE`);

            //Obtenemos el elemento por su ID, invocamos al metodo "removeAttribute" y le decimos QUE ATRIBUTO QUEREMOS REMOVER, en este caso el "disabled"
            document.getElementById("reiniciar").removeAttribute("disabled")
        }else {
            if(numeroUsuario > numeroSecreto){
                asignarTextoElemento("p", "El numero secreto es menor");
            } else{
                asignarTextoElemento("p", "El numero secreto es mayor");
            }
            cantidadIntentos++;
            limpiarCaja();
        }    
    return;
}

//--------------- LIMPIAR CAJA ---------------

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "" ;
}

//--------------- GENERAR NUMERO SECRETO ---------------


function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //******* SI YA SORTEAMOS TODOS LOS NUMEROS *******

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {

    //******* SI EL NUMERO GENERADO ESTA EN LA LISTA *******  
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//--------------- REINICIAR JUEGO ---------------


function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del Número Secreto");
    asignarTextoElemento("p", `Ingrese un numero del 1 al ${numeroMaximo}`);
    
    numeroSecreto = generarNumeroSecreto();
    cantidadIntentos = 1;
    return;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales()
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
