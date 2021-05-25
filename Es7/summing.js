const sum=(...params) => {
    let result = 0;
    let index = 0 ;
    return new Promise(function(resolve,reject){
        const iid=setInterval(() => {
            result+=params[index++];
            if(index==params.length){
                resolve({result, completedOn: new Date().toTimeString()});
                clearInterval(iid);
                
            }
        },1000)
    })
}


function testPromise(...param){
    let promise =sum(...param);
    console.log("Please wait for the result: ",new Date().toLocaleTimeString());

    promise
        .then( result => console.log(result))
        .catch( error => console.log(error))
}



testPromise(1,2,4,5,6,6,7,3,5,7,3,2);
testPromise(1,2,3,4,5);



