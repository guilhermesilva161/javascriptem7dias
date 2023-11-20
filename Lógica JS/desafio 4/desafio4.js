const numero = 2;
let tentativa = false;


for (let contador = 0; contador < 3; contador++) {
    tentativa = prompt("Tente adivinhar o número de 0 a 10:");
    if (tentativa == numero) {
        alert("Parabéns, você acertou! O número é o " +numero);
        break 
        }
    else {
        alert("Errado!");
     
    }
   
    if (contador == 2 ) {
        alert ("Você esgotou suas tentativas e o numero certo é " +numero)
    }
    
    
}

