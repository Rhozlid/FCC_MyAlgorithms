function titleCase(str) {
    
    // casts str to lowerCase
    str = str.toLowerCase();
    
    // split str into an array of each word
    var strArr = str.split(" ");
    
    // clear str
    str = "";
    
    // loop trough each word in the array
    for(var i = 0; i < strArr.length; i++) {
        // get the first letter of the current word and capitalize it
        var initial = strArr[i][0].toUpperCase();
        // get the rest of the current word
        var theRest = strArr[i].substr(1);
        
        /*
        append a "space", the initial letter and the rest of the word
        to the str var, the "space" is there because of when I tried
        to capitalize the sentence "I'm a little tea pot" I had to
        separate the words but the "I'm" was giving me trouble and
        it was separated the "I" from the "'m".
        */
        str += " " + initial + theRest;
    }
    // then remove the space from the beginning of str, done.
    return str.slice(1);
}

titleCase("I'm a little tea pot");