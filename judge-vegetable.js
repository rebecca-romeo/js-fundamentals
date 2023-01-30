
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 1,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
]

const metric = 'redness'


// vegetable = list of veggies as an array of object
// metric = a characterist to judge the veggies by 
function judgeVegetable(vegetables, metric) {
  let winningPerson = vegetables[0];

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > winningPerson[metric]) {
      winningPerson = vegetables[i]
    }
  }
  console.log(winningPerson.submitter);
}

// function must return the name of person who submitted it
// 


judgeVegetable(vegetables, metric)