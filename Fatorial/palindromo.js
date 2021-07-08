const palavraPalindromo = "AMOR A ROMA";

const convertePalindromo = (palavraPalindromo) =>{
  var er = /[^a-zA-Zs]/g;
  var array =[...palavraPalindromo.replace(er,"")];
  var array2 = [...palavraPalindromo.replace(er,"")];
  array = array.reverse();
  var is_same = (array.length == array2.length) && array.every(function(element, index) {
    return element === array2[index];
});
  console.log(is_same);
}
convertePalindromo(palavraPalindromo.toUpperCase());
//console.log(convertePalindromo(palavraPalindromo));