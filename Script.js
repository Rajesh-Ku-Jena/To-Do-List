const inputTask= document.getElementById("input-box");
const listItem= document.getElementById("list-container");

function addTask(){
    if(inputTask.value === ''){
        alert("You must write something");
    }else{
        // Add item
        let li= document.createElement("li");
        li.innerHTML = inputTask.value;
        listItem.appendChild(li);

        // X icon to delete the task
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputTask.value= "";
    saveData();
}



listItem.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


// Save the data in Local Browser

function saveData(){
    localStorage.setItem("data", listItem.innerHTML);
}

function showTask(){
    listItem.innerHTML= localStorage.getItem("data");
}
showTask();