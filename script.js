let theArray = [2, 7, 3, 1, 5, 9, 4, 6, 10, 8]; //Los numeros son: 2, 7, 9 y 10

function laFuncion(givenArray) {
  let result = [];
  for (let i = 0; i <= givenArray.length; i++) {
    if (givenArray[i] > i+1) {
      result.push(givenArray[i]);
    }
  }
  return result;
}

console.log(laFuncion(theArray));
