let input = document.getElementById("input");
let numoflist = document.querySelector(".unordered");

function addtask() {
    if (input.value === '') {
        alert(" You must Write Someting !! ");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        numoflist.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input.value = ''
    savedata()
}

numoflist.addEventListener("click",(a)=>{
    if(a.target.tagName === "LI"){
        a.target.classList.toggle("list");
    savedata()

    }
    else if(a.target.tagName === "SPAN"){
        a.target.parentElement.remove();
    savedata()

    }
});

function savedata(){
    localStorage.setItem("data", numoflist.innerHTML);
}


function showtask(){
    numoflist.innerHTML = localStorage.getItem("data");
}

showtask();
