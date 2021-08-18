const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector('.delete');
const ntoesEl = document.querySelector('.notes');
const main = document.querySelector('.main');
const textArea = document.querySelector('.textarea');

editBtn.addEventListener('click', () => {

    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
})