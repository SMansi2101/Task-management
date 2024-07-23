const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === '')
    {
        alert("Please Enter note!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    savenote();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savenote();
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savenote();
    }
}, false);

function savenote(){
    localStorage.setItem("note",listContainer.innerHTML);
}
function shownote(){
    listContainer.innerHTML = localStorage.getItem("note");
}
shownote();