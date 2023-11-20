let area = prompt("Qual a area voce quer atuar 'Front-End' ou 'Back-End' ")
let ling = "";
if (area === "Front-End") {
    ling = prompt("Você ja aprendeu 'React' ou 'aprender Vue'");
} else if (area === "Back-End") {
    ling = prompt("Você quer aprender em 'C#' ou 'Java'");
}
else {
    alert("Voce nao inseriu uma area valida");

}

let especializacao = prompt("digite 1 para seguir se especializando na area escolhida ou 2 para seguir se desenvolvendo para se tornar full-stack");
if (especializacao == 1) {
    alert(`continue se especializando em ${ling} para dominar a area de ${area}`);
}
else if (especializacao == 2) {
    alert(`se chegou a hora de comecar a programar em outras linguagens alem de ${ling} para voce se tornar um fullstack`);

}
else {
    alert('Voce inseriu um valor invalido')
}

let mensagem = prompt("Tem alguma outra tecnologia que voce queira aprender? se sim digite 'ok'");
while (mensagem === "ok") {
    let tecnologia = prompt("Qual é a nova tecnologia?");
    alert(`${tecnologia} e uma tecnologia muito bacana`)
    mensagem = prompt("Tem mais alguma outra tecnologia que voce gostaria de aprender digite 'ok'");

}

