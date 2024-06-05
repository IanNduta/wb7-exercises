"use strict";

console.log("hi");

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

let category;

window.onload = function () {
    let urlParams = new URLSearchParams(location.search)

    // for(let urlParams of urlParams){
    //     console.log(urlParams);
    // }

    if(urlParams.has("category") === true){
        category = urlParams.get("category");
        loadCategoryData();
    }

    console.log(category);

    console.log(urlParams);
    const getResultsButton = document.getElementById("getResultsButton");

}

function loadCategoryData() {
    const categoryInput = document.getElementById("categoryInput");
    const categoryHeader = document.getElementById("categoryHeader");

    categoryHeader.innerHTML = "Meal in category" + category;

    let actualUrl = apiBaseUrl + categoryInput.value;

    console.log("URL: " + actualUrl);

    fetch(actualUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        for (let meal of data.meals) {
            let p = document.createElement("p");
            p.innerHTML = meal.strMeal;

            resultsOutput.appendChild(p);
        }
    })
}