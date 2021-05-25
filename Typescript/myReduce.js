Array.prototype.buildreduce = function(callback,initialval=0){
    let acc = initialval
    for (let index = 0; index < this.length; index++) {
        acc = callback(acc,this[index])
    }
    return acc
}

const reducer = (acc,curr) => acc + curr

const list  = [1,2,3,4]
let sum = list.buildreduce(reducer)

console.log(sum)