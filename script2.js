const strings = ['casa', 'albero', 'tav', 'macchina', 'giornale'];

function laFuncion(array){
    let result = []
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > 5){result.push(array[i])}
    }
    return result
}

console.log(laFuncion(strings))