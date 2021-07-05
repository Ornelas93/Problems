const palavraPalindromo = "Raysson";

const convertePalindromo = (palavraPalindromo) =>{
  var er = /[^a-z0-9]/gi;
  var array =[...palavraPalindromo.replace(er,"")];
  var array2 = [...palavraPalindromo.replace(er,"")];
  array = array.reverse();
  console.log(array2, array);
  var is_same = (array.length == array2.length) && array.every(function(element, index) {
    return element === array2[index]; 
});
  
  console.log(is_same);
}
convertePalindromo(palavraPalindromo.toUpperCase());
//console.log(convertePalindromo(palavraPalindromo));