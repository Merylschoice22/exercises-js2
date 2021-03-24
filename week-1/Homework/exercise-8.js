/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/ 

let mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS","React","Node"],
    class: "Mar1",
    studentLikes: 0,
    job:
      {
        company: "Google",
        position: "Senior developer",
        city: "Barcelona"
      }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    job:
      {
        company: "FC Barcelona",
        position: "Player",
        city: "Barcelona"
      }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React","Angular","Python","Node"],
    class: "Mar4",
    studentLikes: 0,
    job:
      {
        company: "Facebook",
        position: "Software Manager",
        city: "Chicago"
      }
  },  
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML","JS","React"],
    class: "Mar2",
    studentLikes: 0,
    job:
      {
        company: "Amazon",
        position: "Senior developer",
        city: "Barcelona"
      }
  },

];

//YOUR CODE HERE
/*
1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."
*/

// for (i = 0; i < mentors.length; i++) {
//   if (mentors[i].job.city.includes('Barcelona') && mentors[i].skills.includes('React')) {
//   console.log(`Hi, my name is ${mentors[i].firstName} ${mentors[i].lastName}. I work in Barcelona and I know React.`)
//   }
// }

/*** FOR EACH ***/
// mentors.forEach(m=> {
//   m.job.city === 'Barcelona' && m.skills.includes('React') ?
//   console.log(`Hi, my name is ${m.firstName} ${m.lastName}. I work in Barcelona and I know React.`) : ''
// })


/*
2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]
*/

// for (i = 0; i < mentors.length; i++) {
//   if (mentors[i].job.city.includes('Barcelona') && mentors[i].skills.includes('React')) {
//     mentors[i].class = 'Jun1';
//     mentors[i].skills.push('SQL');
//   }
// }

// console.log(mentors);  // -- TO CHECK
// mentors.forEach(m => {
// if (m.job.city === 'Barelona') {
//   m.class = 'Jun1'
//   m.skills.push('SQL')
// }
// })
/*
3. Create an object method with the name .addSkill() to be able to add skills from it
*/

 
// mentors.forEach(m => {
//   m.addSkill = function (skill) {
//     this.skills.push(skill)
//   }
// })


/*
4. Create a function to add a skill to all members in a list of mentors
*/

/* function addSkill(mentors, newSkill) {
  mentors.forEach(element => {
    console.log('beforeeeee' + element.skills);
    element.skills.push(newSkill)
    console.log('afterrrrr' + element.skills.push(newSkill))
  });
  
}
addSkill(mentors, "rrrrrrr");
 */

// function addSkill(mentors, newSkill) {
//   mentors.forEach(m => m.skills.push(newSkill))
// }


/*
5. Create a function to remove a skill from all members in a list of mentors
*/

// function removeSkill(mentors,newSkill) {
//   mentors.forEach (m => {
//     m.skills = m.skills.filter(s => s !== newSkill)
//   }
// ) 
// }

// console.log(removeSkill(mentors, 'React'));

/* If you put console.log(m.skills) inside the function, as the last line of code, you get what Yogi was showing
 I think is is because forEach does not return anything so you have to store the result in a variable
*/

/*
6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills
*/

/* function mentorWithMoreSkills(mentorList) {
  let mentorsName = '';
  let numberOfSkills = 0;
  mentors.forEach (m => {
    if (m.skills.length > numberOfSkills) {
      numberOfSkills = m.skills.length;
      mentorsName = m.firstName + " " + m.lastName
    }
  })
  return mentorsName
  }

console.log(mentorWithMoreSkills(mentors)) */

/*
7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes
*/

mentors.forEach( m=> {
  m.addStudentLikes = function () {
    this.studentLikes = this.studentLikes + 1 
    // or this.studentLikes ++
  }
})

/*
8. Create a function that adds a student like to all mentors in the array
*/ 

function addStudentLikes(mentors){
  mentors.forEach(m => m.studentLikes ++)
}

console.log(addStudentLikes(mentors));