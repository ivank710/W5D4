Array.prototype.uniq = function() {
  let result = [];

  this.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  })
  return result;
}

Array.prototype.twoSum = function() {
  let result = []

  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }

  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  for (let i = 0; i < this[0].length; i++) {
    let temp = []
    for (let j=0; j<this.length; j++) {
      temp.push(this[j][i]);
    }
    result.push(temp);
  }
  return result;
};

Array.prototype.myEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let result = [];

  //  this.myEach(function(el) {
  //    result.push(callback(el));
  //  });

  this.myEach( el => result.push(callback(el)));
  return result;

  // for(let i = 0; i < this.length; i++) {
  //   result.push(callback(this[i]));
  // }
  // return result;
};

Array.prototype.myReduce = function(callback, acc = null) {
  if (acc === null) {
    acc = this[0];
    this.slice(1).myEach(el => acc = callback(acc, el));
  } else {
    this.myEach(el => acc = callback(acc, el));
  }

  return acc;
};

Array.prototype.bubbleSort = function(comparison) {
  let sorted = false;
  while (sorted === false) {
    for(let i=0; i<this.length-1; i++) {
      sorted = true;
      if (!comparison(this[i], this[i+1])) {
        sorted = false
        let temp = this[i];
        this[i] = this[i+1];
        this[i+1] = temp;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let result = [];
  for (let i=0; i<this.length; i++) {
    for (let j=i+1; j<=this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
}
const range = function (start, end) {
  if (start === end) {
    return [start];
  } 
  let arr = range(start + 1, end);
  arr.unshift(start);
  return arr;
}

const sumRec = function(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumRec(arr.slice(1))
}

const exponent = function(b, power) {
  if (power === 0) {
    return 1;
  }

  return b * exponent(b, power - 1);
}


const fibonacci = function(n) {
  if (n === 1) {
    return [1];
  } else if(n === 2) {
    return [1, 1];
  }

  let prev = fibonacci(n - 1);
  let val = prev.slice(-1)[0] + prev.slice(-2)[0];
  prev.push(val);
  return prev;
};

const deepDup = function(arr) {
  let result = [];

  arr.forEach(function(el) {
    if (Array.isArray(el)) {
      result.push(deepDup(el))
    } else {
      let val = [el].slice(0);
      result.push(val[0]);
    }
  })

  return result;
}

const bsearch = function(arr, target) {
  if(arr.length === 0 || (arr.length===1 && target != arr[0])) {
    return -1;
  } 
  let middle = Math.floor(arr.length / 2);
  
  if (target === arr[middle]) {
    return middle;
  } else if(target < arr[middle]) {
    return bsearch(arr.slice(0, middle), target);
  } else {
    result = bsearch(arr.slice(middle+1));
    (result === -1) ? -1 : (result+middle+1);
  }
}