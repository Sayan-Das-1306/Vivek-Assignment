const { prime }=require("./primefinder")

let finder = prime(2,20)

finder
    .on("Error",(a,b) => console.log(a," is greater than ",b))
    .on("done",value => console.log(value))
    .on("progress",value => console.log(`completed ${value.toFixed(2)}%....`))
    

//
