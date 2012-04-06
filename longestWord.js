function findLongestWord(str) {
    // split the string into an array of words
    var strArr = str.split(" ");
    
    // this var will hold the highest length word
    var top = 0;
    
    // loop trough each word in the array
    for(var i = 0; i < strArr.length; i++) {
        /*
        if the current word's length is greater than
        top, then assign this value to top
        */
        if(strArr[i].length > top) {
            top = strArr[i].length;
        }
        
    }
    // I know, it says it should return str.length but ._.
    // at least it works the way it should idk
  return top;
}

findLongestWord("May the force be with you");