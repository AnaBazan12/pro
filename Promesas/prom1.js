function main(){
    Promise.resolve(3)
    .then(r1 => { return r1 + 1})
    .then(r2 => { return r2 * 2})
    .then(r2 => {
        console.log("resultado" + r2);
    })
}

main();