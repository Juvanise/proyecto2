const eventosPasados = document.querySelector('#container')

let tarjetas = ''

for(const dato of data.events) {
    /*console.log(dato)*/
    if(dato.currentDate > dato.date){
        tarjetas += `<div class="card" style="width: 18rem;">
    <img src= ${dato.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${dato.name}</h5>
      <p class="card-text">${dato.description}</p>
      <a href="#" class="btn btn-primary">Details</a>
    </div>
  </div>`
    }
}

eventosPasados.innerHTML += tarjetas