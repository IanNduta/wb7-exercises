"use strict";
//inputs
const userId = document.getElementById("userId");

//button
const getResultsButton = document.getElementById("getResultsButton");

//outputs
const resultsOutput = document.getElementById("resultsOutput");
const userIdResults = document.getElementById("userIdResults");
const idResults = document.getElementById("idResults");

//api
const apiUrl = "https://jsonplaceholder.typicode.com/todos/"

window.onload = function(){
    console.log("hi");
    getResultsButton.onclick = onClickedGetResultsButton;
}

function onClickedGetResultsButton(){
    let getUserId = userId.value;
    // console.log(getUserId);
    let todoApiUrl = apiUrl + getUserId;
    // console.log(todoApiUrl);



    fetch(todoApiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        console.log(data.title);

        let p = document.createElement("p")
        p.innerHTML = data.title;
        // 
        // p.innerHTML = data.completed;
        resultsOutput.appendChild(p);

        let pId = document.createElement("p")
        pId.innerHTML = data.id;
        idResults.appendChild(pId);

        let pUserId = document.createElement("p")
        pUserId.innerHTML = data.userId; 
        userIdResults.append(pUserId);






        // for(let i = 0; i < data.length; i++){
        //     let p = document.createElement("p")
        //     p.innerHTML = date.title[i]

        //     resultsOutput.appendChild(p);
            
        // }

    })
}
