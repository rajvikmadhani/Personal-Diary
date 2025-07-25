# Personal Diary 📝

A simple and elegant personal diary web application built with **React**, **Vite**, and **Tailwind CSS**. It allows users to write, manage, and store daily entries with a clean and responsive UI.

🌐 **Live Site:** [https://rajvikmadhani.github.io/Personal-Diary/](https://rajvikmadhani.github.io/Personal-Diary/)

📤 **Deployment:** This project is deployed using [GitHub Pages](https://pages.github.com/) via [`gh-pages`](https://www.npmjs.com/package/gh-pages).  
To deploy:

```bash
npm run build     # Builds the app to the dist/ folder
npm run deploy    # Publishes dist/ to the gh-pages branch
```

📄 **License:** This project is open-source and available under the [MIT License](LICENSE).

> Made with ❤️ by [@rajvikmadhani](https://github.com/rajvikmadhani)

---

## ✨ Features

- 🖋️ Add, edit, and delete diary entries
- 📅 Entry timestamps with `date-fns`
- ✅ Form validation with `react-hook-form` and `Yup`
- 🎨 Responsive UI with Tailwind CSS and DaisyUI
- ⚡ Fast build and dev experience with Vite
- 🚀 Deployed to GitHub Pages

---

## 📦 Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, DaisyUI
- **Form Validation:** React Hook Form, Yup
- **Date Utilities:** date-fns

---

## 🚀 Getting Started (Local Development)

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/rajvikmadhani/Personal-Diary.git
cd Personal-Diary

# Install dependencies
npm install

# Start the local development server
npm run dev
```

---

## 🛠️ Available Scripts

```bash
npm run dev        # Start the dev server
npm run build      # Create a production build in the dist/ folder
npm run preview    # Preview the production build
npm run lint       # Run ESLint on source files
npm run deploy     # Deploy dist/ to GitHub Pages
```

---

## 📁 Project Structure

```
Personal-Diary/
├── public/             # Static files
├── src/                # Source code
│   ├── components/     # Reusable components
│   ├── pages/          # Page-level components
│   ├── App.jsx
│   └── main.jsx
├── dist/               # Build output (after `npm run build`)
├── vite.config.js      # Vite configuration
└── package.json        # Project metadata and dependencies
```

---

## 💡 Contributing

Contributions are welcome!  
If you'd like to improve something, feel free to fork the repo, make changes, and open a pull request.

---

## 📬 Contact

If you have any questions or suggestions, feel free to reach out via GitHub issues or at [@rajvikmadhani](https://github.com/rajvikmadhani).
