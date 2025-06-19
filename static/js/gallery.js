/* -----Gallery Modal----- */

let currentImageIndex = 0;
let modalImages = [];

const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');

document.querySelectorAll('.gallery-grid img').forEach((img, index) => {
  modalImages.push(img.src);
  img.addEventListener('click', () => openModal(index));
});

function openModal(index) {
  currentImageIndex = index;
  modalImage.src = modalImages[currentImageIndex];
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function navigateModal(direction) {
  currentImageIndex = (currentImageIndex + direction + modalImages.length) % modalImages.length;
  modalImage.src = modalImages[currentImageIndex];
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
