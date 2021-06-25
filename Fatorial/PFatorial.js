const testCase = [5,2,9];
function mostrarResultado(number){
    for(let i = number-1; i > 0; i--){
        number = number * i;
    }

    return number;
}
for(let i = 0; i < testCase.length; i++){
    console.log(mostrarResultado(testCase[i]));
}
