const todoInput = document.querySelector('.input-vezife')
const addTodoBtn = document.querySelector('.btn-vezife-elaveet')

const todoContainer = document.querySelector('.vezife-siyahisi')

addTodoBtn.addEventListener('click', addToDo )
todoContainer.addEventListener('click', deleteAndCompleteToDo)



function deleteAndCompleteToDo(e){
    const kliklenenElement = e.target

    if(kliklenenElement.classList.contains('vezife-btn-tamamlandi')){
        kliklenenElement.parentElement.classList.toggle('vezife-tamamlandi')
    }
    if(kliklenenElement.classList.contains('vezife-btn-sil')){
        kliklenenElement.parentElement.classList.toggle('delete')
    }
}

function addToDo(e){
    e.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('vezife-item')

    const todoLi = document.createElement('li')
    todoLi.classList.add('vezife-tanitim')
    todoLi.innerHTML = todoInput.value

    todoDiv.appendChild(todoLi)

    const checkBtn = document.createElement('button')
    checkBtn.classList.add('vezife-btn')
    checkBtn.classList.add('vezife-btn-tamamlandi')
    checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
    todoDiv.appendChild(checkBtn)

    const trashBtn = document.createElement('button')
    trashBtn.classList.add('vezife-btn')
    trashBtn.classList.add('vezife-btn-sil')
    trashBtn.innerHTML ='<i class="fa fa-trash" aria-hidden="true"></i>'
    todoDiv.appendChild(trashBtn)

    todoContainer.appendChild(todoDiv)
    todoInput.value =''
}

