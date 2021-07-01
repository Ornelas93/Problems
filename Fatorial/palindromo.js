const palavraPalindromo = "A rua Laura";
const convertePalindromo = (palavraPalindromo) =>{
    var palindromo = "";
    var teste = palavraPalindromo.trim();
    var array = [...teste];
    var countChar = palavraPalindromo.length -1;
    for(let i = countChar, j = 0; i >= 0  ; i--, j++){
      if (palavraPalindromo[j] === " "){
        palindromo += " " + array[i];
      }
      else {
        palindromo += array[i];
      }
    }
    return palindromo;
}
console.log(convertePalindromo(palavraPalindromo));