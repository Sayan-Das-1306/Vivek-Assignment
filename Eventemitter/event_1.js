const { EventEmitter }=require('events');

const work=()=>{
    let event = new EventEmitter();
    let percent=0;
    const iid=setInterval(() => {
        let delta=Math.floor(Math.random()*5)+1;
        percent+=delta;
        if(percent>100)
        {
            percent=100;
        }
        event.emit('progress',percent);
        if(percent===100){
            clearInterval(iid);
            event.emit('done');
        }
    },500);
    return event;
}
let event=work();
event 
    .on('progress',value=>console.log(`completed ${value}%....`))
    .on('done',()=>console.log('work is over'));