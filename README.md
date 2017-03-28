# Physical-Web-GSOC

This Repository is to upload the test to apply to Physical Web Google Summer of Code.

https://summerofcode.withgoogle.com/

There are a test in the Github Page of Physical Web

http://physical-web-project.github.io/

Bellow is the tests (I think must be an error, because the logical output is [28, 14]):

## Queue (Solved in queue.js)

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

## Running Median

Given that integers are read from a data stream. Find median of elements read so for in efficient way. The data set must be ordered in ascending mode:
When the input size is odd, we take the middle element.
When the set contains an even number of elements, the median is the average of the two middle elements of the sorted sample.

### Examples:
Odd set [1, 2, 3] → median is 2
4 is added. Even set [1, 2, 3, 4] → median is (2 + 3) / 2 = 2.5
5 is added. Odd set [1, 2, 3, 4, 5] → median is 3
6 is added. Even set [1, 2, 3, 4, 5, 6] → median is (3 + 4) / 2 = 3.5

The first element in the input it is the number of elements that will be added to the set.
The example below we will have 10 elements:
First, 1 will be added and median will be 1.00.
Then, 2 will be added to the set and the median will be 1.50, etc.

#### Input
10
1
2
3
4
5
6
7
8
9
10

#### Output
1.00
1.50
2.00
2.50
3.00
3.50
4.00
4.50
5.00
5.50
