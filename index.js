
function addNewTask(){
    tasks = document.getElementById("tasks")
    tasks.appendChild(createTask("Sample Heading","Sample Body"))
}
function createTask(heading,content){
    const task = createHtmlElement("div")
    task.className = "task"
    
    const task_heading = createHtmlElement("div")
    task_heading.className = "task-heading"
    
    const task_heading_content = createHtmlElement("span")
    task_heading_content.className = "task-heading-content"
    task_heading_content.innerHTML = heading

    const more_options_heading = createHtmlElement("span")
    more_options_heading.classList.add("material-icons","more-options-heading")

    const task_content = createHtmlElement("div")
    task_content.className = "task-content"
    task_content.innerHTML = content

    task_heading.appendChild(task_heading_content)
    task_heading.appendChild(more_options_heading)

    task.appendChild(task_heading)
    task.appendChild(task_content)
    
    return task
}

function createHtmlElement(elementType="div"){
    return document.createElement(elementType)
}

const addIcon = document.getElementById("addIcon")

addIcon.addEventListener("click",addNewTask)