function isprime(a){
    for (let index = 2; index <=a/2; index++) {
        if(a%2==0){ return 0;}
    }
    return 1;
}


function* generator(a,b){
    let store=[]
    for (let index = a; index <= b; index++) {
        if(isprime(index)){ store.push(index)}
    }
    yield store;
}

let result=generator(2,10);
console.log(result.next().value)