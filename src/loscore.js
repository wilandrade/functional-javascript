// Let's make an object and start adding methods to it!
class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    const uniq = {};
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (uniq[array[i]] === undefined) {
        uniq[array[i]] = true;
        result.push(array[i]);
      }
    }
    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    let result = [];
    this.each(collection, (element) => {
      result.push(iteratee(element));
    });
    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    return this.filter(collection, (element) => {
      return test(element) === true ? false : true;
    });
  }

  reduce(collection, iterator, accumulator) {
    let memo = accumulator === undefined ? collection[0] : accumulator;
    let reduceArr =
      accumulator === undefined ? collection.slice(1) : collection;
    this.each(reduceArr, (element) => {
      memo = iterator(memo, element);
    });

    return memo;
  }

  every(collection, iterator) {
    iterator = iterator === undefined ? this.identity : iterator;
    return this.reduce(
      collection,
      (memo, element) => {
        if (!memo) return false;
        return iterator(element) ? true : false;
      },
      true
    );
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj, ...objs) {
    this.each(objs, (item) => {
      for (let key in item) {
        obj[key] = item[key];
      }
    });
    return obj;
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    let wasCalled = false;
    let result;
    return (...args) => {
      if (!wasCalled) {
        wasCalled = true;
        result = func(...args);
      }
      return result;
    };
  }

  memoize(func) {
    const resultsObj = {};

    return (...args) => {
      if (resultsObj[args] === undefined) {
        resultsObj[args] = func(...args);
      }
      return resultsObj[args];
    };
  }

  invoke(collection, functionOrKey) {
    const result = [];
    this.each(collection, (element) => {
      let newItem;
      if (typeof functionOrKey === "string") newItem = element[functionOrKey]();
      else newItem = functionOrKey.apply(element);

      result.push(newItem);
    });
    return result;
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy(arr, functionOrKey) {
    const newArr = arr.slice(0);

    const swapElements = (newArr, i, j) => {
      const temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
    };

    for (let i = 0; i < newArr.length; i++) {
      let minIndex = i;
      for (let j = i; j < newArr.length; j++) {
        if (typeof functionOrKey === "function") {
          if (functionOrKey(newArr[j]) < functionOrKey(newArr[minIndex])) {
            minIndex = j;
          }
        } else {
          if (newArr[j][functionOrKey] < newArr[minIndex][functionOrKey]) {
            minIndex = j;
          }
        }
      }
      if (minIndex !== i) swapElements(newArr, i, minIndex);
    }

    return newArr;
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
