# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Catering Reservation and Ordering System

This MERN stack project helps users book catering services and order food for events

## System Modules

### User

. Register and login
. View Product
. Add to cart
. My order
. Place order
. My profile
. Payment methode

### Admin

. Register and login
. Upload Product details
. View Order

## Tech-Stack-Used

### Frontend

vite (bundler-react)
jwt-decode
react-router-dom (routing)
react-toastify (notify)
axios (API)

### Admin

vite (bundler-react)
jwt-decode
react-router-dom (routing)
react-toastify (notify)
axios (API)

### Backend

express (API)
jwt-token (token)
dotenv
bcrypt (encryption)
mongoose
multer
nodemon
razorpay
validator

## Installation

To run this project locally, follow these steps:

### Clone the repository:

### Install backend dependencies:

cd backend
npm install

Install frontend dependencies:

cd frontend
npm install

Install frontend dependencies:

cd admin
npm install

## Set up environment variables for the backend:

Create a .env file in the backend directory with the following content:

DB_URL=''
JWT_KEY = ''
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRE=

### Run the backend server:

cd backend
npm run server

### Run the frontend server:

cd frontend
npm run dev

### Run the admin server:

cd admin
npm run dev

### Set up frontend url :

Set up frontend\_ url in orderController.js

frontend_url = "http://localhost:5174"

### Set up backend url :

Set up backend url in StoreContext.jsx

const url = "http://localhost:4000"
