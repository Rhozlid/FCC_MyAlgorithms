function palindrome(str) {
// Good luck!
    
    // regex pattern that matches the characters , and .
    var regex = /[\,\.\/\(\)\_\-]/gi;
    
    /*
    replace those characters with nothing (deleting them),
    make the entire string lowerCase, split the string by
    every space in it and join all the words from the previously
    made array.
    */
    str = str.replace(regex, "").toLowerCase().split(" ").join("");
    
    console.log(str);
    
    /*
    split each letter from str, reverse the new array and join them
    all again to make an entire string.
    */
    var reversedStr = str.split("").reverse().join("");
    
    console.log(reversedStr);
    
    /*
    if both the original string and the reversed one
    matches, then it is a palindrome
    */
    return (str === reversedStr) ? true : false;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));