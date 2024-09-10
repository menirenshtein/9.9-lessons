
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

// יצירת משתנים לתפיסת אלמנטים

const RTable = tasks;
const mainDiv = document.querySelector(".main-container")
const table = document.querySelector(".Table")
const submit = document.querySelector(".submitBtn")
const input = document.querySelector(".inputText");

localStorage.setItem('RTable', JSON.stringify(RTable))

const allTasks = JSON.parse(localStorage.getItem('RTable'))
// console.log(allTasks)



function getTaskByDis(dis) {
    const allTasks = JSON.parse(localStorage.getItem('RTable'));
    allTasks.forEach(task => {
        if(task.title == dis.value){
            console.log(task)
            return task
        }
        else 
        return null
    });
}

function createRow() {
    const table = document.getElementById("")

    const trTable = document.createElement("tr");

    // Create table cells
    const tdTableID = document.createElement("td");
    const tdTableToDo = document.createElement("td");
    const tdTableStatus = document.createElement("td");
    const tdTableAction = document.createElement("td");

    // Create and configure Update button
    const updateBtn = document.createElement("button");
    updateBtn.setAttribute("id", task.id);
    updateBtn.addEventListener('click', () => { changeToDO(updateBtn.id) });
    updateBtn.classList = "btnToDo";
    updateBtn.innerText = "Update ToDo";

    // Create and configure Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", task.id);
    deleteBtn.innerText = "Delete ToDo";
    deleteBtn.addEventListener('click', () => { DeleteToDo(deleteBtn.id) });

    // Create and configure Status Update button
    const statusUpdateBtn = document.createElement("button");
    statusUpdateBtn.setAttribute("id", task.id);
    statusUpdateBtn.innerText = "Update Status";
    statusUpdateBtn.addEventListener('click', () => { changeToDoStatus(statusUpdateBtn.id) });

    // Append buttons to action cell
    tdTableAction.style.display = "flex";
    tdTableAction.style.justifyContent = "space-between";
    tdTableAction.appendChild(updateBtn);
    tdTableAction.appendChild(statusUpdateBtn);
    tdTableAction.appendChild(deleteBtn);
    
    // Append cells to row

    trTable.appendChild(tdTableID);
    trTable.appendChild(tdTableToDo);
    trTable.appendChild(tdTableStatus);
    trTable.appendChild(tdTableAction);

    // Append row to table
    table.appendChild(trTable);

}


getTaskByDis(input)

// פונקציית פילטור למשימות
    const filterTasksByInput = (e) => {
    const currentText = e.target.value.toLowerCase();

    currentTasksList = tasks.filter((task) => {
        return task.title.toLowerCase().includes(currentText);
    });

    AddToTheTable(currentTasksList);

}

// פונקצית הוספה לטבלה
function AddToTheTable(currentTasks) {
    if (currentTasks != null) {
        table.innerHTML = "";  // Clear the table before adding new rows
        currentTasks.forEach((task) => {
           
            // Set cell values
            tdTableID.innerText = task.id;
            tdTableToDo.innerText = task.title;
            tdTableStatus.innerText = task.status;

           
        }
    );
    } 
    else 
    {
        
        console.log("List is empty");
    }
}
    

// filterTasksByInput
// function AddToTheTable(currentTasks) {
//     if (currentTasks != null) {
//         table.innerHTML = ""
//         currentTasks.forEach((task) => {
//             const trTable = document.createElement("tr");
//             const tdTableID = document.createElement("td");
//             const tdTableToDo = document.createElement("td");
//             const tdTableStatus = document.createElement("td");
//             const tdTableAction = document.createElement("td");
//             // tdTableAction.style.display = "flex"
//             // tdTableAction.style.justifyContent = "space-between"
//             const Updatbtn = document.createElement("Button");
//             Updatbtn.setAttribute("id", task.id)
//             Updatbtn.addEventListener('click', ()=> {changeToDO(Updatbtn.id)})
//             Updatbtn.classList = "bntToDo"
//             Updatbtn.innerText = " add ToDo"

//             const deletebtn = document.createElement("button");
//             deletebtn.setAttribute("id", task.id)
//             // deletebtn.classList = "bntToDo"
//             deletebtn.innerText = " Delete ToDo"
//             deletebtn.addEventListener('click', ()=> {DeleteToDo(deletebtn.id)})
//             // deletebtn.style.margin

            
//             const statusUpdatebtn = document.createElement("button");
//             statusUpdatebtn.setAttribute("id", task.id)
//             statusUpdatebtn.innerText = " add ToDo status"
//             statusUpdatebtn.addEventListener('click', ()=> {changeToDoStatus(statusUpdatebtn.id)})


            
            
//             tdTableID.innerText = task.id
//             tdTableToDo.innerText = task.title
//             tdTableStatus.innerText = task.status
//             tdTableAction.appendChild(Updatbtn )
//             tdTableAction.appendChild(statusUpdatebtn )
//             tdTableAction.appendChild(deletebtn)
            
//             trTable.appendChild(tdTableID)
//             trTable.appendChild(tdTableToDo)
//             trTable.appendChild(tdTableStatus)
//             trTable.appendChild(tdTableAction)
            
//             table.appendChild(trTable)
//         });
//     }
//     else{
        
//         console.log("List is Empty")
//     }
    
// }

// הוספת ה אירוע
submit.addEventListener("click", filterTasksByInput)
    
    

// שינוי המשימה
function changeToDO(id, e) {
    const todo = tasks.find((t)=> t.id == id)
    const ToDoInput = document.getElementById("inputText").value
    if(ToDoInput.length > 1){
        todo.title = ToDoInput
        // filterTasksByInput(e)
    }
}

// a.addEventListener("click", changeToDo(id))
 // שינוי הסטטוס של המשימה
function changeToDoStatus(id) {
    const todo = tasks.find((t)=> t.id == id)
    if(todo.status == "ToDo") {
        todo.status == "Done"
        // style.
        // todo.style.color = "red";
    }
    else {
        return    
    }

}
 // מחיקת המשימה
function  DeleteToDo(id) {
    const todo = tasks.find((t)=> t.id == id)
    const index = tasks.indexOf(todo)
    tasks.splice(index, 1)

}

// DeleteToDo(2)

