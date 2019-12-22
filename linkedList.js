/* What is a linkedList 

A linkList contains a set of nodes 

Nodes have 2 elements:
  The value of the Data
  Poiner of the next Node

  The first node is called the head and the last node is called the tail
LinkedLIsts are null terminated  

const basket = ['apples', 'oranges', 'pears']

Pseudo:
linked list: apples --> oranges --> pears

apples
8947 --> oranges
          8742 --> pears
                    372 --> null       
                    
                    
https://visualgo.net/en/list 

*/

// class newNode {
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }


class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode ={
            value : value,
            next:null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length ++;
    }

    prepend(value){
        const newNode={
            value:value,
            next:null
        }
       newNode.next = this.head;
       this.head = newNode;
       this.length++; 
    }


    insert(index , value){
      if(index >= this.length){
        return this.append(value)
      }

      const newNode = {
          value:value,
          next:null
      };

      const leader =  this.traverseToIndex(index-1)
      const pointer = leader.next;
      leader.next = newNode;
      newNode.next = pointer;
      this.length ++;
    }
    /*              1) *-*   2)*   *   3)*-*-*
                                 \    
    /*                    *        *                              */
    remove(index){
        const leader = this.traverseToIndex(index-1)
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length --;
    }

    traverseToIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next
            counter++;
        }
        return currentNode;
    }

    printList(){
        const array = []
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }

    reverse(){
        if(!this.head.next) {
            return this.head
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second){
            const temp = second.next;
            second.next = first
            first = second
            second = temp;
        }

        this.head.next = null;
        this.head = first
       
        return this.printList();
    }
}




const myLinkedList = new LinkedList(10)
/*console.log(myLinkedList)                   linkedList{
                                                    head:{value:10,next:null},
                                                    tail:{value:10,next:null}
                                                    length:1 } */
myLinkedList.append(5);
myLinkedList.prepend(15);
myLinkedList.insert(2,99)
myLinkedList.append(25);
myLinkedList.prepend(1);
myLinkedList.insert(100,55);
myLinkedList.remove(3)
myLinkedList.insert(2,48)
myLinkedList.printList() ;  
myLinkedList.reverse();     




