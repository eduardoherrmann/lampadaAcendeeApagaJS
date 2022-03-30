const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const turn = document.getElementById ('turn');
const lamp = document.getElementById ('lamp');
let condicao = 0;


function turnOk() {
    if (condicao == 1){
        lampOff ();
    } else if (condicao == 0){
        lampOn ();
    } 
}
 

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1 

}

function lampOn () {
    if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
    condicao = 1;
    
     }
}
function lampOff () {
    if (!isLampBroken()) {   
    lamp.src = './img/desligada.jpg';
    condicao = 0;
    }
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg';
}

turn.addEventListener('click', turnOk);
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

