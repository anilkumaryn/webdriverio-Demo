function sum(a,b) {
  return a+b;
}
console.log(sum(10,20));

function product(a,b){
   return a*b;
}

console.log(product(20,90));
const bigProduct=product(102003,39003);
console.log(bigProduct);

setTimeout(() => {
    console.log("time out from arrow function ");
}, 10000);

setTimeout(function () {
    console.log("time out from normal function ");
}, 10000);