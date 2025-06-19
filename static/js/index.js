/* -----Navbar----- */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropDown = document.getElementById('galleryDropdown');
const dropNav = document.querySelector('.dropdown-menu');

// open navbar
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show'); 
  menuToggle.classList.toggle('open'); // X
});

// close navbar
window.addEventListener('click', (event) => {
  if(!menuToggle.contains(event.target)) {
    navLinks.classList.remove('show');
    menuToggle.classList.remove('open');
  }
});

// open dropdown menu
dropDown.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  dropNav.classList.toggle('show');
});

// close dropdown menu
window.addEventListener('click', (event) => {
  if(dropNav.classList.contains('show')) {
    dropNav.classList.remove('show');
  }
});

/* -----Back to Top Button----- */

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("show");
  }

  else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

/* -----Contact Form----- */

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();  

    let formData = new FormData(this);
    let jsonObject = {};
    formData.forEach((value, key) => jsonObject[key] = value);

    try {
        let response = await fetch('https://refael-d.co.il/submit-form', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(jsonObject)
        });

        if (response.ok) {
            document.getElementById('submitSuccessMessage').classList.remove('hidden');
            document.getElementById('submitErrorMessage').classList.add('hidden');
        } 
        
        else {
            document.getElementById('submitErrorMessage').classList.remove('hidden');
            document.getElementById('submitSuccessMessage').classList.add('hidden');
        }
    } 
    
    // network errors
    catch (error) {
        console.error("שגיאה בשליחת הנתונים:", error);
        document.getElementById('submitErrorMessage').classList.remove('hidden');
        document.getElementById('submitSuccessMessage').classList.add('hidden');
        document.getElementById('submitErrorMessage').innerText = "השרת אינו זמין כרגע. נסה שוב מאוחר יותר.";
    }
});
