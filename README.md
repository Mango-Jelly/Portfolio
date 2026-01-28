# Portfolio Website

A modern, responsive portfolio website to showcase your projects, experience, and skills.

## Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations
- **Sections Include**:
  - Hero section with introduction
  - About me section
  - Work experience timeline
  - Projects showcase
  - Skills and technologies
  - Contact form
  - Social media links

## Getting Started

### Option 1: Open Locally
Simply open `index.html` in your web browser.

### Option 2: Use Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` and select "Open with Live Server"

## Customization Guide

### 1. Personal Information
Edit `index.html` and replace:
- "Your Name" with your actual name
- "your.email@example.com" with your email
- Social media links (GitHub, LinkedIn, etc.)
- Phone number and location

### 2. About Section
- Replace the profile image: Add your photo to the `images/` folder as `profile.jpg`
- Update the about text with your background and interests

### 3. Experience
Update the timeline items with your actual work experience:
- Job title
- Company name
- Date range
- Responsibilities and achievements

### 4. Projects
For each project card:
- Add project images to the `images/` folder (e.g., `project1.jpg`, `project2.jpg`)
- Update project names and descriptions
- Update technology tags
- Add GitHub and live demo links

### 5. Skills
Update the skills lists with your actual skills and technologies.

### 6. Colors and Styling
Edit `styles.css` to customize the color scheme:
```css
:root {
    --primary-color: #3b82f6;      /* Main brand color */
    --secondary-color: #1e40af;     /* Secondary brand color */
    --accent-color: #10b981;        /* Accent color */
}
```

### 7. Resume
Add your resume PDF as `resume.pdf` in the root folder for the download button to work.

## Images Setup

Add the following images to the `images/` folder:
- `profile.jpg` - Your profile photo (recommended size: 400x400px)
- `project1.jpg` - First project screenshot (recommended size: 600x400px)
- `project2.jpg` - Second project screenshot
- `project3.jpg` - Third project screenshot
- `project4.jpg` - Fourth project screenshot

You can use placeholder images from services like:
- [Unsplash](https://unsplash.com/)
- [Pexels](https://www.pexels.com/)
- [Lorem Picsum](https://picsum.photos/)

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select the main branch as the source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your website folder
3. Your site will be live instantly

### Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (Vanilla)
- Font Awesome Icons

## Tips for Customization

1. **Keep it simple**: Don't overcrowd with too much information
2. **Use high-quality images**: Make sure your photos and screenshots are clear
3. **Keep content updated**: Regularly update your projects and experience
4. **Test on mobile**: Make sure everything looks good on different screen sizes
5. **Proofread**: Check for typos and grammatical errors

## Contact Form

The contact form currently shows an alert message. To make it functional:
1. Use a service like [Formspree](https://formspree.io/)
2. Or implement a backend API to handle form submissions
3. Or use [EmailJS](https://www.emailjs.com/) for client-side email sending

## License

Feel free to use this template for your personal portfolio!

---

Good luck with your job search! 🚀
