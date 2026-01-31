# Ganesh Tiwari - Portfolio Website

A modern, professional portfolio website showcasing full-stack development skills, projects, and achievements.

## 🚀 Features

### 🎨 Modern UI/UX Design
- **Advanced gradient-based design** with smooth animations
- **Fully responsive** - works perfectly on all devices
- **Smooth scrolling** navigation with active page highlighting
- **Interactive animations** - fade-ins, hover effects, scroll-triggered animations
- **Modern color palette** with CSS variables for easy customization

### 📧 Contact Form with Email Functionality
- Professional contact form for recruiters and clients
- EmailJS integration for direct email delivery
- Real-time form validation
- Success/error message notifications
- Recruiter-friendly fields (Company, Subject, etc.)

### 📄 Multi-Page Structure
- **Home** - Hero section with intro video and quick stats
- **About** - Detailed bio, education, certifications, and highlights
- **Skills** - Comprehensive technical skills with animated progress bars
- **Projects** - Showcase of major projects and achievements
- **Contact** - Multiple contact methods and email form

### ✨ Interactive Elements
- Scroll-to-top button
- Animated skill progress bars
- Project card hover effects
- Achievement cards with animations
- Mobile-responsive hamburger menu
- Navigation scroll effects

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3 (Modern features, CSS Variables, Flexbox, Grid)
- JavaScript (ES6+, Intersection Observer API)
- Font Awesome Icons
- Google Fonts (Inter & Poppins)

### Backend Integration
- EmailJS (for contact form)

## 📁 Project Structure

```
portfolio/
├── index.html              # Home page
├── about.html              # About page
├── skills.html             # Skills page
├── projects.html           # Projects page
├── contact.html            # Contact page
│
├── css/
│   └── main.css           # Main stylesheet
│
├── js/
│   ├── main.js            # Main JavaScript
│   └── contact.js         # Email form handler
│
├── assets/                 # (Optional - recommended)
│   ├── images/
│   ├── videos/
│   └── documents/
│
└── docs/
    ├── EMAILJS_SETUP.md
    └── README.md
```

## 🎯 Key Highlights

### Technical Skills
- **Programming:** Python, C++, C, JavaScript
- **Web Technologies:** React.js, Django REST Framework, HTML5, CSS3
- **Backend & APIs:** REST APIs, JWT, Authentication, Error Handling
- **Databases:** SQL (MySQL, PostgreSQL), Query Optimization, Schema Design
- **Core CS:** Data Structures & Algorithms, OOPs, CN, OS, DBMS
- **Problem Solving:** Competitive Programming, Algorithm Optimization
- **Tools:** Power BI, Git, MS Excel

### Projects
1. **PostX** - React, Django REST Framework (2025)
   - Scalable backend APIs with JWT authentication
   - Role-protected endpoints and production-level debugging

2. **Song Recommendation System** - Flask, HTML (2025)
   - Personalized recommendations using ML/DL
   - Collaborative filtering implementation

3. **Market Business Analysis - OLA Dataset** - Power BI, SQL, Python (2024)
   - Analyzed 103K+ entries
   - 30% query optimization improvement

4. **Crypto-Connect** - Web3 DApp (Hackathon 2024)
   - MetaMask integration
   - Smart contract implementation
   - 6-hour prototype development

### Achievements
- ✅ Winner - Tech-X-Po (MPGI) - Blood Donation System using Web3
- ✅ Finalist (24th Rank) - CodeCrafter Challenge 2025 (Unstop)
- ✅ 5-star in Python, MySQL, Problem Solving, C++ (HackerRank)
- ✅ Google Arcade 2024 - Standard Milestone Achiever
- ✅ 1000+ LeetCode problems solved (Rating: 1660)
- ✅ Selected for Internal Smart India Hackathon 2025
- ✅ 860+ GeeksforGeeks problems (College Rank 1, Contest Rating: 1606)

### Certifications
- Certified Network Security Practitioner (The SECOPS Group) | 2024
- Python Certification (HackerRank) | 2024
- Selenium Certification | 2025
- Database Management System (NPTEL) | 2025

## 🚀 Setup Instructions

### 1. Clone/Download Repository
```bash
git clone https://github.com/Ganeshtiwari681/Ganeshtiwari681.github.io.git
cd Ganeshtiwari681.github.io
```

### 2. EmailJS Configuration (For Contact Form)

1. Follow the detailed guide in `EMAILJS_SETUP.md`
2. Sign up for free at [emailjs.com](https://www.emailjs.com/)
3. Update `js/contact.js`:
   - Line 8: Replace `YOUR_PUBLIC_KEY`
   - Line 25: Replace `YOUR_SERVICE_ID`
   - Line 26: Replace `YOUR_TEMPLATE_ID`

### 3. Add Your Intro Video

**Option 1: YouTube/Vimeo**
- Upload video to YouTube/Vimeo
- Update iframe `src` in `index.html` (line ~68)

**Option 2: Local Video**
- Place video in `assets/videos/` folder
- Uncomment video tag in `index.html`
- Update video source path

### 4. Update Project Links

In `projects.html`, update project links:
- Replace `#` with actual project URLs
- Add GitHub repository links
- Add live demo links

### 5. Local Development

Simply open `index.html` in a web browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/main.css`:
```css
:root {
    --accent-color: #6366f1;
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... */
}
```

### Add More Projects
Edit `projects.html` and add new `.project-card` divs following the existing structure.

### Update Skills
Edit `skills.html` and modify skill items in `.skills-grid`.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🌐 Deployment

### GitHub Pages
1. Push all files to your repository
2. Go to Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be live at `username.github.io`

### Custom Domain
1. Add `CNAME` file with your domain
2. Update DNS settings
3. Configure in GitHub Pages settings

## 📞 Contact

- **Email:** mpgiganeshtiwari0409@gmail.com
- **Phone:** +91 8887243523
- **Location:** Gokhale Nagar, Bajariya Konch, Jalaun, Uttar Pradesh - 285205
- **GitHub:** (https://github.com/Ganeshtiwari681)
- **LinkedIn:** (https://www.linkedin.com/in/ganesh-tiwari1)
- **LeetCode:** (https://leetcode.com/u/mpgiganeshtiwar2/)

## 📄 License

Copyright © 2024 Ganesh Tiwari | All Rights Reserved

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- EmailJS for email functionality

---

**Built with ❤️ by Ganesh Tiwari**
