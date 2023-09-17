const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fas fa-xmark'
    : 'fas fa-bars'
}

function startProgress() {
    const progressCircle = document.querySelector(".progress-circle");
    const progressText = document.querySelector(".progress-text");

    let progress = 0;
    const targetProgress = 75; // Set your desired target progress percentage here.

    const interval = setInterval(() => {
        progress += 1;
        progressCircle.style.clipPath = `conic-gradient(#3498db ${progress}%, #3498db 0%)`;
        progressText.textContent = `${progress}%`;

        if (progress >= targetProgress) {
            clearInterval(interval);
        }
    }, 20);
}

