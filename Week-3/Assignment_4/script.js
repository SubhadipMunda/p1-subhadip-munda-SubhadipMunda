function createStack() {
    return {
        items:[],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();   // => 5
stack.items;   // => [10]
stack.items= [10,100,1000];// Encapsulation broken!

function createStack() {
    // Write your code here...
}

const stack= createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => undefined