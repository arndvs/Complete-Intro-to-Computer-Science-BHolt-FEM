/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/


const mergeSort = (nums) => {
    // base case - if nums length is 0 or 1
    if (nums.length < 2) {
        return nums;
    }

    const length = nums.length;

    // floor rounds down so if middle if lengeth is 7, rounds down to 3
    const middle = Math.floor(length / 2);

    // the first number in the array to the middle of the array
    const left = nums.slice(0, middle);
    //
    // after the middle of the array
    const right = nums.slice(middle);

    // merge takes two sorted lists and returns one sorted list
    return merge(mergeSort(left), mergeSort(right));
    };

    const merge = (left, right) => {
    const results = [];

    // go until one list runs outs
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
        // shift removes the first element in an array and returns it
        // it's like .pop() for the front
        results.push(left.shift());
        } else {
        results.push(right.shift());
        }
    }

    // either left or right will be empty so you can safely concat both
    return results.concat(left, right);
    };


// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
