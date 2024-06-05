"use strict";

console.log("hi");

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

window.onload = function () {
    const getResultsButton = document.getElementById("getResultsButton");
    getResultsButton.onclick = onGetResultsButtonClick;
}

function onGetResultsButtonClick() {
    const categoryInput = document.getElementById("categoryInput");
    const resultsOutput = document.getElementById("resultsOutput");

    let actualUrl = apiBaseUrl + categoryInput.value;

    console.log("URL: " + actualUrl);

    fetch(actualUrl)
    .then(doWhenRespnseBegins)
}

function doWhenRespnseBegins(response){
    response.json().then(processResultDataFromApi);
}

function processResultDataFromApi(data){
    console.log(data);
    doStuffWithArrayOfMeals(data.meals)
}

function doStuffWithArrayOfMeals(meals){
    for(let meal of meals){
        doStufWithMeal(meals);
    }
}

function doStufWithMeal(meal){
    let p = document.createElement("p");
    p.innerHTML = meal.strMeal;
    resultsOutput.appendChild(p);
}