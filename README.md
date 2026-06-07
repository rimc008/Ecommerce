## Davis-Avery😊
From browsing to checkout—an end-to-end e-commerce solution powered by React, Node.js, and MongoDB.

## A little Preview
https://github.com/user-attachments/assets/985da2e8-8990-464e-89a1-e9c119dc3110

## Features✨
* 🔐 Secure User Authentication using JWT-based login and registration.
* 🛒 Shopping Cart Management with add, update, and remove item functionality.
* 💳 Razorpay Payment Gateway Integration for secure online payments.
* 📦 Order Placement & Tracking with dedicated order management.
* 👤 User-Specific Orders ensuring customers can view only their own orders.
* 🏪 Admin Dashboard for product and order management.
* 🔍 Product Browsing & Search with category and collection views.
* 📱 Responsive UI optimized for tablets and desktop devices.
* ⚡ Modern React Frontend with smooth navigation and interactive user experience.
* 🗄️ MongoDB Database Integration for persistent storage of users, products, carts, and orders.
* 🌐 RESTful API Architecture built with Node.js and Express.
* 🛡️ Protected Routes & Authorization to secure sensitive operations.
* 🎨 Clean and Intuitive User Interface focused on usability and performance.

## Folder structure📁
## 📂 Project Structure

```text
Ecommerce/
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── pages/
│   │   │   ├── add.jsx
│   │   │   ├── addminhome.jsx
│   │   │   ├── list.jsx
│   │   │   ├── login.jsx
│   │   │   ├── product.jsx
│   │   │   └── update.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── navbar.jsx
│   │   └── toastConfig.js
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── mongodb.js
│   │   └── razorpay.js
│   ├── controllers/
│   │   ├── admincontroller.js
│   │   ├── adminProductController.js
│   │   ├── orderControllers.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── middleware.js
│   │   ├── multer.js
│   │   ├── rateLimiter.js
│   │   └── tokenVerify.js
│   ├── models/
│   │   ├── adminProduct.js
│   │   ├── orderedProduct.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── payment/
│   │   └── razorpayHandle.js
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── payRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── uploads/
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── context/
│   │   │   └── ShopContext.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Collections.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   ├── Successorder.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── navbar.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```
## Tech Stack🧑🏻‍💻

### Frontend🎨

* React.js
* Vite
* React Router DOM
* CSS3
* Framer Motion

### Backend⚙️

* Node.js
* Express.js

### Database🗄️

* MongoDB
* Mongoose

### Authentication & Security🔐

* JWT (JSON Web Tokens)
* bcrypt
* Express Rate Limiter
* Custom Authentication Middleware

### Payment Gateway💳

* Razorpay

### Media Storage☁️

* Cloudinary
* Multer

### Tools & Deployment🛠️

* Git
* GitHub
* Postman
* VS Code

## Run Locally 🚀

### Backend ⚙️

```bash
cd ..
cd backend
npm run local
```

### Frontend 🎨

```bash
cd ..
npm run dev
```

### Admin Panel 🏪

```bash
cd admin
npm run dev
```

## That's it 
Liked the hardwork ? Give this repo a ⭐
