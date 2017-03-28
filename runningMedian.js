function RunningMedia (a) {
this.runningMedian = a;
this.median = function (a) {
        console.log(this.runningMedian);
  }
}

var input = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 1; i <= input[0]; i++) {
  var a = input.slice(1, i);
  median = new RunningMedia(a);
  median.median(input[i]);
};
