/*
- Nunca use var(usar let ou const)
- Se eu utilizar var tem que pagar açai
- Estudar Função split
- Ficar atento ao nome das variaveis(ser Descritivas)
- Fazer pergunta ao receber o problema
- Fazer usando um for e verificando as duas pontas ao mesmo tempo
- usar sem pre o padrao camelCase
*/

const testCase = ["amor a roma", "raysson", "A Daniela ama a lei? Nada!", "Aí, Lima falou: “Olá, família!”."];

const isPalindromo = (word) =>{
  const wordFilter = word.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
  for (let i = 0; i < (wordFilter.length / 2); i++){
    if(wordFilter[i]!==wordFilter[(wordFilter.length - 1)-i]){
      return false;
    }
  }
  return true;
}
for(let i=0; i< testCase.length; i++){
  console.log(isPalindromo(testCase[i].toUpperCase()));
}