/**
 * Exercise 17:
 * ------------
 * Write a JavaScript program to compare two objects 
 * to determine if the first one contains the same 
 * properties as the second one (which may also have 
 * additional properties)
 */

// Learning objects
const person1 = {
  firstName: 'Geralt',
  lastName: 'of Rivia',
  age: 80,
  isEmployed: true,
  castAard: function(){return console.log('*' + this.firstName + ' casts Aard*')},
}

const person2 = {
  firstName: 'Yeneffer',
  lastName: 'of vengerberg',
  age: 98,
  isEmployed: false,
  castAard: () => {console.log('*Yennefer casts Aard*')},
} 

person1.castAard()
person2.castAard()