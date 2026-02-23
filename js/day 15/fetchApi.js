async function getDataa() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log(data);
    loadData(data)
    const imgData = document.getElementById("img")
    imgData.src = "https://picsum.photos/id/237/200/300" 

    }catch(err){
        console.log("data is dead", err);
        
    }
    
}

getDataa()

function loadData(data){
let usserId = document.getElementById("usserId")
let id = document.getElementById("Id")
let title = document.getElementById("title")
let complate = document.getElementById("completed")
usserId.innerHTML = data.userId;
id.innerHTML = data.id;
title.innerHTML = data.title;
complate.innerHTML = data.completed;
}