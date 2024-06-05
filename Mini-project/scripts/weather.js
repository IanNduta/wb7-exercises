"use strict";

let cities = [
    {name: "Benbrook, TX",
    latitude: 32.6732,
    longitude: -97.4606 },

    {name: "Atlanta, GA",
    latitude: 33.74727730145718,
    longitude: -84.3864987578688,
    },

    {name: "Detroit, MI",
    latitude: 42.33241016247983, 
    longitude: -83.0459899736478,
    },

    {name: "Naples, fl",
    latitude: 26.141801572334046,
    longitude: -81.79454369276671,
    },

    {name: "New York",
    latitude: 40.701867107988576,
    longitude: -73.97713093759346
    },

    {name: "Chicago, IL",
    latitude: 41.8781,
    longitude: -87.6298,
    },

    {name: "Los Angeles, CA",
    latitude: 34.0522,
    longitude: -118.2437,
    },

    {name: "Houston, TX",
    latitude: 29.7604,
    longitude: -95.3698,
    },

    {name: "Miami, FL",
    latitude: 25.7617,
    longitude: -80.1918,
    },

    {name: "San Francisco, CA",
    latitude: 37.7749,
    longitude: -122.4194,
    },

    {name: "Seattle, WA",
    latitude: 47.6062,
    longitude: -122.3321,
    },

    {name: "Denver, CO",
    latitude: 39.7392,
    longitude: -104.9903,
    },

    {name: "Boston, MA",
    latitude: 42.3601,
    longitude: -71.0589,
    },

    {name: "Phoenix, AZ",
    latitude: 33.4484,
    longitude: -112.0740,
    },

    {name: "Philadelphia, PA",
    latitude: 39.9526,
    longitude: -75.1652,
    },

    {name: "Las Vegas, NV",
    latitude: 36.1699,
    longitude: -115.1398,
    },

    {name: "San Diego, CA",
    latitude: 32.7157,
    longitude: -117.1611,
    },

    {name: "Portland, OR",
    latitude: 45.5152,
    longitude: -122.6784,
    },

    {name: "Orlando, FL",
    latitude: 28.5383,
    longitude: -81.3792,
    },

    {name: "Dallas, TX",
    latitude: 32.7767,
    longitude: -96.7970,
    },

    {name: "Anchorage, AK",
    latitude: 61.2181,
    longitude: -149.9003,
    },

    {name: "Birmingham, AL",
    latitude: 33.5186,
    longitude: -86.8104,
    },

    {name: "Little Rock, AR",
    latitude: 34.7465,
    longitude: -92.2896,
    },

    {name: "Des Moines, IA",
    latitude: 41.5868,
    longitude: -93.6250,
    },

    {name: "Boise, ID",
    latitude: 43.6150,
    longitude: -116.2023,
    },

    {name: "Indianapolis, IN",
    latitude: 39.7684,
    longitude: -86.1581,
    },

    {name: "Topeka, KS",
    latitude: 39.0558,
    longitude: -95.6890,
    },

    {name: "Louisville, KY",
    latitude: 38.2527,
    longitude: -85.7585,
    },

    {name: "New Orleans, LA",
    latitude: 29.9511,
    longitude: -90.0715,
    },

    {name: "Portland, ME",
    latitude: 43.6591,
    longitude: -70.2568,
    },

    {name: "Baltimore, MD",
    latitude: 39.2904,
    longitude: -76.6122,
    },

    {name: "Minneapolis, MN",
    latitude: 44.9778,
    longitude: -93.2650,
    },

    {name: "Jackson, MS",
    latitude: 32.2988,
    longitude: -90.1848,
    },

    {name: "Kansas City, MO",
    latitude: 39.0997,
    longitude: -94.5786,
    },

    {name: "Billings, MT",
    latitude: 45.7833,
    longitude: -108.5007,
    },

    {name: "Omaha, NE",
    latitude: 41.2565,
    longitude: -95.9345,
    },

    {name: "Manchester, NH",
    latitude: 42.9956,
    longitude: -71.4548,
    },

    {name: "Newark, NJ",
    latitude: 40.7357,
    longitude: -74.1724,
    },

    {name: "Albuquerque, NM",
    latitude: 35.0844,
    longitude: -106.6504,
    },

    {name: "Charlotte, NC",
    latitude: 35.2271,
    longitude: -80.8431,
    },

    {name: "Fargo, ND",
    latitude: 46.8772,
    longitude: -96.7898,
    },

    {name: "Cleveland, OH",
    latitude: 41.4993,
    longitude: -81.6944,
    },

    {name: "Oklahoma City, OK",
    latitude: 35.4676,
    longitude: -97.5164,
    },

    {name: "Providence, RI",
    latitude: 41.8240,
    longitude: -71.4128,
    },

    {name: "Columbia, SC",
    latitude: 34.0007,
    longitude: -81.0348,
    },

    {name: "Sioux Falls, SD",
    latitude: 43.5446,
    longitude: -96.7311,
    },

    {name: "Nashville, TN",
    latitude: 36.1627,
    longitude: -86.7816,
    },

    {name: "Salt Lake City, UT",
    latitude: 40.7608,
    longitude: -111.8910,
    },

    {name: "Burlington, VT",
    latitude: 44.4759,
    longitude: -73.2121,
    },

    {name: "Richmond, VA",
    latitude: 37.5407,
    longitude: -77.4360,
    },

    {name: "Charleston, WV",
    latitude: 38.3498,
    longitude: -81.6326,
    },

    {name: "Madison, WI",
    latitude: 43.0731,
    longitude: -89.4012,
    },

    {name: "Cheyenne, WY",
    latitude: 41.1400,
    longitude: -104.8202,
    }

]

//Input
const stateOptions = document.getElementById("stateOptions");


window.onload = function(){
    // console.log("hi");
    populateTheDropDown();
    stateOptions.onchange = onChangeStateOptions;
    // useFetch();
}

function populateTheDropDown(){
    for(let i = 0; i < cities.length; i++){
        let newOption = document.createElement("option");
        newOption.value = cities[i].name;
        newOption.innerHTML = cities[i].name;

        stateOptions.appendChild(newOption);
    }
}

function onChangeStateOptions(){
    clearTable()
    let stateLatitude;
    let stateLongitude;
    for(let i = 0; i < cities.length; i++){
        if(cities[i].name == stateOptions.value){
            stateLatitude = cities[i].latitude;
            stateLongitude = cities[i].longitude;
            // console.log(stateLatitude);
            // console.log(stateLongitude);
        }
    }
    // console.log(stateOptions.value);
    let stationLookupUrl = `https://api.weather.gov/points/${stateLatitude},${stateLongitude}`;
    console.log(stationLookupUrl);

    doFirstRequest(stationLookupUrl);
    // doSecondRequest(forecastUrl);
}

function doFirstRequest(firstURL){

    fetch(firstURL)
    .then(response => response.json())
    .then(data => {
        let forecastUrl = data.properties.forecast
        // console.log(forecastUrl);
        doSecondRequest(forecastUrl);
    });

}

function doSecondRequest(secondURL){
    fetch(secondURL)
    .then(response => response.json())
    .then(data => {

        for(let i = 0; i <data.properties.periods.length; i++){
           let period = data.properties.periods[i];
           addPeriodRowToTable(period);
        }

        for(let period of data.properties.periods){
            addPeriodRowToTable(period);
        };


    })
}

//create the table row for a single period.
function addPeriodRowToTable(period){
    // const weatherTable = document.getElementById("weatherTable");
    // let row = weatherTable.insertRow(-1);

    const weatherTable = document.getElementById("weatherTable");
    let row = weatherTable.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = period.name;

    let cell2 = row.insertCell(1);
    cell2.innerHTML =`Temperature${period.temperature}, ${period.temperatureUnit},${period.windDirection},${period.windSpeed}`;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = period.shortForecast;


    console.log(period);
}

function clearTable(){
    const weatherTable = document.getElementById("weatherTable");

    weatherTable.innerHTML = '';

}

// function useFetch(){
//     const apiUrl = "https://api.weather.gov/gridpoints/TOP/31,80/forecast";

//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
// }