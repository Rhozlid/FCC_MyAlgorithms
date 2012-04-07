function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    
    // substrings from the end of str, the entire target
    var ending = str.substr(-target.length);
    
    // return whether the ending of str matches the target
    return (ending === target) ? true : false;
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");