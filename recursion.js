var range = function(start, end) {
  if(end < start) {
    return [];
  } else {
    return [start].concat(range(start+1, end));
  }
}

// console.log(range(0,5));

var sumItter = function(array) {
  var sum = 0;
  
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  
  return sum;
}

// console.log(sumItter([1,2,3,4]));

var sumRec = function(array) {
  if(array.length === 1) {
    return array[0];
  } else {
    return array[0] + sumRec(array.slice(1));
  }
}

// console.log(sumRec([1,2,3,4]));

var exp1 = function(base, power) {
  if (power === 0) {
    return 1;
  } else {
    return base * exp1(base, power - 1);
  }
}

// console.log(exp1(5, 2));

var exp2 = function(base, power) {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  } else if (power % 2 === 0) {
    var result = exp2(base, power / 2);
    return result * result;
  } else {
    var result = exp2(base, (power - 1)/2);
    return base * result * result;
  }
}

// console.log(exp2(6, 2));

var fibRec = function(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1,1];
  } else {
    var fibs = fibRec(n-1)
    return fibs.concat(fibs[fibs.length-1] + fibs[fibs.length-2]);
  }
}

// console.log(fibRec(10));


var fibItter = function(n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [1];
  } else {
    var fibs = [1,1];
    for (var i = 2; i < n; i++) {
      fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2])
    }
    return fibs;
  }
}

// console.log(fibItter(10));

var bsearch = function(array, target) {
  if(array.length === 0 || (array.length === 1 && array[0] !== target)) {
    return -1;
  } else {
    var middle = Math.floor(array.length / 2);
    if(array[middle] === target) {
      return middle;
    } else if(array[middle] > target) {
      return bsearch(array.slice(0, middle), target);
    } else {
      var result = bsearch(array.slice(middle + 1), target);
      if (result === -1) {
        return result;
      } else {
        return result + 1 + middle;
      }
    }
  }
}

// console.log(bsearch([1,2,3,4,5], 6));

var makeChange = function(amt, coins) {
  var change = [];
  if (amt === 0 || coins.length === 0) {
    return change;
  } else {
    var currentCoin = coins[0];
    var times = Math.floor(amt/currentCoin);
    for (var i = 0; i < times; i++) {
      change.push(currentCoin);
    }
    var result = makeChange((amt-(currentCoin * times)), coins.slice(1));
    var change1 = change.concat(result);
    var change2 = makeChange(amt, coins.slice(1));
    if(change1.length > change2.length && change2.length !== 0) {
      return change2;
    } else {
      return change1;
    }
  }
}

// console.log(makeChange(14, [20, 10, 7, 1]));

var mergeSort = function(array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  } else {
      var middle = Math.floor(array.length/2);
      var left = mergeSort(array.slice(0, middle));
      var right = mergeSort(array.slice(middle));
      return merge(left, right);
  }    
}

var merge = function(left, right) {
  var sortedArray = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return sortedArray.concat(left).concat(right);
}

// console.log(mergeSort([3,2,5,1,4]));

var subsets = function(array) {
  if(array.length === 0) {
    return [array];
  } else {
    var addToArray = function(el) {
      return el.concat(array[array.length-1]);
    }
    
    var prevSubs = subsets(array.slice(0, array.length-1));
    var currSubs = prevSubs.map(addToArray);
    return prevSubs.concat(currSubs);
  }
}

// console.log(subsets([1,2,3]));







