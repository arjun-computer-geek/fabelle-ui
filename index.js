
const header = document.querySelector('header')
document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 20){
        header.style.boxShadow = "0px 15px 10px -15px #ffff";
        header.style.backgroundColor = "#E7E9F0"
    }else{
        header.style.boxShadow = "none";
        header.style.backgroundColor = "transparent";
    }
})

// script for modal
const showModalBtn = document.querySelector("#show-modal");
const modalContainer = document.querySelector("#modal-example");
const modalCloseBtn = document.querySelector("#modal-close-btn");

// handling show modal
showModalBtn.addEventListener("click", () => {
modalContainer.style.display = "flex"
})

// handling close modal
modalCloseBtn.addEventListener("click", () => {
    modalContainer.style.display = "none"
})

// handling when click outside of moal
window.onclick = (event) =>{
    if (event.target.id === 'modal-example') {
      modalContainer.style.display = "none";
    }
  }