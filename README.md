Dark & Light Theme Toggle 🌗

A simple, stylish Dark/Light theme switcher built with HTML, CSS, and JavaScript.
The selected theme is saved using localStorage, so your preference persists across page reloads.


✨ Features

One-click toggle between Dark and Light modes

Smooth transitions for a pleasant UX

Persisted theme using localStorage

Gradient button with hover animation

Clean, responsive layout

🧰 Tech Stack

HTML5

CSS3

JavaScript (Vanilla)

📁 Project Structure
.
├── index.html
├── style.css
└── script.js

🧩 How It Works

On load, the script checks localStorage for key_theme.

If found, it adds the .theme class to <body> (Dark mode).

Clicking the button toggles the .theme class and updates localStorage.
