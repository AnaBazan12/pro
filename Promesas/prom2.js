function sumar(valor){
    var promesa = new Promise(function(resolve, reject){
        resolve(valor = valor + 1);
    })
    return promesa;
}

function main(){
    let parametro = 3;
    sumar(parametro)
        .then(r1 => { return sumar(r1); })
        .then(r2 => { return sumar(r2); })
        .then(r2 => {
            console.log("Resultado final:" + r2);
        })
}
main();