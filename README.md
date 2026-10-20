## Davis-Avery😊
From browsing to checkout—an end-to-end e-commerce solution powered by React, Node.js, and MongoDB.

## A little Preview
https://github.com/user-attachments/assets/985da2e8-8990-464e-89a1-e9c119dc3110


## ✨ Features

- 🔐 **Secure User Authentication** — JWT-based login, registration, and protected routes.
- 🛒 **Shopping Cart Management** — Add, update, and remove items with dynamic cart functionality.
- 💳 **Razorpay Payment Integration** — Online payment processing through the Razorpay payment gateway.
- 📦 **Order Management** — Place orders and view order details and status.
- 👤 **User-Specific Orders** — Ensure customers can access only their own orders.
- 🏪 **Admin Dashboard** — Manage products, product listings, and customer orders.
- 🔍 **Product Browsing & Search** — Explore products through collections and category-based navigation.
- 🖼️ **Cloudinary Integration** — Store and manage product images.
- 🛡️ **API Security** — Authentication middleware, protected operations, and rate limiting.
- ⚡ **RESTful API Architecture** — Modular backend built with Node.js and Express.js.
- 🗄️ **MongoDB Integration** — Persistent storage for users, products, and order data.
- 🎨 **Modern User Interface** — Clean layouts, intuitive navigation, and smooth animations using Framer Motion.
- 📱 **Responsive Design** — Optimized layouts for mobile devices, tablets, and desktops.

## 📁 Project Structure

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

## 🧑🏻‍💻 Tech Stack

### 🎨 Frontend

- **React.js** — Component-based user interface development.
- **Vite** — Fast development server and build tooling.
- **React Router DOM** — Client-side routing and navigation.
- **CSS3** — Responsive styling and visual design.
- **Framer Motion** — Smooth animations and interactive transitions.

### ⚙️ Backend

- **Node.js** — JavaScript runtime for server-side development.
- **Express.js** — RESTful API development and request handling.
- **JWT (JSON Web Tokens)** — Token-based authentication.
- **Multer** — File upload handling.
- **Rate Limiting** — Helps protect API endpoints from excessive requests.

### 🗄️ Database & External Services

- **MongoDB** — Database for storing user, product, and order information.
- **Cloudinary** — Product image storage and management.
- **Razorpay** — Online payment gateway integration.

## 🚀 Key Highlights

- **Full-Stack Architecture:** Separate customer storefront, admin dashboard, and backend API.
- **Authentication & Authorization:** Protected routes and middleware-based access control.
- **Payment Integration:** Razorpay-based online payment workflow.
- **Product Management:** Dedicated administrative interface for managing product listings.
- **Order Management:** Organized order handling and user-specific order access.
- **Modular Architecture:** Organized controllers, models, routes, and reusable React components.
- **Enhanced User Experience:** Responsive layouts, intuitive navigation, and smooth animations.

## 🔒 Environment Configuration

Create a `.env` file inside the `backend/` directory and configure the environment variables required by your application.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

**Important:** Never commit your actual credentials or secret keys to GitHub.

## ⚙️ Installation & Setup

### Prerequisites

- Node.js and npm installed.
- MongoDB connection configured.
- Cloudinary account for image management.
- Razorpay account for payment integration.

### 1. Clone the Repository

```bash
git clone https://github.com/rimc008/Ecommerce.git
cd Ecommerce
```

### 2. Set Up the Backend

```bash
cd backend
npm install
npm run dev
```

Configure the environment variables in the backend `.env` file before starting the server.

**Note:** Use `npm run dev` only if the backend's `package.json` defines that script. Otherwise, use the appropriate script configured in your project.

### 3. Set Up the Customer Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Set Up the Admin Dashboard

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

## 📌 Future Improvements

- Add automated testing for critical application workflows.
- Improve product filtering and sorting.
- Enhance order status updates and notifications.
- Implement more comprehensive error handling and logging.
- Optimize API performance and database queries.
- Deploy the frontend, admin dashboard, and backend for public access.

## 👨‍💻 Author

**Roman Chakraborty**

- GitHub: [@rimc008](https://github.com/rimc008)
- Repository: [E-Commerce Website](https://github.com/rimc008/Ecommerce)

---

⭐ If you find this project interesting, consider giving the repository a star!
