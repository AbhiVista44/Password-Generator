https://github.com/AbhiVista44/Password-Generator.git

# Password Generator 🔐

A modern and responsive Password Generator built using React, Vite, and Tailwind CSS.

## Features

- Generate secure random passwords
- Adjustable password length
- Include numbers
- Include special characters
- Copy password to clipboard
- Responsive modern UI
- Built with React Hooks

---

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript

---

## React Hooks Used

- useState
- useEffect
- useCallback
- useRef

---

## Installation

Clone the repository:

```bash
https://github.com/AbhiVista44/Password-Generator.git
```

Navigate to the project folder:

```bash
cd Password-Generator
cd App.jsx
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Tailwind CSS Setup

Install Tailwind CSS:

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure Vite:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Add Tailwind import in `App.css`:

```css
@import "tailwindcss";
```

---

## Project Structure

```plaintext
password-generator/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---


## Future Improvements

- Password strength indicator
- Dark/Light mode toggle
- Generate pronounceable passwords
- Save password history
- Mobile optimization

---

## License

This project is open source and available under the MIT License.
