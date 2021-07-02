const palavraPalindromo = "A rua Laura";
const convertePalindromo = (palavraPalindromo) =>{
    var palindromo="";
    palavraPalindromo = palavraPalindromo.toLowerCase();
    var teste = [...palavraPalindromo.replace(/\s/g, '')];
    var array =[...palavraPalindromo];
    var countChar = teste.length-1;
    for(let i = countChar, j = 0; i >= 0 ; i--, j++){
      console.log(teste[i],array[j]);
    }
    
}
convertePalindromo(palavraPalindromo);
//console.log(convertePalindromo(palavraPalindromo));