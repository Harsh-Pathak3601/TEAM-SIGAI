# ACM-SIGAI TCET React Website

This is a React version of the integrated ACM-SIGAI TCET team website, featuring all the original functionality with modern React components.

## 🚀 Features

### **🤖 Hero Section**
- Interactive 3D Spline robot model
- "OUR TEAM" title with "Avada Kedavra" tagline
- Full-screen immersive experience

### **👥 Core Team Section**
- Interactive team member cards with hover effects
- Detailed information about each team member
- Smooth transitions between short and long descriptions
- Responsive grid layout

### **🌟 Junior Core Team Section**
- Advanced 3D card effects with perspective transforms
- Fluid cursor glow animation following mouse movement
- Interactive cards with click-to-focus functionality
- LinkedIn integration for each member
- Entrance animations with staggered timing

### **📞 Contact Section**
- Contact information with social media links
- Interactive Google Maps integration
- Contact form with validation
- Responsive footer design

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **CSS3** - Custom styling with animations
- **Tailwind CSS** - Utility-first CSS framework
- **Spline** - 3D model integration
- **Google Maps** - Location integration
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📁 Project Structure

```
integrated-website-react/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── profile_pic.png
│   ├── bala.jpg
│   ├── parag.jpg
│   ├── Pranav.jpg
│   ├── riya.jpg
│   ├── Tiya.jpg
│   └── Vipul.jpg
├── src/
│   ├── components/
│   │   ├── HeroSection.js
│   │   ├── CoreTeam.js
│   │   ├── JuniorTeam.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd integrated-website-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎨 Key Features

### **React Components**
- **HeroSection** - 3D robot model with overlay text
- **CoreTeam** - Interactive team member cards
- **JuniorTeam** - Advanced 3D card effects with cursor glow
- **Footer** - Contact form and information

### **Advanced Interactions**
- **3D Card Effects** - Perspective rotations on hover
- **Fluid Cursor Glow** - Aurora-like effect following mouse
- **Click Interactions** - Focus cards with scale and blur effects
- **Form Validation** - Real-time form validation with React state

### **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes
- Touch-friendly interactions

## 🔧 Customization

### **Adding Team Members**
1. Update the `teamMembers` array in `CoreTeam.js`
2. Add member images to the `public` folder
3. Update the image paths in the component

### **Styling**
- Modify `App.css` for global styles
- Update component-specific styles
- Customize Tailwind classes for utility styling

### **Functionality**
- Add new React hooks for state management
- Implement additional form validation
- Add new interactive elements

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎯 Performance Features

- **React Hooks** - Efficient state management
- **Event Listeners** - Proper cleanup in useEffect
- **Lazy Loading** - Optimized image loading
- **Smooth Animations** - Hardware-accelerated transitions

## 🔄 Migration from HTML

This React version maintains all the original functionality while providing:

- **Component-based architecture**
- **State management with hooks**
- **Better performance optimization**
- **Easier maintenance and updates**
- **Modern development practices**

## 📞 Contact

For any questions or support regarding this React website, please contact the ACM-SIGAI TCET team.

---

**Built with ❤️ using React**
