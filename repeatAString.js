/*
I just learned a bit about prototypes and I wanted
to try a method I made this method for Numbers that
returns true if it's negative, otherwise returns false.

how it works:
    it converts the number who's calling it to a
    string, example result: "-3" (string),
    then selects its [0] posittion and checks if
    its a minus "-" then returns true, else returns
    false.
*/
Number.prototype.isNegative = function() {
    return (String(this)[0] === "-") ? true : false;
};

function repeatStringNumTimes(str, num) {
     // repeat after me
    
    // temporary variable that will hold the str
    var tempStr = "";
    
    if(num.isNegative === true) {
        // empty string
        str = "";
    } else {
        // loop for num times
        for(var i = 0; i < num; i++) {
            // append str to the temporary variable
            tempStr+=str;
        }
    }
    
  return tempStr;
}
  
repeatStringNumTimes("*", 5);
