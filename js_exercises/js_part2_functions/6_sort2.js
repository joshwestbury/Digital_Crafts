// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.
//

function order (z) {
  z.sort(function (x, y) {
    if (x.length > y.length) {return 1;}
    else if (x.length < y.length) {return -1;}
    return 0;
  });
  console.log(z)

}

order([
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
