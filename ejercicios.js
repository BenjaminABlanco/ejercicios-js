//* 1. Convierta la siguiente función, en una función asíncrona para retirnar la data 
//* usando async/await

const getData = async ({ url }) => {
   try{
    const response = await fetch(url)

    if (response.status !== 200) {
        //genera una excepcion
        throw new Error('Error al obtener los datos')
    }

    const data = await response.json()
    return data
   }catch(error){
    console.log(error)
   }
}

//* 2. Dado un array de números, utilice el método map para obtener un nuevo array 
//* donde cada elemento sea el cuadrado del elemento original. Luego, utiliza el 
//* método filter para obtener otro array que solo contenga los números pares del 
//* array original.
console.log('Eercicio 2')

const numeros = [1,2,3,4,5,6,7,8]

const sqrtNumeros = numeros.map(numero => numero*numero)
console.log(sqrtNumeros)

const parNumeros = numeros.filter(numero => numero % 2 === 0)
console.log(parNumeros)

//* 3. Crear una función que devuelva el promedio de un arreglo, en caso de que el
//* arreglo esté vacío debe devolver cero
console.log('Ejercicio 3')

function promedio(arreglo){
    if(arreglo.length === 0){
        return 0
    }

    let suma = 0
    for(let i=0;i<arreglo.length;i++){
        suma += arreglo[i]
    }
    return suma/arreglo.length
    
} 
// pruebas de vacio y lleno
// const arreglo=[80,20,40]
const arreglo=[]

console.log(promedio(arreglo))

//* 4. Cree una función que reciba 3 argumentos numéricos y retorne el numero más 
//* alto
console.log('Ejercicio 4')

function mayor(n1,n2,n3){
    let max=n1
    if(n2>max){
        max=n2
    }
    if(n3>max){
        max=n3
    }
    return max
}

console.log(mayor(4,10,2))

//* 5. Crear una función que reciba un arreglo como parámetro y devuelva una copia del 
//* arreglo (este debe ser una copia integra y no solo una referencia al arreglo 
//* original)
console.log('Ejercicio 5')

function copiar(arreglo2){
    const cop=[]
    for(let i=0;i<arreglo2.length;i++){
        cop[i]=arreglo2[i]
    }
    return cop
}
let arreglo2 = [1,2,3]
let copiaArreglo2 = copiar(arreglo2)

console.log(arreglo2)
console.log(copiaArreglo2)
