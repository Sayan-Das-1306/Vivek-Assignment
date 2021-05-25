const fibo = (n)=>{
    let a = 0, b = 1;  
    let x = [a,b]
    for (let index = 2; index<n; index++) {
        c=a+b
        a=b
        b=c
        x.push(c)
    } 
    console.log(x)
}

fibo(5)