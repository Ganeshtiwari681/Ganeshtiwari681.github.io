# Portfolio Structure Guide

## 📁 File Structure

```
portfolio/
├── index.html              # Home page with intro video
├── about.html              # About me page
├── skills.html             # Skills & technologies page
├── projects.html           # Projects & achievements page
├── contact.html            # Contact page with email form
│
├── css/
│   ├── main.css           # Main stylesheet (consolidated)
│   ├── variables.css      # CSS variables (optional, can be removed)
│   ├── utilities.css      # Utility classes (optional, can be removed)
│   └── components.css     # Component styles (optional, can be removed)
│
├── js/
│   ├── main.js            # Main JavaScript for all pages
│   └── contact.js         # Contact form email functionality
│
├── ganesh-removebg.png    # Profile image
├── ganesh.jpg             # About page image
├── Ganesh_Tiwari_Product_Based_Resume.pdf  # Resume file
│
└── EMAILJS_SETUP.md       # EmailJS configuration guide
```

## 🎯 Pages Overview

### 1. **index.html** - Home Page
- Hero section with introduction
- Social media links
- **Intro video section** (NEW!)
- Quick stats section
- Download CV button

### 2. **about.html** - About Me
- Detailed biography
- Education information
- Achievements list
- Statistics cards
- Design palette showcase

### 3. **skills.html** - Skills & Technologies
- Frontend development skills with progress bars
- Tools & technologies
- Core competencies section
- Animated skill bars

### 4. **projects.html** - Projects & Portfolio
- Project showcase cards
- **Achievements section** with competitions
- SIH 2023 participation
- Tech-Expo MPGI event
- Project count statistics

### 5. **contact.html** - Contact & Hire Me
- Contact information
- **Email form for recruiters** (EmailJS integrated)
- Social media links
- Availability information

## 🎥 Intro Video Section

The intro video section is located on the home page (`index.html`). To add your video:

### Option 1: YouTube/Vimeo Embed
Replace the iframe `src` in `index.html`:
```html
<iframe 
    src="YOUR_YOUTUBE_VIDEO_URL" 
    title="Introduction Video"
    ...
></iframe>
```

### Option 2: Local Video File
Uncomment the video tag and add your video file:
```html
<video id="intro-video" controls poster="video-thumbnail.jpg">
    <source src="intro-video.mp4" type="video/mp4">
    <source src="intro-video.webm" type="video/webm">
</video>
```

## 📧 Email Functionality

The contact form uses EmailJS to send emails directly to your inbox. 

**Setup Required:**
1. Follow instructions in `EMAILJS_SETUP.md`
2. Update `js/contact.js` with your EmailJS credentials:
   - Line 8: Replace `YOUR_PUBLIC_KEY`
   - Line 25: Replace `YOUR_SERVICE_ID`
   - Line 26: Replace `YOUR_TEMPLATE_ID`

## 🎨 CSS Organization

All styles are consolidated in `css/main.css` for easy maintenance:
- CSS Variables (colors, gradients, shadows)
- Utility Classes (layout, spacing, typography)
- Component Styles (buttons, navigation, forms)
- Section Styles (header, about, skills, portfolio, contact)
- Responsive Design (mobile-first approach)

## ✨ Features

### Navigation
- Sticky navigation bar
- Active page highlighting
- Smooth scrolling
- Mobile-responsive hamburger menu

### Animations
- Fade-in animations
- Floating hero image
- Skill bar progress animations
- Portfolio card hover effects
- Scroll-triggered animations

### Email Form
- Form validation
- Success/error messages
- Loading states
- EmailJS integration
- Recruiter-friendly fields

## 🚀 Deployment

1. **GitHub Pages:**
   - Push all files to your repository
   - Enable GitHub Pages in repository settings
   - Your site will be live at `username.github.io`

2. **Custom Domain:**
   - Add `CNAME` file with your domain
   - Update DNS settings

## 📝 Notes

- All pages share the same navigation and footer
- CSS is organized and maintainable
- JavaScript is modular and reusable
- Email functionality requires EmailJS setup
- Video section needs your actual video URL/file

## 🔧 Customization

### Change Colors
Edit CSS variables in `css/main.css`:
```css
:root {
    --red-color: #d40700;
    --accent-color: #ffee63;
    /* ... */
}
```

### Add More Projects
Edit `projects.html` and add new `.portfolio-child` divs

### Update Skills
Edit `skills.html` and modify skill items in `.skills-grid`

## 📞 Support

For issues or questions:
- Email: mpgiganeshtiwari0409@gmail.com
- GitHub: github.com/Ganeshtiwari681
