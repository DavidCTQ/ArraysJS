//como se inicializa un vector
let vector=[]; //vector vacio

//vector con informacuion
let nombres=["yeison","pepitofeliz","davincho","maria","luis","brayan","michael","cathe","andres"];

//imprimir o escribir todo el vector
console.log("vector: " + nombres);

//imprimir o escribir un solo dato del vector
console.log("el nombre que esta en la posicion 5 es:" + nombres[5]);

//recorrer un vector
for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//agregar informacion a un vector
nombres.push("stiven");

console.log(nombres);

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//eliminar informacion
nombres.splice(1, 2);

console.log(nombres);

for(let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
