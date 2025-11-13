// Similar to the previous question, you need to create a deep copy of the following nested object.

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0, [1, 2] ],
  truthy: ['everything else...']
};

const deepCopy = {};

for (let prop in truthiness) {
  deepCopy[prop] = [...truthiness[prop]];
}