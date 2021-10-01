const cityName = document.querySelector('.cityName');
let button = document.querySelector('.btn');
const result = document.querySelector('.result');

// ADDING YOUR API KEY FROM OPENWEATHERMAP.ORG
const api_kay = "6dc17d11d1f0627c126ed88917d2bf80";

button.addEventListener('click', () => {

    if(cityName.value == ''){
        swal("Unknown", "Please enter a valid city name", "error")
    }else{
        console.warn('Oops!, check your network')
    }

    const cityInput = cityName.value;
    
// FETCHING THE API
    // THE API AND THE FIRST .THEN RETURS A PROMISE
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${api_kay}`)
    
    .then(res => res.json())

    .then(data => {
    
        result.innerHTML = `
                            <ul>
                                <li class="desc">${data.weather[0].description}</li>
                                <li class="city">${data.name}</li>
                                <li>${data.sys.country}</li>
                                <li>${data.base}</li>
                                <li class="temp">${data.main.temp}&#176;c</li>
                            </ul>
                            `
    
    })
    .catch(err => {
        result.innerHTML = `<h2 class="error">Unknown location</h2>`;
        cityName.value = '';
    })



    cityName.value = '';
});