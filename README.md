# 🛠️ Refael Designs Website

[**האתר באוויר ↗**](https://refael-d.co.il)

This is a business website developed for **Refael Designs**, a professional carpentry and furniture business.  
The website showcases the company's work, includes a gallery, contact form, and is optimized for SEO and accessibility.

---

## 🌐 Website Overview

- **Homepage** with key service highlights
- **Gallery page** featuring photos of completed carpentry projects
- **Terms page** with accessibility information and policies
- **Contact form** integrated with Formspree for direct client inquiries
- **Mobile-friendly** and fully responsive design

---

## 🧱 Tech Stack

| Area            | Tech Used                               |
|-----------------|-----------------------------------------|
| Structure       | HTML5                                   |
| Styling         | CSS3    |
| Interactivity   | JavaScript                              |
| Backend         | Python with Flask                       |
| Hosting         | AWS EC2                                 |
| Domain & DNS    | Route 53 (AWS)                          |
| Reverse Proxy   | Nginx                                   |
| SSL             | Let's Encrypt                           |
| Forms           | Formspree API                           |

---

## 📂 Project Structure
```
Refael-Design-Website/
│
├── static/
│ ├── css/ → Custom stylesheets
│ ├── js/ → JavaScript functions
│ └── imgs/ → Website and gallery images
│
├── templates/
│ ├── index.html → Homepage
│ ├── gallery.html → Gallery section
│ └── terms.html → Terms & accessibility info
│
├── server.py → Flask server for routing and form handling
├── .gitignore
└── .env → Environment variables (e.g., Formspree URL)
```
---

## 📷 Example Screenshots
![Home-Page Screenshot](static/imgs/website-v2%20screenshots/homepage.png)
![Home-Page Gallery Screenshot](static/imgs/website-v2%20screenshots/home-gallery.png)
![Gallery-Page Screenshot](static/imgs/website-v2%20screenshots/gallery.png)
![Contact-Form Screenshot](static/imgs/website-v2%20screenshots/contact.png)
