// Remember The Munsters from earlier questions? For this problem, you are tasked with creating a deep copy of the munsters object, whose nested objects cannot be altered.

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let deepcopy = structuredClone(munsters);
//modern solution

const munstersIndestructible = JSON.parse(
  JSON.stringify(munsters), 
  (munsters, info) => Object.freeze(info)
);
//textbook solution