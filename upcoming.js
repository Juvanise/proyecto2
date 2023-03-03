
const nuevoArray = data.events.filter(card => 
    card.date > data.currentDate)
    console.log(nuevoArray)
    const contenedorTarjetasPast = document.querySelector('#contenedor')
    /*se crea nuevas tarjetas*/
    let tarjetasGeneradas = crearTarjetas(nuevoArray)
    contenedorTarjetasPast.innerHTML = tarjetasGeneradas
    
    function crearTarjetas(arrayDatos) {
        let tarjetas = ''
        for (const dato of arrayDatos) {
            tarjetas += `<div class="card" style="width: 18rem;">
            <img src= ${dato.image} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${dato.name}</h5>
              <p class="card-text">${dato.description}</p>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>`
        }
        return tarjetas
    }
    