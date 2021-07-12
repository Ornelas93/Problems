/*
- Nunca use var(usar let ou const)
- Se eu utilizar var tem que pagar açai
- Estudar Função split
- Ficar atento ao nome das variaveis(ser Descritivas)
- Fazer pergunta ao receber o problema
- Fazer usando um for e verificando as duas pontas ao mesmo tempo
- usar sem pre o padrao camelCase
*/

const testCase = "AMOR A ROMA";

const isPalindromo = (palavraPalindromo) =>{
  var removeCaraterEspeciais = /[^a-zA-Zs]/g;
  var array =[...palavraPalindromo.replace(removeCaraterEspeciais,"")];
  var array2 = [...palavraPalindromo.replace(removeCaraterEspeciais,"")];
  array = array.reverse();
  var is_same = (array.length == array2.length) && array.every(function(element, index) {
    return element === array2[index];
});
  console.log(is_same);
}
isPalindromo(testCase.toUpperCase());
//console.log(convertePalindromo(palavraPalindromo));