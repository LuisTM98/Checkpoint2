let objeto = {
    nombre: "luis",
    apellido: 'tortosa',
    edad: 25,
    altura: 1.75
}

function laFuncion(givenObj){
    let result = []
    for (const key in givenObj) {
        if (typeof givenObj[key] == 'number') {
            result.push(givenObj[key])
        }
    }
    return result
}

console.log(laFuncion(objeto))