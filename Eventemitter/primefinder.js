const { EventEmitter }=require("events");

function isprime(a){
    for (let index = 2; index <=a/2; index++) {
        if(a%index==0){ return 0}
    }
    return 1;
}

const prime = (a,b) => {
    let event = new EventEmitter();
    let result = [] 
    let count = 1
    let index = a;
    const iid=setInterval(() => {
        if(a>b){ 
            clearInterval(iid);
            event.emit("Error",a,b)
        }
        let percent = index/(b-a)*100
        if(percent>100)
        {
            percent=100;
        }
        event.emit("progress",percent);
        if(isprime(index)){ 
            let temp = [`${count}`," : ",index]
            result.push(temp)
            count+=1
        }
        
        index++;
        if(percent>70){
            clearInterval(iid);
            event.emit("done",result);    
        }
        
},500);
return event;
}


module.exports = { prime }
