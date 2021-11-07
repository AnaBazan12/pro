let total =0;
let parametro =3;
const apiKey = 'dc6zaTOxFJmzC';
const promise1 =  Promise.resolve(3)
    .then(value => {return value + 1})
    .then(value => {return value * 2})

function sumar(value){
    return  Promise.resolve(value = value + 1);
}
function comprar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           total= total + 1;
            if (total < 5) {
                
                resolve(total);
            } else {
                reject("solo se pueden comprar 4");
            }
        }, 1000);
    });
}
const promise2 = comprar()
    .then(()=> comprar() )
    .then(()=> comprar() )
    .then(()=> comprar() )
    .catch(err => console.log(err));

const promise3 = sumar(3)
    .then(r1 => {return sumar(r1)})
    .then(r2 => {return sumar(r2)})
    .then(r3 => {return sumar(r3)})

const api = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`)
  .then(response => response.json())
  .then(json => {
    json.data
      .map(gif => gif.images.fixed_height.url)
      .forEach(url => {
        let img = document.createElement('img')
        img.src = url
        document.body.appendChild(img)
      })
  })
  .catch(error => document.body.appendChild = error)
function main(){
Promise.all([promise1, promise2, promise3]).then((values) => {
    
    console.log(values);
  });
}
main()