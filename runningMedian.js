function RunningMedia (a) {
  this.runningMedian = a;
  this.median = function (a) {
    if(this.runningMedian.length%2){
      var i = Math.floor(this.runningMedian.length/2);
      console.log(this.runningMedian[i].toPrecision(3));
    }
    else{
      var i = Math.floor(Math.round(this.runningMedian.length/2));
      var result = (this.runningMedian[i-1]+this.runningMedian[i])/2;
      console.log(result.toPrecision(3));
    }
  }
}

var input = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 1; i <= input[0]; i++) {
  var a = input.slice(1, i+1);
  median = new RunningMedia(a);
  median.median(input[i]);
};
