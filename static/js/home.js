/* -----Hero Section Arrows----- */

const slides = document.querySelectorAll('.hero-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// next slide 
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// prev slide 
prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

/* -----Gallery Modal----- */

// Clears any active text selection (iPadOS Chrome/Safari modal fix) by removing all selection ranges
// so the page doesn’t appear highlighted after opening/closing the modal.
function clearSelection() {
    const sel = window.getSelection ? window.getSelection() : null;
    if (sel && sel.removeAllRanges) sel.removeAllRanges();
}

// open modal
function openModal(element) {
    const title = element.dataset.title;
    const description = element.dataset.description;
    const images = element.dataset.imgs.split(',');

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;

    const modalImagesContainer = document.getElementById('modal-images');
    modalImagesContainer.innerHTML = '';

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src.trim();
        img.classList.add('modal-image');
        modalImagesContainer.appendChild(img);
    });

    document.getElementById('project-modal').style.display = 'block';
    document.getElementById('project-modal').scrollTop = 0;
    requestAnimationFrame(clearSelection);
}

// close modal
function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
    requestAnimationFrame(clearSelection);
}

const modal = document.getElementById('project-modal');
const content = document.querySelector('.modal-content');

if (modal && content) {
   modal.addEventListener('click', function (event) {
     if (!content.contains(event.target)) {
       closeModal();
    }
  });
}
