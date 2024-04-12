let addToy = false;
const urlToys='http://localhost:3000/toys'
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
 renderAnimals()
  createToy()
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
function renderAnimals(){
fetch(urlToys)
.then(res=>res.json())
.then(toys=>{
  toys.forEach(toy => {
    let card = document.createElement('div')
  card.innerHTML = `<h2>${toy.name}</h2>
  <img src=${toy.image} class = toy-avatar >
  <p>${toy.likes} Likes</p>
  <button class="like-btn" id="${toy.id}">Like ❤️</button>`
  card.setAttribute('class', 'card')
  document.getElementById('toy-collection').append(card)

  card.querySelector('.like-btn').addEventListener('click', ()=>{
    toy.likes += 1
    card.querySelector('p').textContent = `${toy.likes} Likes`
    editToy(toy)
  })
  });
})
}

function createToy(){
  let form = document.querySelector('form')//document.getElementById('add-toy-form')
  form.addEventListener('submit', e=>{
    e.preventDefault()
  fetch(urlToys,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept : "application/json"
    },
    body: JSON.stringify({
      'name': `${document.querySelectorAll('input')[0].value}`,
      'image': `${document.querySelectorAll('input')[1].value}`,
      'likes': 0
    })
  })
  .then(res=>res.json())
  .then(newToy=>console.log(newToy))
  })
  }

  function editToy(toy){
    fetch(`http://localhost:3000/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept : "application/json"
      },
      body: JSON.stringify({
        'likes': parseInt(`${toy.likes}`)
      })
    })
    .then(res=>res.json())
    .then(editedToy=>console.log(editedToy))
  }

