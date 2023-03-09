/*console.log(data)
for(i = 0; i<data.events.length;i++){
    console.log(data.events[i])
}*/
const contenedorTarjetas = document.querySelector('#contenedor')
let events = data.events
let tarjetasGeneradas = crearTarjetas(events)

contenedorTarjetas.innerHTML = tarjetasGeneradas

function crearTarjetas(arrayDatos){
contenedorTarjetas.innerHTML = ""

let tarjetas = ''
  for(const dato of arrayDatos) {
    tarjetas += `<div class="card" style="width: 18rem;">
    <img src= ${dato.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title-principal">${dato.name}</h5>
      <h6 class="card-title">Category: ${dato.category}</h6>
      <p class="card-date">Date: ${dato.date}</p>
      <p class="card-text">${dato.description}</p>
      <p class="card-price">Price: $ ${dato.price}</p>
      <a href="./details.html?id=${dato._id} "class="btn btn-primary">Details</a>
    </div>
  </div>`
}
return tarjetas
}

/*input search*/

const buscador = document.getElementById("buscador");

const contenedorCards = document.getElementById("contenedor");
console.log(contenedorCards);
const cards = contenedorCards.getElementsByClassName('card');
console.log(cards);


buscador.addEventListener("change",()=>{
  let tarjetasFiltradas = data.events.filter((item) => item.name.toLowerCase().includes(buscador.value.toLowerCase()))
  console.log(tarjetasFiltradas);
  
  contenedorCards.innerHTML =  crearTarjetas(tarjetasFiltradas);

  })
  
/*checkbox*/
const form = document.querySelector("#divForm");

let lista = [data.events]
checkboxFiltrados= lista.filter((item) => item.category.includes(form.value))

form.addEventListener("click",(event)=>{
  let checked = []
let checkboxes = event.target().querySelectorAll('input[type-checkbox]')
console.log(checkboxes);

checkboxes.addEventListener("change",(event)=>{
  for(let i= 0;i<checkboxes.length;i++){
    if(checkboxes[i].checked){
      checked.push(checkboxes[i].value)
    }
  }
  return checked
  })
  if (checked.includes.checkboxFiltrados){
    form.innerHTML = crearTarjetas(checked)
  }
  
})
