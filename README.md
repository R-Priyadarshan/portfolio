
# 💼 R Priyadarshan - Portfolio

Welcome to my **personal portfolio website**, built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.  
This site showcases my journey as a Software Developer & Data Scientist — highlighting my projects, skills, certifications, and contact info in a clean, elegant layout.

---

## 🚀 Live Demo

🔗 **[View Live Preview](https://c0a7a78f1f5440a8aefd6a15a4bd1d8c-5f1d54f572204773b348d655c.fly.dev/)** ⚡ (Current Development)
🔗 **[View on Netlify](https://r-priyadarshan-portfolio.netlify.app)** (Production)
🔗 **[View on GitHub Pages](https://r-priyadarshan.github.io/portfolio/)**

---

## ����️ Features

- ⚡ Lightning-fast with Vite
- 🌙 Light/Dark Theme with toggle and saved preference
- 💼 Dynamic project showcase with GitHub integration
- 📜 Certification cards with clickable links
- 🎬 Smooth animations with Framer Motion
- 📱 Fully responsive for mobile and desktop

---

## 🛠️ Tech Stack

- **Frontend**: React + Tailwind CSS + Vite
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Netlify + GitHub Pages

---

## 📁 Project Structure

```bash
my-resume/
├── src/
│   ├��─ components/        # All reusable sections
│   ├── media/             # Assets like resume, certificates, images
│   ├── App.jsx            # Main layout
│   └── main.jsx           # Entry point
├── index.html             # Root HTML file
├── vite.config.js         # Vite configuration
├── package.json
└── README.md
````

---

## 🧑‍💻 Getting Started

### 📦 Prerequisites

* Node.js ≥ 16.x
* npm
* Git

---

### 🚀 Local Development

```bash
git clone https://github.com/R-Priyadarshan/myResume.git
cd my-resume
npm install
npm run dev
```

Your site runs at:
📍 `http://localhost:5173/`

---

## 📤 Deploying to GitHub Pages

### 1. Set correct base in `vite.config.js`

```js
export default defineConfig({
  base: '/my-resume/',
  plugins: [react()],
});
```

### 2. Add deploy scripts to `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Deploy

```bash
npm install --save-dev gh-pages
npm run deploy
```

Deployed at 👉 [https://r-priyadarshan.github.io/portfolio/](https://r-priyadarshan.github.io/portfolio/)

---

## ✍️ Customization

### Update Page Title

Edit `index.html` in root:

```html
<title>R Priyadarshan - Portfolio</title>
```

### Add Your Projects

Update `src/components/Projects.jsx`:

```js
{
  title: "Your Project Title",
  description: "Short description...",
  github: "https://github.com/your/project"
}
```

---

## 📬 Contact

For collaborations, feedback, or hiring:

* 📧 Email: [bs8315@srmist.edu.in](mailto:bs8315@srmist.edu.in)


---

## 📜 License

Licensed under [MIT License](LICENSE)

---

### ✨ Thank You for Visiting!



