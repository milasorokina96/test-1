function startCounter(start = 0, step = 1) {
    let counter = start;
    return function() {
      var returnCounter = counter;
      counter += step;
      return returnCounter;
    }
  }
module.exports = startCounter;