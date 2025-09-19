# CleanCare Pro - Professional Maid Services Website (Vite)</

A modern, responsive maid services website built with Vite for optimal performance and easy deployment.

## 🚀 Live Website

Your website is now running at: **http://localhost:5173/**

## ✨ Features

- **Modern Design**: Clean, professional layout perfect for service businesses
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Fast Performance**: Built with Vite for lightning-fast development and build times
- **Interactive Elements**: 
  - Mobile-responsive navigation menu
  - Smooth scroll animations
  - Contact form with validation
  - Animated statistics counters
  - Hover effects and transitions

## 🛠️ Tech Stack

- **Vite**: Modern build tool for faster development
- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS variables and animations
- **Vanilla JavaScript**: No framework dependencies, pure performance
- **Font Awesome**: Professional icons
- **Google Fonts**: Poppins and Open Sans typography

## 📁 Project Structure

```
maid-services-vite/
├── index.html          # Main HTML page
├── src/
│   ├── main.js          # JavaScript functionality
│   └── style.css        # Complete styling
├── public/
│   └── vite.svg         # Favicon
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## 🚀 Deployment to Vercel

### Option 1: Quick Deploy (Recommended)

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Maid Services Website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Vite and deploy!

### Option 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts
   - Your site will be live in seconds!

### Option 3: Manual Build and Deploy

1. **Build for production**:
   ```bash
   pnpm run build
   ```

2. **Upload the `dist` folder** to any static hosting service:
   - Netlify (drag and drop)
   - GitHub Pages
   - Firebase Hosting
   - Any web host

## 🔧 Development

### Prerequisites
- Node.js (v16 or higher)
- pnpm (or npm/yarn)

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🎨 Customization

### Change Company Information
1. **Company Name**: Search and replace "CleanCare Pro" throughout the code
2. **Contact Details**: Update phone, email, and address in the contact section
3. **Services & Pricing**: Modify service cards in the HTML
4. **Colors**: Change CSS variables in `src/style.css`:
   ```css
   :root {
     --first-color: #3B82F6;      /* Primary blue */
     --first-color-alt: #1E40AF;   /* Darker blue */
     --first-color-light: #EBF4FF; /* Light blue */
   }
   ```

### Add Your Logo
Replace `/vite.svg` with your logo file in the `public` folder and update the favicon reference in `index.html`.

## 📧 Contact Form Integration

The contact form is ready to integrate with:

### Option 1: Netlify Forms (Easy)
Add `netlify` attribute to the form tag:
```html
<form class="contact__form" id="contact-form" netlify>
```

### Option 2: EmailJS (More Features)
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your service ID and template ID
3. Update the form submission code in `src/main.js`

### Option 3: Custom API
Replace the form submission simulation in `src/main.js` with your API endpoint.

## 🔒 Security & Performance

- ✅ Optimized images and assets
- ✅ Minified CSS and JavaScript
- ✅ Modern browser compatibility
- ✅ SEO-friendly structure
- ✅ Fast loading times
- ✅ Mobile-first responsive design

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data ready
- Optimized images with alt text
- Clean URLs

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Internet Explorer 11 (basic support)

## 📞 Support

The website is fully functional and ready for deployment. Key features:

1. **Professional Design**: Clean, trustworthy layout
2. **Mobile Responsive**: Works on all devices
3. **Contact Form**: Ready for lead generation
4. **Service Showcase**: Clear pricing and offerings
5. **Fast Loading**: Optimized for performance

## 🎯 Next Steps

1. **Deploy to Vercel** (5 minutes)
2. **Update contact information** with your real details
3. **Replace images** with your own professional photos
4. **Add your logo** and branding
5. **Set up contact form** to receive emails
6. **Add Google Analytics** for tracking

---

**Ready to Deploy!** Your professional maid services website is complete and optimized for Vercel deployment.