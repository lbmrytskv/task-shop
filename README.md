# 🛒 Task Shop — Simple Shopping Cart App

This is a basic shopping cart application built using **React**, **TypeScript**, and **Vite**.

The application allows users to:
- Browse a static list of products
- Add/remove items from the cart
- See a cart summary with total price
- Place an order and see a confirmation page (static HTML)

---

## 📦 Tech Stack

- React + TypeScript + Vite
- Context API + useReducer
- React Router
- Static JSON data
- ESLint + Type-checked rules

---

## 💡 Assumptions

- No backend — products and orders are stored locally
- Order confirmation page (`confirmation.html`) is static and reads data from `localStorage`
- Project is structured to be easily extendable (e.g. for future API integration)

---

## ▶️ How to Run Locally


npm install     # install dependencies
npm run dev     # start local dev server

Then open: http://localhost:5173

🚀 Live Production Demo

👉 https://lbmrytskv.github.io/task-shop/


🔍 Extra ESLint Configuration 
This project can be extended with type-aware lint rules for production setups:

js
Копіювати
Редагувати
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
React-specific rules can also be added:

js
Копіювати
Редагувати
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})