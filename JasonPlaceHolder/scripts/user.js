"use strict";

const userApi = "https://jsonplaceholder.typicode.com/users";

window.onload = function(){
    populateTable();
}

function populateTable(){

    // let userInput = userApi + userId.value;
    console.log(userApi);

    fetch(userApi)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for(let i = 0; i < data.length; i++){
            creatingTheTable(data[i])
        }
    })
}

function creatingTheTable(apiArray){
    const nationalParkTable = document.getElementById("nationalParkTable");
    let row = nationalParkTable.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = apiArray.name;

    let cell2 = row.insertCell(1);
    cell2.innerHTML = apiArray.username;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = apiArray.email;

    let cell4 = row.insertCell(3);
    cell4.innerHTML = apiArray.phone;

    let cell5 = row.insertCell(4);
    cell5.innerHTML = apiArray.website;

    let cell6 = row.insertCell(5);
    cell6.innerHTML = apiArray.username;
}