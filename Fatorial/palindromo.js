const palavraPalindromo = "A rua Laura";
const convertePalindromo = (palavraPalindromo) =>{
    var palindromo = "";
    for(let i = 0; i < palavraPalindromo.length -1; i ++){
      for(let c = palavraPalindromo.length -1; c >= 0; c--){
          if(palavraPalindromo[i] != palavraPalindromo[c]){
              if(palavraPalindromo[c] != " "){
                palindromo += palavraPalindromo[c];
              }
              else
          }
          
      }
    }
    return palindromo;
}
console.log(convertePalindromo(palavraPalindromo));