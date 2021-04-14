Array.prototype.bulidFilter = function (callback) {
    const newArray = [];
  
    for (let i = 0; i < this.length; i++) {
      const passesTest = callback(this[i]);
  
      if (passesTest) {
        newArray.push(this[i]);
      }
    }
  
    return newArray;
}

const list = [2,4,6,7,3,1]
const result = list.bulidFilter(e => e%2==0)
console.log(result)