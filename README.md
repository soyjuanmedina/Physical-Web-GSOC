# Physical-Web-GSOC

This Repository is to upload the test to apply to Physical Web Google Summer of Code.

https://summerofcode.withgoogle.com/

Bellow is the test (I think must be an error, because the logical output is [28, 14]):

## Queue

A queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and the principal (or only) operations on the collection are the addition of entities to the rear terminal position, known as enqueue, and removal of entities from the front terminal position, known as dequeue. This makes the queue a First-In-First-Out (FIFO) data structure. In a FIFO data structure, the first element added to the queue will be the first one to be removed.

A basic queue has the following operations:
put: add a new element to the end of the queue.
pop: remove the element from the front of the queue and return it.
peek: returns the element at the head of the queue, without removing it.

We want you to implement a queue with the following operations:
1 x: Enqueue element x into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.

### Example:

The first element in the input it is the number of commands that will be processed.
The example below we will have 10 commands: 1 42 → put 42 in the list, 2 → pop the head, etc.

#### Input
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2

#### Output
14
14
