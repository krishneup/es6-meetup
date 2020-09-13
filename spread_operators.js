const set1 = [1,2,3,4,5];
const set2 = [6,7,8,9,10]

const newset= [set1,set2]
console.log(newset);


// guess the output





































//outputs : [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]



//it get nested two array as a result

// what if , if we need one single array combining two array values ? 
//ES6 makes it easier than ES5


// so heres come spread operator handy ?

const spreadSet = [...set1,...set2]
console.log(spreadSet)



//create an array from characters in a string
const PersonName = "Albert Einstein"

console.log(...PersonName);








// mathematical operations


const addNum = [50,70,90,60,500,300,400,3]
console.log(Math.min(...addNum));



//accept any number of arguments in a arrow function


