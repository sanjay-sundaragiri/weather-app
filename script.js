
const search= document.getElementsByClassName('city-search')[0]
const statusElement= document.querySelector('[data-status]')
const locationElement= document.querySelector('[data-location]')
const windElement= document.querySelector('[data-wind]')
const temperatureElement= document.querySelector('[data-temperature]')
const humidityElement= document.querySelector('[data-humidity]')

const api ={
    key: "a773c60416c78424cb1d9fef3aa809cd",
    base: "https://api.openweathermap.org/data/2.5/",
} ;
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a773c60416c78424cb1d9fef3aa809cd

function buttonClicked(){
    //API
    fetch(`${api.base}weather?q=${search.value}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((data)=>{
        // console.log(data);
        
        setWeather(data);
        
    }).catch((err)=>{
        console.log(err)
    })
}

function setWeather(data){
    // console.log("Hello")
    
    console.log(data)
    search.value=""
    statusElement.textContent=data.weather[0].description
    locationElement.textContent= data.name
    windElement.textContent= data.wind.speed
    temperatureElement.textContent= data.main.temp
    humidityElement.textContent= data.main.humidity
 }
  



