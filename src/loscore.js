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
    // YOUR CODE HERE
  }

  every() {
    // YOUR CODE HERE
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    // YOUR CODE HERE
  }

  memoize(func) {
    // YOUR CODE HERE
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
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