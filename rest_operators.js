// with rest operators you can pass multiple arguments
// how this helps : if you dont know how many arguments you will have , then rest operators comes handy

function sumNow(first,...args){
    for(let i=0; i < args.length; i++)
        first+=args[i]

    return first
}
    

// Now i have written functions , i dont know how many arguments will be there in future so lets do this with rest operators
//Check Below






































console.log(sumNow(5,6,7,8,9));




const sum = (...args) => {
    let sum =0;
    for(let i =0;i<args.length; i++)
        sum +=args[i];


    return sum;
}

console.log(sum(6,7,50));