let body;
const villagers = [
  {
    name: "Bill",
    species: "Duck",
  },
  {
    name: "Daisy",
    species: "Dog",
  },
  {
    name: "Monty",
    species: "Monkey",
  },
];

function clearDOM(){
  body.innerHTML = '';
}

function addElement(obj){
  const elem = document.createElement('div');
  elem.textContent = obj.name;
  body.appendChild(elem);
}

function populateBody(array){
  for(const item of array){
    addElement(item);
  }
}

const searchFor = (array, input) => {
  const newArray = array.filter(obj => {
    return obj.name.toLowerCase().includes(input.toLowerCase());
  });
  return newArray
}

document.addEventListener('DOMContentLoaded', ()=>{
  body = document.getElementById('body');
  clearDOM();
  populateBody(villagers);

  const search = document.getElementById('search');
  search.addEventListener('input', (e)=>{
    // First filter
    console.log('search', search.value);
    const newArray = searchFor(villagers, search.value);
    console.log(newArray);
    clearDOM();
    populateBody(newArray);
  })
});