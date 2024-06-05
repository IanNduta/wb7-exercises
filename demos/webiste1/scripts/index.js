"use stict";

const hello = document.getElementById("hello");
const apiUrlListCategories = https


const categoriesRow = document.getElementById("categoriesRow")

window.onload = function(){
    


    fetch(apiUrlListCategories)
    .then(response => response.json)
    .then(data => {
        console.log(data);
        for(let category of data.categories)
            createCategoryDiv(category)
    })
}



function createCategoryDiv(category){
    let div = document.createElement("div")
    div.className = "col";
    categoriesRow.appendChild(div);

    let a = document.createElement("a");
    a.href = "mealsInCategory.html?category="+ category.strCategory;
    a.innerHTML = category.strCategory;

    div.appendChild(a);
    console.log(category.strCategory);
}