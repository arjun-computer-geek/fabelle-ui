const header = document.querySelector('header')
document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 100){
        header.style.boxShadow = "0px 15px 10px -15px #ffff";
        header.style.backgroundColor = "#E7E9F0"
    }else{
        header.style.boxShadow = "none";
        header.style.backgroundColor = "transparent";
    }
})