document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please enter a task");
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
        `;
        let currentTasks = document.querySelectorAll(".delete");
        for(let i = 0; i < currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                // Remove the parent task when the delete button is clicked
                currentTasks[i].parentNode.remove();
            }
        }
    }
}
