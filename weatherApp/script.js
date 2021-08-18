const apikey = '3265874a2c77ae4a04bb96236a642d2f';
const apikey1 = '9a14131d21314caaf8e9208f49b174d4';

const url = (location) => {
    `api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
}

async function getWeatherByLocation(location){

    const resp = await fetch(url(location), {
        origin : "cors" 
    });

    const respData = await resp.json();
    console.log(respData);
}

getWeatherByLocation('London');