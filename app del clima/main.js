window.addEventListener('load',()=>{
     let lon
     let lat

     let temperaturaValor = document.getElementById('temperatura-valor')
     let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

     let ubicaccion = document.getElementById('ubicaccion')
     let iconoAnimado = document.getElementById('icono-animado')

     let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion =>{
            log = posicion.coords.longitude
            lat = posicion.coords.latitude

          const url = `https://api.openweathermap.org/data/2.5/weather?q=Gálvez&lang=es&units=metric&appid=edaad2d8e4a96d64db08cda4c0d03fd0`

            fetch(url)
            .then(response => {return response.json() })
            .then(data =>{
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} ºC`
                
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                  
                ubicaccion.textContent = data.name

                vientoVelocidad.textContent = `${data.wind.speed} m/s`

              //Iconos Animados 
               console.log(data.weather[0].main)
                switch (data.weather[0].main){
                case 'Thunderstorm':
                iconoAnimado.src = 'animated/thunder.svg'
                console.log('TORMENTA');
                break;
                case 'Drizzle':
                iconoAnimado.src = 'animated/RAINY-2.svg'
                console.log('LLOVIZNA');
                break;               
                case 'Rain':
                iconoAnimado.src = 'animated/rainy-7.svg'
                console.log('LLUVIA');
                break;
                case 'Snow':
                iconoAnimado.src = 'animated/snowy-6.svg'
                console.log('NIEVE');
                break;
                case 'Clear':
                iconoAnimado.src = 'animated/day.svg'
                console.log('LIMPIO')
                break;
                case 'Atmosphere':
                iconoAnimado.src = 'animated/ weather.svg'
                console.log('ATMOSPHERE')
                break;
                case 'Clouds':
                iconoAnimado.src = 'animated/cloudy-day-1.svg'
                console.log('NUBES')
                break;
                default:
                iconoAnimado.src = 'animated/cloudy-day-1.svg'
                console.log('por defecto')
              }

            })
            .catch(error => {
                console.log(error)
            })
        })
    }
       
})
