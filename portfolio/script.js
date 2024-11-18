
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

window.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const skillLevel = skill.classList.contains('html') ? '80%' :
                           skill.classList.contains('css') ? '70%' :
                           skill.classList.contains('js') ? '60%' : '0';
        skill.style.width = skillLevel;
    });
});

// Modal para imagens
const images = document.querySelectorAll('img');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.getElementById('close-modal');

console.log(images)

// Expande a imagem ao clicar
images.forEach(image => {
    image.addEventListener('click', () => {
        console.log("cliquei na imagem!")
        modalImage.src = image.src; // Define a imagem no modal
        modal.classList.add('visible'); // Exibe o modal
    });
});

// Fecha o modal ao clicar no botão "X"
closeModalButton.addEventListener('click', () => {
    modal.classList.remove('visible');
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('visible');
    }
});
