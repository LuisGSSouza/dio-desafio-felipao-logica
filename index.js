const prompt = require('prompt-sync')();

let reiniciarLoop = false;

do {
    let nomeHeroi = prompt("Digite o nome do Heroi: ");
    let xpHeroi = prompt("Digite a experiência (XP) do Herói: ");

    let tierHeroi = "";

    if (xpHeroi <= 1000){
        tierHeroi = "Ferro";
    } else if (xpHeroi > 1000 && xpHeroi <= 2000 ) {
        tierHeroi = "Bronze";
    } else if (xpHeroi > 2000 && xpHeroi <= 5000){
        tierHeroi = "Prata";
    } else if (xpHeroi > 5000 && xpHeroi <= 7000){
        tierHeroi = "Ouro";
    } else if (xpHeroi > 7000 && xpHeroi <= 8000){
        tierHeroi = "Platina";
    } else if (xpHeroi > 8000 && xpHeroi <= 9000){
        tierHeroi = "Ascendente";
    } else if (xpHeroi > 9000 && xpHeroi <= 10000){
        tierHeroi = "Imortal";
    } else {
        tierHeroi = "Radiante";
    }
    
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + tierHeroi)

    let verificarNovoHeroi = prompt("Deseja verificar o tier de um novo Heroi? (s / n)");
    if (verificarNovoHeroi == "S" || verificarNovoHeroi == "s") {
        reiniciarLoop = true;
    } else {
        reiniciarLoop = false;
    }
}while(reiniciarLoop == true)
