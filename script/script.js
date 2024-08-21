const sorteio = document.querySelector('.sorteio');
const botaoGerar = document.querySelector('button');
var numeros = document.querySelectorAll('.sorteio__numero');
let somClick = document.getElementById('som-click');

function gerarNumeros(){
    // sorteio.classList.remove('active');

    for(i = 0; i < numeros.length; i++){
    numeros[i].innerHTML = parseInt(Math.random()* 60 + 1);
    }

    somClick.play();
}