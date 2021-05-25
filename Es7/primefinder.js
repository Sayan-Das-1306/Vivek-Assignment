function isprime(a){
    for (let index = 2; index <=a/2; index++) {
        if(a%index==0){ return 0}
    }
    return 1;
}


let primefinder=async (a,b) => {
    let result=new Array();
    let index = a;
    let promise= new Promise(function(resolve,reject){
        const iid=setInterval(() => {
            if(isprime(index)){ result.push(index) }
            index++;
            if(index==b){
                resolve({result, completedOn: new Date().toTimeString()});
                clearInterval(iid);
                
            }
        },1000)
    })
    console.log("Please wait for the result: ",new Date().toLocaleTimeString());
    let show = await promise;
    console.log(show);
}

//console.log("hii");
primefinder(2,30);
primefinder(2,10);
primefinder(2,20);

