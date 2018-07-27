var zyycode = {
  /**
   * @description
   * Creates an array of elements split into groups the length of size. 
   * If array can't be split evenly, the final chunk will be the remaining 
   * elements.
   *
   * @param {Array} array The array to process.
   * @param {number} size The length of each chunk.
   * @returns {Array} Returns the new array of chunks.
   */
  chunk: function(array, size) {
    size = size || 1
    let result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, size + i))
    }
    return result
  },
  /**
   * @description
   * Creates an array with all falsey values removed. 
   * The values false, null, 0, "", undefined, and NaN are falsey.
   *
   * @param {Array} array The array.
   * @returns {Array} Returns the new array of the filtered values.
   */
  compact: function(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },
  /**
   * @description
   * Creates a new array concatenating array with any additional arrays 
   * and/or values.
   *
   * @param {Array} array The array to concatenate.
   * @param {...*} values The values to concatenate.
   * @returns {Array} Returns the new concatenated array.
   */
  concat: function(array, ...values) {
    let result = array.concat(...values)
    return result
  },
  /**
   * @description
   * Creates an array of array values not included in the other given arrays.
   * The order and references of result values are determined by the first array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} values The values to exclude.
   * @returns {Array} Returns the new array of filtered values.
   */
  difference: function(array, ...values) {
    let rest = [].concat(...values)
    return array.filter(item => !rest.includes(item))
  },

  /**
   * @description
   * create a slice of array with n elements droppen from the beaginning.
   *
   * @param {Array} array The array to query.
   * @param {number} [n = 1] The number of elements to drop.
   * @returns {Array} Returns the slice of array.
   */
  drop: function(array, n = 1) {
      return array.slice(n) 
  },
  /**
   * @description
   * create a slice of array with n elements droppen from the end.
   *
   * @param {Array} array The array to query.
   * @param {number} [n = 1] The number of elements to drop.
   * @returns {Array} Returns the slice of array.
   */
  dropRight: function(array, n = 1) {
    if (n === 0) return array
    array.splice(-n)
    return array
  },
   /**
   * @description
   * Fills elements of array with value from start up to, but not including end.
   * 
   * @param {Array} array The array to fill.
   * @param {*} value The value to array with.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns array.
   */
  fill: function(array, value, start=0, end=array.length) {
    return array.fill(value, start, end)
  },
  /**
   * @description
   * Flattens array a single level deep.
   *
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   */
  flatten: function(array) {
      return [].concat.apply([], array)
      // ES6 ...
      // return [].concat(...array)
      // reduce()
      // let newArray = array.reduce((prev, curr) => {
      //   return prev.concat(curr)
      // })
      // return newArray()
  },

  flattenDeep: function(array) {
    // if (!Array.isArray(array)) return array
    // return this.flattenDeep(array)
  },
  /**
   * @description
   * Get the first element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of array.
   */
  head: function(array) {
    return array.shift(0)
  },
  /**
   * @description
   * Gets the index at which the first occurrence of value is found in array. 
   * If fromIndex is negative, it's used as the offset from the end of array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] THe index to search from.
   * @returns {number} Return the index of the matched value, else -1
   */
  indexOf: function(array, value, fromIndex = 0) {
    return array.indexOf(value, fromIndex)
  },
  /**
   * @description
   * Converts all elements in array into a string separated by separator.
   * 
   * @param {Array} array The array to convert.
   * @param {string} [separatpor=','] The element separator.
   * @returns {string} Returns the joined string.
   */
  join: function(array, separatpor=',') {
    return array.join(separatpor)
  },
  /**
   * @description
   * Get the last element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {*} Returns the last element of array.
   */
  last: function(array) {
    return array.pop()
  },
  /**
   * @description
   * This method is like _.indexOf except that it iterates 
   * over elements of array from right to left.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {*} [fromIndex=array.length - 1] The index to search from.
   * @returns {number} Returns the index of the matched value, else -1.
   */
  lastIndexOf: function(array, value, fromIndex = array.length - 1) {
    return array.lastIndexOf(value, fromIndex)
  },
  /**
   * @description
   * Gets the element at index n of array. 
   * If n is negative, the nth element from the end is returned.
   * 
   * @param {Array} array The array to query.
   * @param {number} [n=0] The index of the element to return.
   * @returns {*} Returns the nth element of array.
   */
  nth: function(array, n = 0) {
    if (n < 0) {
      n = n + array.length
    }
    return array[n]
  },
  /**
   * @description
   * Removes all givens values from array.
   * 
   * @param {Array} array The array to modify.
   * @param {*} values The values to remove.
   * @returns {Array} Retruns array.
   */
  pull: function(array, ...values) {
    let restArray = [...values]
    return array.filter(item => !restArray.includes(item))
  },
  /**
   * @description
   * This method is like _.pull except that it accepts an array of values to remove.
   * 
   * @param {Array} array The array to modify.
   * @param {Array} values The values to remove.
   * @returns {Array} Returns array.
   */
  pullAll: function(array, values) {
    return array.filter(item => !values.includes(item))
  },
  /**
   * @description
   * Reverses array so that the first element becomes the last, 
   * the second element becomes the second to last, and so on.
   * 
   * @param {Array} array The array to modify.
   * @returns {Array} Returns array.
   */
  reverse: function(array) {
    return array.reverse()
  },


  /**
   * @description
   * Computes the sum in array.
   *
   * @param {Array} array The array to iterate over.
   * @returns {number} Returns the sum.
   */
  sum: function(array) {
    if (!array) return 0
    return this.sumBy(array, it => it)
  },
  /**
   * @description
   * This method is like _.sum except that it accepts iteratee 
   * which is invoked for each element in array to generate the value to be summed. 
   * The iteratee is invoked with one argument: (value).
   *
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The iteratee invoked per element.
   * @returns {number} Returns sum.
   */
  sumBy: function(array, iteratee) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += iteratee(array[i])
    }
    return sum
  },
  /**
   * @description
   * Creates a slice of array from start up to, but not including, end.
   * 
   * @param {Array} array The array to slice.
   * @param {number} [start=0] The start position.
   * @param {number} [end=array.length] The end position.
   * @returns {Array} Returns the slice of array.
   */
  slice: function(array, start = 0, end = array.length) {
    return array.slice(start, end)
  },
  /**
   * @description
   * Uses a binary search to determine the lowest index at which value
   * should be inserted into array in order to maintain its sort order.
   * 
   * @param {Array} array The sorted array to inspect.
   * @param {number} value The value to evaluate.
   * @returns {number} Returns the index at which value should be inserted into array.
   */
  sortedIndex: function(array, value) {
    for (let i = 0; i < array.length; i++) {
      if (value <= array[i]) {
        return i
      }
    }
    return array.length
  },
  /**
   * @description
   * This method is like _.indexOf except that it performs 
   * a binary search on a sorted array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else -1.
   */
  sortedIndexOf: function(array, value) {
    return array.indexOf(value)
  },
  /**
   * @description
   * This method is like _.sortedIndex except that it 
   * returns the highest index at which value should be inserted into
   * array in order to maintain its sort order.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index at which value should be inserted into array.
   */
  sortedLastIndex: function(array, value) {
    return array.lastIndexOf(value) + 1
  },
  /**
   * @description
   * This method is like _.lastIndexOf except that 
   * it performs a binary search on a sorted array.
   * 
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns the index of the matched value, else -1.
   */
  sortedLastIndexOf: function(array, value) {
    return array.lastIndexOf(value)
  },
  /**
   * @description
   * Gets all but the last element of array.
   * 
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of array.
   */
  initial: function(array) {
    return array.slice(0, array.length - 1)
  },
}