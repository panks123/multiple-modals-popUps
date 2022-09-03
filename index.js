// Getting all the Open-modal buttons
const modalOpenBtns = document.querySelectorAll(".modal-open")

modalOpenBtns.forEach((btn)=>{
    btn.onclick = ()=>{
        const modal = btn.getAttribute('data-modal')
        document.getElementById(modal).style.display = "block";
    }
})

// Getting all the close-modal buttons

const modalCloseBtns = document.querySelectorAll(".mymodal-close")

modalCloseBtns.forEach((btn)=>{
    btn.onclick = ()=>{
        btn.closest(".mymodal").style.display = "none"
    }
})

window.onclick = (e)=>{
    if(e.target.className === 'mymodal'){
        e.target.style.display = 'none';
    }
}