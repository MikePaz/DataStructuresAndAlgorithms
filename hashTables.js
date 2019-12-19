/*The way the hashTable works 
 HashTable(key,value)
*/

// Hash function : https://www.md5hashgenerator.com/

/*All hash tables are implemented with an optimum hashing function in order to hash something fast
 and then map whatever the hash came out to be into a memory address */


// Object allows you to save only a string as a key

let user = {
    age: 54,
    name: 'Mike',
    awake: true,
    yawn: function () {
        console.log('ahhhh')
    }

};

console.log(user.age); // 0(1)
user.hobby = 'basketball'; // 0(1)
console.log(user.yawn); // 0(1)

/* Hash collisions
https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

Hash keys-values are stored inside buckets 

With hashtables its not always possible to avoid hash collisions due to the amount of data

When you have a collision it slows down the reading and writing with a hash table to 0(n/k) --> 0(n)
where k is the size of the hash table

---------------------------------------
Ways to solve Hash Collision
https://en.wikipedia.org/wiki/Hash_table 

*/

//Creating a map
// Map allows you to save any data type as a key
// Map maintains Insertion Order

const aMap = new Map();

// Creating a set
// Unlike Maps Sets only stores the keys and no values

const aSet = new Set();

//Implementing a HashTable

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
            // console.log(hash)
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value])
            //console.log(this.data)
        } else {
            this.data[address].push([key, value])
        }
    }
    get(key) {
        let address = this._hash(key)
        const currentBucket = this.data[address];
        //console.log(currentBucket)

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                //console.log(this.data[i][0][0])
                keysArray.push(this.datap[i][0][0])
            }
            return keysArray;
        }
    }
}


//const myHashTable = new HashTable(2);  Over here the time complexity can become 0(n) because memory space
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1215)
myHashTable.set('oranges', 140)
myHashTable.set('tomatoes', 2413)
myHashTable.set('apples', 954)
myHashTable.get('apples')
myHashTable.get('grapes')
myHashTable.keys(); // In order to find the keys we have to loop over the whole memory e.g 50times 

// When we retrieve items from a hashtable they are all unordered




// First Recurring Character


//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2
//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1
//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
} // 0(n^2)

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4])

//CAREFULL!!
firstRecurringCharacter([2,5,5,2,3,5,1,2,4]) // Returns 2 as the first reccuring character 
                                             //because the outer loop has 2 in [0] 
                                             // and it will find 2 again in [3] before it compares 5 with 5

// Better approach time complexity wise
function firstRecurringCharacter2(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            return input[i]
        } else {
            map[input[i]] = true  // If we dont set the value to true in this line we need to 
                                 //set map[input[i]] !== undefined because it will become if(0) 
                                //which is falsy
        }
        console.log(map)
    }
   
    return undefined;
} //0(n)


firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4])
firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]) // Returns 5
