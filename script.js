import { API_KEY, API_BASE } from './keys.js';

const search= document.getElementsByClassName('city-search')[0]
const statusElement= document.querySelector('[data-status]')
const locationElement= document.querySelector('[data-location]')
const windElement= document.querySelector('[data-wind]')
const temperatureElement= document.querySelector('[data-temperature]')
const humidityElement= document.querySelector('[data-humidity]')


// const KEY=process.env.API_KEY
// const BASE= process.env.API_BASE
const api ={
    key: API_KEY,
    base: API_BASE,
} ;


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
// buttonClicked();
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
  
 const searchButton = document.querySelector('.btn');
 searchButton.addEventListener('click', buttonClicked);


