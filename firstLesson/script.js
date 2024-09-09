const tasks = [
    { id: 1, title: "Clean the house", status: "ToDo" },
    { id: 2, title: "Grocery shopping", status: "ToDo" },
    { id: 3, title: "Finish project report", status: "ToDo" },
    { id: 4, title: "Walk the dog", status: "ToDo" },
    { id: 5, title: "Do the laundry", status: "ToDo" },
    { id: 6, title: "Prepare presentation", status: "ToDo" },
    { id: 7, title: "Water the plants", status: "ToDo" },
    { id: 8, title: "Call mom", status: "ToDo" },
    { id: 9, title: "Pay utility bills", status: "ToDo" },
    { id: 10, title: "Organize the closet", status: "ToDo" },
    { id: 11, title: "Study for the exam", status: "ToDo" },
    { id: 12, title: "Clean the fridge", status: "ToDo" },
    { id: 13, title: "Fix the sink", status: "ToDo" },
    { id: 14, title: "Send emails to clients", status: "ToDo" },
    { id: 15, title: "Update resume", status: "ToDo" },
    { id: 16, title: "Book dentist appointment", status: "ToDo" },
    { id: 17, title: "Plan vacation", status: "ToDo" },
    { id: 18, title: "Read a book", status: "ToDo" },
    { id: 19, title: "Prepare dinner", status: "ToDo" },
    { id: 20, title: "Take out the trash", status: "ToDo" },
    { id: 21, title: "Clean the windows", status: "ToDo" },
    { id: 22, title: "Workout", status: "ToDo" },
    { id: 23, title: "Buy a birthday gift", status: "ToDo" },
    { id: 24, title: "Refuel the car", status: "ToDo" },
    { id: 25, title: "Write a blog post", status: "ToDo" },
    { id: 26, title: "Schedule a meeting", status: "ToDo" },
    { id: 27, title: "Pick up dry cleaning", status: "ToDo" },
    { id: 28, title: "Bake a cake", status: "ToDo" },
    { id: 29, title: "Do the dishes", status: "ToDo" },
    { id: 30, title: "Meditate for 15 minutes", status: "ToDo" }
  ];



localStorage.setItem('tasks', JSON.stringify(tasks))

const allTasks = JSON.parse(localStorage.getItem('tasks'))

  
const mainDiv = document.querySelector(".main-container")
const table = document.querySelector(".Table")
const submit = document.querySelector(".submitBtn")
const input = document.querySelector(".inputText");


const filterTasksByInput = (e) => {
    const currentText = e.target.value.toLowerCase();

    currentTasksList = tasks.filter((task) => {
        return task.title.toLowerCase().includes(currentText);
    });

    AddToTheTable(currentTasksList);

}


// filterTasksByInput
function AddToTheTable(currentTasks) {
    if (currentTasks != null) {
        table.innerHTML = ""
        currentTasks.forEach((task) => {
            const trTable = document.createElement("tr");
            const tdTableID = document.createElement("td");
            const tdTableToDo = document.createElement("td");
            const tdTableStatus = document.createElement("td");
            const tdTableAction = document.createElement("td");
            // tdTableAction.style.display = "flex"
            // tdTableAction.style.justifyContent = "space-between"
            const Updatbtn = document.createElement("Button");
            Updatbtn.setAttribute("id", task.id)
            Updatbtn.addEventListener('click', ()=> {changeToDO(Updatbtn.id)})
            Updatbtn.classList = "bntToDo"
            Updatbtn.innerText = " add ToDo"

            const deletebtn = document.createElement("button");
            deletebtn.setAttribute("id", task.id)
            // deletebtn.classList = "bntToDo"
            deletebtn.innerText = " Delete ToDo"
            deletebtn.addEventListener('click', ()=> {DeleteToDo(deletebtn.id)})
            // deletebtn.style.margin

            
            const statusUpdatebtn = document.createElement("button");
            statusUpdatebtn.setAttribute("id", task.id)
            statusUpdatebtn.innerText = " add ToDo status"
            statusUpdatebtn.addEventListener('click', ()=> {changeToDoStatus(statusUpdatebtn.id)})


            
            
            tdTableID.innerText = task.id
            tdTableToDo.innerText = task.title
            tdTableStatus.innerText = task.status
            tdTableAction.appendChild(Updatbtn )
            tdTableAction.appendChild(statusUpdatebtn )
            tdTableAction.appendChild(deletebtn)
            
            trTable.appendChild(tdTableID)
            trTable.appendChild(tdTableToDo)
            trTable.appendChild(tdTableStatus)
            trTable.appendChild(tdTableAction)
            
            table.appendChild(trTable)
        });
    }
    else{
        
        console.log("List is Empty")
    }
    
}

submit.addEventListener("click", filterTasksByInput)
    
    


function changeToDO(id, e) {
    const todo = tasks.find((t)=> t.id == id 
    )
    const ToDoInput = document.getElementById("inputText").value
    if(ToDoInput.length > 1 ){
        todo.title = ToDoInput
        filterTasksByInput(e)
    }
}

// a.addEventListener("click", changeToDo(id))

function changeToDoStatus(id) {
    const todo = tasks.find((t)=> t.id == id)
    if(todo.status == "ToDo") {
        todo.status == "Done"
        const index = tasks.indexOf(todo)
        
        console.log(tasks[index])
        // style.
        // todo.style.color = "red";
    }
    else {
        return    
    }
    // filterTasksByInput(e)

}

function  DeleteToDo(id) {
    const todo = tasks.find((t)=> t.id == id)
    const index = tasks.indexOf(todo)
    tasks.splice(index, 1)
    // filterTasksByInput(e)

}

DeleteToDo(2)