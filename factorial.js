
function factorialize(num) {
    var final = num;
    for(var i = 1; i < final; i++) {
        num*=i;
    }
    
  return Math.floor(num) || 1;
}

// must return 120
console.log(factorialize(5));
