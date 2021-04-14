Array.prototype.buildmap = function (callback) { 
    const newArray = [];
  
    for (let i = 0; i < this.length; i++) {
      const newValue = callback(this[i]);
      newArray.push(newValue);
    }
    return newArray;
  } 

  const list = [2,3,4]
  const result=list.buildmap(e => e*e)
  console.log("result: ",result);

