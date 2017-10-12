// Given an array of people's names:
//

// Print out 'Good Job, {{name}}!' for each person's name, one on a line.

function peoplesNames (list) {
  function names (n) {
    return `Good Job, ${n}`
  }
  var newList = list.map(names);
  console.log(newList)
}

peoplesNames ([
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
])
