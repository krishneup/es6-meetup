// The map() method calls the provided function once for each element in an array, in order.

const nums = [5,9,8,50];

nums.map((num) =>{
    console.log(`Favourite Num is ${num}`)
})


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);