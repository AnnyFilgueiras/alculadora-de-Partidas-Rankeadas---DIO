function verSaldoVitorias(vitorias, derrotas){
    let saldoVitorias = vitorias-derrotas;
    let nivel;

    if(saldoVitorias<=10){
        nivel = "Ferro";
    }
    else if(saldoVitorias>10 && saldoVitorias<=20){
        nivel = "Bronze";
    }
    else if(saldoVitorias>20 && saldoVitorias<=50){
        nivel = "Prata";
    }
    else if(saldoVitorias>50 && saldoVitorias<=80){
        nivel = "Ouro";
    }
    else if(saldoVitorias>80 && saldoVitorias<=90){
        nivel = "Diamante";
    }
    else if(saldoVitorias>90 && saldoVitorias<=100){
        nivel = "Lendário";
    }
    else{
        nivel = "Imortal";
    }

    console.log("O Herói tem de saldo de " + saldoVitorias +" está no nível de " + nivel);
}

let vitoriasEDerrotas = [
    [20, 15],
    [20, 1],
    [60, 20],
    [73, 7],
    [95, 5],
    [96, 5],
    [120, 14]
];

for (let i=0; i<vitoriasEDerrotas.length; i++){
    verSaldoVitorias(vitoriasEDerrotas[i][0], vitoriasEDerrotas[i][1]);
}