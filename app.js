/*=== PROJECT 1 - VOLUNTEER MOMMY ===*/

//Get the modal
const modal = document.getElementById("volunteerModal");

//Button to open modal
const btn = document.getElementById("volunteerBtn");

//Button <span> element to close modal
const span = document.getElementsByClassName("volunteerClose")[0];

//Button to cancel out of modal
const cancel = document.getElementById("cancel-btn-volunteer");

//Event Listeners
cancel.onclick = function () {
    modal.style.display = "none";
}

//On click...open modal
btn.onclick = function () {
    modal.style.display = "block";
}

//On click of <span> (x) close modal
span.onclick = function () {
    modal.style.display = "none";
}

//On click....outside of modal...close window
window.onclick = function (event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}


/*=== PROJECT 2 PACK IT ===*/
const packModal = document.getElementById('packModal');
const packBtn = document.getElementById('packBtn');
const packSpan = document.getElementsByClassName('packClose')[0];
const packCancel = document.getElementById('cancel-btn-pack');

packCancel.onclick = function () {
    packModal.style.display = "none"
}
packBtn.onclick = function () {
    packModal.style.display = "block";
}
packSpan.onclick = function () {
    packModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === packModal) {
        packModal.style.display = "none";
    }
}

/*=== PROJECT 3 MOMENTUM ===*/
const momModal = document.getElementById('momModal');
const momBtn = document.getElementById('momBtn');
const momSpan = document.getElementsByClassName('momClose')[0];
const momCancel = document.getElementById('cancel-btn-mom');

momCancel.onclick = function () {
    momModal.style.display = "none"
}
momBtn.onclick = function () {
    momModal.style.display = "block";
}
momSpan.onclick = function () {
    momModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === momModal) {
        momModal.style.display = "none";
    }
}
        
/*=== PROJECT 4 RECIPE ===*/
const recipeModal = document.getElementById('recipeModal');
const recipeBtn = document.getElementById('recipeBtn');
const recipeSpan = document.getElementsByClassName('recipeClose')[0];
const recipeCancel = document.getElementById('cancel-btn-recipe');

recipeCancel.onclick = function () {
    recipeModal.style.display = "none"
}
recipeBtn.onclick = function () {
    recipeModal.style.display = "block";
}
recipeSpan.onclick = function () {
    recipeModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === recipeModal) {
        recipeModal.style.display = "none";
    }
}
        

/*=== PROJECT 5 TODO LIST ===*/
const todoModal = document.getElementById('todoModal');
const todoBtn = document.getElementById('todoBtn');
const todoSpan = document.getElementsByClassName('todoClose')[0];
const todoCancel = document.getElementById('cancel-btn-todo');

todoCancel.onclick = function () {
    todoModal.style.display = "none"
}
todoBtn.onclick = function () {
    todoModal.style.display = "block";
}
todoSpan.onclick = function () {
    todoModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === todoModal) {
        todoModal.style.display = "none";
    }
}


/*=== PROJECT 6 SOCKET IO TODO LIST ===*/
const socketModal = document.getElementById('socketModal');
const socketBtn = document.getElementById('socketBtn');
const socketSpan = document.getElementsByClassName('socketClose')[0];
const socketCancel = document.getElementById('cancel-btn-socket');

socketCancel.onclick = function () {
    socketModal.style.display = "none"
}
socketBtn.onclick = function () {
    socketModal.style.display = "block";
}
socketSpan.onclick = function () {
    socketModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === socketModal) {
        socketModal.style.display = "none";
    }
}
      
/*=== PROJECT 7 DIRECTORY ===*/
const directoryModal = document.getElementById('directoryModal');
const directoryBtn = document.getElementById('directoryBtn');
const directorySpan = document.getElementsByClassName('directoryClose')[0];
const directoryCancel = document.getElementById('cancel-btn-directory');

directoryCancel.onclick = function () {
    directoryModal.style.display = "none"
}
directoryBtn.onclick = function () {
    directoryModal.style.display = "block";
}
directorySpan.onclick = function () {
    directoryModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === directoryModal) {
        directoryModal.style.display = "none";
    }
}

/*=== PROJECT 8 FANCY GRID ===*/
const fancyModal = document.getElementById('fancyModal');
const fancyBtn = document.getElementById('fancyBtn');
const fancySpan = document.getElementsByClassName('fancyClose')[0];
const fancyCancel = document.getElementById('cancel-btn-fancy');

fancyCancel.onclick = function () {
    fancyModal.style.display = "none"
}
fancyBtn.onclick = function () {
    fancyModal.style.display = "block";
}
fancySpan.onclick = function () {
    fancyModal.style.display = "none";
}
window.onclick = function (event) {
    if(event.target === fancyModal) {
        fancyModal.style.display = "none";
    }
}