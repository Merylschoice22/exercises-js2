/* Challenge Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/ 

let writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  },
];

/* Loop through the array, 
and for each object, `console.log()` out the sentence:
"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}." */

// for (i = 0; i < writers.length; i++) {
//    if (writers[i].alive) {
//   console.log(`Hi, my name is ${writers[i].firstName} ${writers[i].lastName}. I am ${writers[i].age} years old, and work as a ${writers[i].occupation} AND I'M ALIVE!`)
//   } else {
//   console.log(`Hi, my name is ${writers[i].firstName} ${writers[i].lastName}. I am ${writers[i].age} years old, and work as a ${writers[i].occupation}.`)
//   }
// }

/*** FOR EACH ***/
// writers.forEach(w => {
//   console.log(`Hi, my name is ${w.firstName} ${w.lastName}. I am ${w.age} years old, and work as a ${w.occupation}.`)
// })

// writers.forEach(w => {
//   if (w.alive) {
//     console.log(`Hi, my name is ${w.firstName} ${w.lastName}. I am ${w.age} years old, and work as a ${w.occupation} AND I'M ALIVE!`)
//   }
// })

/*** TERNARY OPERATOR ***/
writers.forEach(w=> w.alive === true ? console.log(`Hi, my name is ${w.firstName} ${w.lastName}. I am ${w.age} years old, and work as a ${w.occupation} AND I'M ALIVE!`) : '')

/*
If you want an extra challenge, only `console.log()` the writers that are alive.
*/
