const addToDoButton = document.getElementById("addToDo")
const toDoContainer = document.getElementById("toDoContainer")
const inputText = document.getElementById("inputText")
const clearToDo = document.getElementById("clearToDo")

addToDoButton.addEventListener("click",function(){

    const paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-syling")
    toDoContainer.appendChild(paragraph)
    paragraph.innerHTML=inputText.value
    inputText.value=""

    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through"
    })

    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph)
    })

    clearToDo.addEventListener("click",function(){
        paragraph.remove()
    })
    
})






