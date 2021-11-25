const testCase = "A";
const converLetraEmNumero = (palavra) => {
    let somaPalavra = 0;
    for(let i = 0; i< palavra.length; i++ ){
        somaPalavra += palavra[i].charCodeAt(0);
    }
    return verificaDivisores(somaPalavra);
}
const verificaDivisores = (somaPalavra) => {
    if ((somaPalavra % 2 == 0) && (somaPalavra != 2)){
        return false;
    }
    for (let i = 3; i <= somaPalavra/2; i++){
        if (somaPalavra % i == 0){
            return false;
        }
    }
    return true;
}
console.log(converLetraEmNumero(testCase));