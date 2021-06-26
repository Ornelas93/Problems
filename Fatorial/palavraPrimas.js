const palavra = "Hudson";
const converLetraEmNumero = (palavra) => {
    let somaPalavra = 0;
    for(let i = 0; i< palavra.length; i++ ){
        somaPalavra += palavra[i].charCodeAt(0);
    }
    return somaPalavra;
}

console.log(converLetraEmNumero(palavra));
