const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", function(e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value
  const taskLi = document.createElement("li")
  taskLi.innerText = newTask
  taskList.appendChild(taskLi)
  taskForm.reset()
})
