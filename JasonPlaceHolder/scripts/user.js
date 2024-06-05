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
            let row = table.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            cell1.innerHTML = data[i].name;
            cell2.innerHTML = data[i].username;
        }
    })
}