"use strict";
function totalTasks () {
    let userMessage = $("#task");
    let btnAdd = $(".btn_add");
    let boxToDo = $("#todo");
    let boxProgress = $("#progress");
    let boxDone = $("#done");

    const getRandomColor = function(){
        let colorArray = ["red","gray","green","gold"];
        let color = colorArray[Math.floor(Math.random()*(colorArray.length+1))];
        return color;
    }

    btnAdd.on("click", ()=> {
        let taskUser = $("<div>");
        taskUser.addClass("task_inner");

        let deleteBtn = $('<button class="btn_delete">');
        let imgDeleteBtn = $('<img class="btn_icon" src="upload/delete.svg" alt="icon">');
        deleteBtn.append(imgDeleteBtn);
    
        let transferBtn = $('<button class="btn_transfer"></button>');
        transferBtn.html("In progress");

        let message = $(`<p class="task_text">${userMessage.val()}</p>`);

        taskUser.append(message,deleteBtn,transferBtn);
        boxToDo.append(taskUser);

        deleteBtn.on("click", ()=>{
            taskUser.remove();
        })

        let counter = 1;
        transferBtn.on("click", ()=>{
            if(counter){
                boxProgress.append(taskUser);
                transferBtn.html("Done").css("color",getRandomColor());
                message.css("color",getRandomColor());
                counter=0;
            }
            else {
                boxDone.append(taskUser);
                transferBtn.html("Delete");
                transferBtn.on("click",()=>{
                    taskUser.remove();
                })
            }
        })
    })
}

totalTasks ()


