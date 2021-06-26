const palavra = "Raysson";
const calculaDivisaoPor3 = (somaPalavra) => {
    var soma=0;
    for (let i = 0; i <= somaPalavra; i++){
        const unidade = somaPalavra %10; 
        soma += unidade;
        somaPalavra = Math.trunc(somaPalavra/10);
    }
    return soma % 3 ;
}
const validaNumeroPrimo = (somaPalavra) =>{
    let resultado ="It is a prime word.";
    
    if ((somaPalavra %2 == 0) && (somaPalavra != 2)){
        resultado = "It is not a prime word."
    }
    if ((calculaDivisaoPor3(somaPalavra) == 0) && (somaPalavra != 3)){
        resultado = "It is not a prime word."
    }
    if ((somaPalavra %5 == 0) && (somaPalavra != 5)){
        resultado = "It is not a prime word."
    }
    if ((somaPalavra%7==0) && (somaPalavra != 7)){
        resultado = "It is not a prime word."
    }
    

    return resultado;

}
const converLetraEmNumero = (palavra) => {
    let somaPalavra = 0;
    for(let i = 0; i< palavra.length; i++ ){
        somaPalavra += palavra[i].charCodeAt(0);
    }
    return somaPalavra;
}

console.log(converLetraEmNumero(palavra));
console.log(validaNumeroPrimo(converLetraEmNumero(palavra)));
