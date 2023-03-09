/*capturar el contenido de la barra de busqueda*/
const queryString = location.search

/*instanciar un urlsp para acceder a los parametros de esa ruta*/
const params = new URLSearchParams(queryString)

/*acceder al id de esa ruta*/
const id = params.get("_id")


const card = data.events.find(info => info.id == id);

const containerDetails = document.getElementById("container-details");
let html = '';

 html += `
    <div class="card" style="width: 18rem;">
    <img src= "${card.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${card.name} </h5>
      <p class="card-text">${card.description} </p>
      <p class="card-text"><strong>Date: ${card.date}</strong></p>
      <p class="card-price">Price: ${card.price} </p>
      <p class="card-text"><span><strong>category: ${card.category}</span></strong></p>
      <p class="card-text"><strong>Capacity: ${card.capacity}</strong></p>
      
      <a href="./index.html" class="btn btn-primary">Back</a>
    </div>
  </div>`

  containerDetails.innerHTML = html








