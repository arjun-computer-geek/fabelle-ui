const dropdownBtn = document.querySelector("#dropdown");

var isActive = false;
dropdownBtn.addEventListener("click", () => {
    if(isActive){
        dropdownBtn.parentElement.style.height="40vh";
        dropdownBtn.parentElement.style.display="grid";
        dropdownBtn.parentElement.style.overflowY="auto";
    }
    else{
        dropdownBtn.parentElement.style.height="4rem"; 
        dropdownBtn.parentElement.style.display="block";
        dropdownBtn.parentElement.style.overflowY="hidden";
    }
    isActive = !isActive;

    console.log(isActive)
})
