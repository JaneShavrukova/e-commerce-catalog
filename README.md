# 📱 React Phone Catalog

A responsive e-commerce product catalog built with **React**, featuring a shopping cart, favorites, and product details.
The project follows best practices in **component structuring, styling with CSS modules, and state management**.

## 🌐 Live Demo

🔗 [Live Preview](https://janeshavrukova.github.io/e-commerce-catalog/)

## 🛠 Technologies Used

- ⚛️ React + TypeScript
- 🛒 Context API for global state management
- 🌎 React Router for navigation
- 🎨 SCSS (with modules)
- ⚡ Vite for fast development
- ✏️ ESLint + Prettier for code quality
- 🖼️ Swiper.js


## ✨ Features Implemented

### **Home Page**
- **Dynamic Banner Slider** – implemented with `Swiper.js`, supports auto play and navigation.
- **Featured Products** – highlights products with discounts.
- **Category Navigation** – quick access to different product categories (`Phones`, `Tablets`, `Accessories`).

---

### **Product Catalog**
- **Category Pages** – separate pages for `phones`, `tablets`, and `accessories` with dedicated filtering and sorting.
- **Sorting Options** – users can sort products by:
  - Newest
  - Name (A-Z)
  - Price (low to high, high to low)
- **Responsive Design** – fully adapted for desktop, tablet, and mobile devices.

---

### **Global State Management**
- **Context API** – centralized state management for efficient app performance.
- **`ProductsContext`** – manages:
  - Product fetching and caching
  - Loading and error handling
  - Global product filtering and sorting
- **Minimized API Calls** – ensures optimal performance by avoiding unnecessary re-fetching.

---

### **Routing & Error Handling**
- **`react-router-dom`** – client-side navigation with dynamic routes.
- **404 Page** – custom `Not Found` page for invalid URLs.
- **Loading States** – `Loader` component is displayed when fetching data.

---

## 🚧 Planned Features

### **Product Details Page**
- **Product Information Display** – includes name, price, available colors, and storage capacities.
- **Product Gallery** – multiple product images with a zoom feature.
- **"You May Also Like" Section** – dynamically suggests similar products.

---

### **Pagination**
- Implement pagination for a better user experience when browsing large product lists.

---

### **Shopping Cart**
- **Add/Remove Products** – allow users to manage items in their cart.
- **Cart Quantity Display** – show the number of items in the cart in the header.
- **Persistent Cart** – store cart data in `localStorage` to retain items between sessions.

---

### **Favorites (Wishlist)**
- **Add/Remove Favorite Items** – users can mark products as "favorites."
- **Favorite Counter** – display the number of favorite items in the header.
- **Persistent Data** – store favorite items in `localStorage`.

---

### **Search Functionality**
- Implement a global search feature to quickly find products.

---

### **Extra Features**
- **Skeleton Loading** – improve perceived performance by displaying placeholder content while data loads.
- **Multi-Language Support** – allow users to switch between different languages.
- **Theme Switching** – enable light and dark mode for better user experience.

---

🔥 **The project is actively evolving, and new features will be added in future updates!** 🚀

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
git clone https://github.com/JaneShavrukova/e-commerce-catalog.git
```

### 2. Open the project in your code editor

### 3. Install dependencies
```bash
npm install
```

### 4. Run the project locally
```bash
npm start
```

## ⚙️ Requirements
- Node.js >= 20.0.0

---
