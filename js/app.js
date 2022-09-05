const API_KEY = `6fc458c072f98cc5ecd6414a085b9b77`;

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}


const displayTemperature = data =>{
    
    console.log(data)
    setTextById('temperature',data.main.temp)
    setTextById('clouds',data.weather[0].main)
}

const setTextById = (id,text) =>{
    const temperature =  document.getElementById(id)
    temperature.innerText= text;
    const clouds = document.getElementById(id)
    clouds.innerText = text;
}

document.getElementById('search-btn').addEventListener('click',function(){
    const searchField = document.getElementById('search-field')
    const city = searchField.value;
    document.getElementById('city').innerText = city
    loadTemperature(city); 
})

