function Queue () {
this.queue = new Array();
  this.act = function (a) {
    if (a[0]){
      this.queue.unshift(a[1]);
    } else {
      if (a == 2){
        this.queue.shift();
      } else {
        console.log(this.queue[0]);
      }
    }
   }
}

var input = [10, [1, 42], 2, [1, 14], 3, [1, 28], 3, [1, 60], [1, 78], 2, 2];
var queue = new Queue();

for (i = 1; i <= input[0]; i++) {
   queue.act(input[i]);
};

console.log(queue.queue);
