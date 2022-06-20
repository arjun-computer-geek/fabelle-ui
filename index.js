// ***************************************************************
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
// ******************************************************************

// *********************************************************************
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

// **************************************************************************


// ****************************************************************************
// js for ratings

const ratingStars = document.querySelectorAll(".example-rating-form .rating-star-input");
const ratingStarsForm = document.querySelector(".example-rating-form");
const ratingExampleShowRating = document.querySelector(".rating-example-number-show");

ratingStars.forEach((star,id)=>{
    star.addEventListener("change", ()=>checkAllTheBelowStars(id));
})

function checkAllTheBelowStars (idx) {    
    if(ratingStars[idx].checked){
        for(let j=idx-1; j>=0; j--){
            ratingStars[j].checked = true;
        }
    }else{
        for(let j=idx+1; j<ratingStars.length ; j++){
            ratingStars[j].checked = false;
        }
    }
}

ratingStarsForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let sum = 0;
    ratingStars.forEach((star)=>{  if(star.checked) sum += 1 })
    ratingExampleShowRating.innerText=`You have submitted ${sum} rating`;
})

// ***************************************************************************

// ******************************************************************************
// js for toast

const toastExample = document.querySelector("#toast-example-success");
const btnToShowToast = document.querySelector(".show-toast-example-btn");
const btnToCloseToast = document.querySelector("#toast-example-success-btn");

let timerIdForToast;
btnToShowToast.addEventListener("click", ()=>{
    toastExample.style.display = "block";
    timerIdForToast = setTimeout(()=>{
        toastExample.style.display = "none";  
    },2000)
})
btnToCloseToast.addEventListener("click", ()=>{
    clearTimeout(timerIdForToast);
    toastExample.style.display = "none"; 
})

// **************************************************************************************