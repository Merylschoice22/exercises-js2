/*
Alice has a list of good friends.

Define a method "makeFriend" to add a new friend to her list.
*/

let person = {
    name: "Alice",
    friends: ["John", "Nina"],
    
    // makeFriend: (name) {  --- the word function isn't necessary
    makeFriend: function (name) {
      this.friends.push(name);
    }
  };

// this.friends[this.friends.length] = name  --- to add a new item to the end of the array

  /*
  DO NOT EDIT ANYTHING BELOW THIS LINE
  */
  
  person.makeFriend("Bob");
  
  console.log(
    `Expected result: 'John,Nina,Bob'. Actual result: ${person.friends}`
  );