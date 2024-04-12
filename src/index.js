let addToy = false;
const urlToys='http://localhost:3000/toys'
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  renderAnimals()
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
  <p>${toy.likes}</p>
  <button class="like-btn" id="${toy.id}">Like ❤️</button>`
  card.setAttribute('class', 'card')
  document.getElementById('toy-collection').append(card)
  console.log(card)
  });
  
})
}