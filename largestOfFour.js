function largestOfFour(arr) {
  // You can do this!
    
    // new array that will hold the highest numbers from each array
    var newArr = [];
    
    // loop trough each array from arr
    for(var i = 0; i < arr.length; i++) {
        // this var will hold the highest number from each sub-array
        var currentTopNumber = 0;
        // loop trough each sub-array
        for(var j = 0; j < arr[i].length; j++) {
            /*
            if the current number from the sub-array is 
            greater than currentTopNumber, assign this one
            to currentTopNumber
            */
            if(arr[i][j] > currentTopNumber) {
                currentTopNumber = arr[i][j];
            }
        }
        // push each currentTopNumber from each sub-array to newArr
        newArr.push(currentTopNumber);
    }
    
  return newArr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
