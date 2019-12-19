// Arrays are stored in contiguous memory

const strings = ['a' ,'b' ,'c','d'];

//Array methods:

//push() adds an element at the end of the array 0(1) operation
strings.push('e');
console.log(strings);

//pop() remove the last item from the array 0(1)operation
strings.pop()
console.log(strings)

//unshift('x') adding an element at the start of the array 

// const strings = ['a' ,'b' ,'c','d'];
//                   0    1    2    3
// const strings = ['x','a','b','c','d']        
//                   0   1   2   3   4 
// We looped through everything and re-assigned the indexes this makes the operation 0(n)

strings.unshift('x');
console.log(strings)

//splice(startNumber , deleteCount , itemToAdd)

// const strings = ['x','a','b','c','d']        
//                   0   1   2   3   4 
// const strings = ['x','a','array','b','c','d']        
//                   0   1     2     3   4   5
// We looped through half of the array and re-assigned the indexes this makes the operation 0(n/2) => 0(n)

strings.splice(2,0,'array')
console.log(strings)


// Implementing an array: Arrays in Javascript are objects with integer based keys that act like indexes

class myArray{
    constructor(){
        this.length = 0;
        this.data ={};
    }

    get(index){
        return this.data[index]
    }
    
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index){
        const itemToDelete = this.data[index]
        this.shiftItems(index);
    } // The time complexity depends on which item we are deleting 

    shiftItems(index){
        for(let i = index ; i<this.length-1; i++){
            this.data[i] = this.data[i+1]
        }
    // If we dont delete the item on the last index of the array 
    // we will have only shifted the array but we will still have all indexes
        delete this.data[this.length-1];
        this.length--;
    } // 0(n) Linear time
}

const newArray = new myArray();
console.log(newArray); // length :0 , data: {}
console.log(newArray[0]);//undefined

newArray.push('hi');
console.log(newArray); // length:1 , data: {0:'hi'}

newArray.push('hello');
console.log(newArray); // length:2 , data: {0:'hi' , 1:'hello'}

newArray.pop();
console.log(newArray); // length:! , data: {0:'hi'}

newArray.pop();
console.log(newArray); // length :0 , data: {}

newArray.push('hi');
newArray.push('this');
newArray.push('is');
newArray.push('delete');
newArray.delete(2)
console.log(newArray); // length: 3 , data:{0:'hi', 1:'this',2:'delete'}



//Create a function that reverses a string;

function reverse(str){
    if(!str || str.length < 2 || typeof str !=='string'){
        return 'Please put a string'
    }

    const backwards = [];
    const totalItems = str.length -1;

    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }

    console.log(backwards);
    return  backwards.join('')
}

reverse('Hi I am Mike');

//2nd option: HINT:Treat the string as an array of characters

function newReverse(str){

    if(!str || str.length < 2 || typeof str !=='string'){
        return 'Please put a string'
    }

    let phrase = str.split(''); // This is a string method
    console.log(phrase)
    
    let backwards = phrase.reverse(); // This is an array method
    
    return backwards.join('');
}

newReverse('Hi I am Mike')

// 2nd option using ES6 syntax

const ES6Reverse = str => str.splt('').reverse().join('')
                        // [...str].reverse().join('') using spread operator to solve the same problem

ES6Reverse('Hi I am Mike')


// Given 2 Sorted Arrays can u merge theese Sorted Arrays into a bigger one that is still Sorted

// [ 0,3,4,4,6,30,31]


function mergeSortedArrays(array1 , array2) {
    const mergedArray = [];
    
    let array1Item = array1[0]
    let array2Item = array2[0]
    let i = 1;
    let j = 1;

    if(array1.length === 0) {
        return array2;
    } else if (array2.length ===0){
        return array1;
    }

    while(array1Item || array2Item){
        console.log(array1Item , array2Item)
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = array1[i];
            i++;
        } else{
            mergedArray.push(array2Item)
            array2Item = array[j];
            j++;
        }
    }

    return mergedArray;
    
}

mergeSortedArrays([0,3,4,31] , [4,6,30]);


/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.*/

function twoSum(nums , target){
    let len = nums.length
    for (let i = 0; i<len; i++){
        for (let j =i+1; j<len; j++){
            if(nums[j] === target - nums[i]){
                return arr = [i,j]
            }
        }
    }
}

twoSum([2,7,11,15],9)

