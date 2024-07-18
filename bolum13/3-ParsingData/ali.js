const variable = [
  { hobby: 'swimming', person: 'Ali' },
  { hobby: 'playing card', person: 'Ali' },
  { hobby: 'take a trip', person: 'Ali' },
];

console.log(JSON.stringify(variable));

localStorage.setItem('todos', JSON.stringify(variable));

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));
