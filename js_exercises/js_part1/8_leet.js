// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:
//
// A => 4
// E => 3
// G => 6
// I => 1
// O => 0
// S => 5
// T => 7
// > leetspeak('Leet')
// l337

function leetSpeak(par) {
  var z = []
  par = par.toUpperCase()
  for (var i = 0; i < par.length; i++) {
    if (par[i] === 'A') {
      z.push('4')
    } else if (par[i] === 'E') {
      z.push('3')
    } else if (par[i] === 'G') {
      z.push('6')
    } else if (par[i] === 'I') {
      z.push('1')
    } else if (par[i] === 'O') {
      z.push('0')
    } else if (par[i] === 'S') {
      z.push('5')
    } else if (par[i] === 'T') {
      z.push('7')
    } else {
      z.push(par[i])
    }
  }
  console.log(z.join(''))
}

leetSpeak('Hello my name is Gregory Lancaster')
