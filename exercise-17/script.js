/**
 * Exercise 17:
 * ------------
 * Write a JavaScript program to compare two objects 
 * to determine if the first one contains the same 
 * properties as the second one (which may also have 
 * additional properties)
 */

const spell1 = {
  name: 'Aard',
  color: 'Yellow',
  range: 2,
  active: true
}

const spell2 = {
  name: 'Aard',
  color: 'Blue',
  range: 20,
  active: false,
}

const compareObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1).length;
  const obj2Keys = Object.keys(obj2).length;

  if (obj1Keys < obj2Keys) return false
  else return true
};

console.log(compareObjects(spell1, spell2))
