(a) => {
    return a + 100;
  }
  
  (a) => a + 100;
  
  a => a + 100;
  
  // As shown above, the { brackets } and ( parentheses ) and "return" are optional, but may be required.
  
  
  
  
  
  // TRADITIONAL FUNCTIONS
  function sum(a, b){
    return a + b + 100;
  }
  console.log(sum(5,8));



  // Arrow Function
  sum2= (a, b) => a + b + 100;
  console.log(sum2(5,8));
  
  
  
  // Lexical this
  var bob = {
    _name: "Bob",
    _friends: ['krishna','ramesh','hari'],
    printFriends() {
      this._friends.map(f =>
        console.log(this._name + " knows " + f));
    }
  }
  
  console.log(bob.printFriends())
  
  
  
  
  
  
  