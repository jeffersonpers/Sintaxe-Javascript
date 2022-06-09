var jogador1 = 1;
var jogador2 = 0;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos'):
console.log('Jogadores Inválidos');

//usando if
if (jogador1 > 0 && jogador2 == 0){
    console.log('jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogador1 == 0 ) {
    console.log('jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}

// usando else
else {
    console.log('Ninguem marcou ponto!');
}

switch(placar) {
    case placar = jogador1 > jogador2:
    console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguem ganhou')
}