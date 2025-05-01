
# Catering Reservation and Ordering System
This is a MERN stack project designed to manage catering reservations and food orders for events. The system allows users to browse catering services, add items to a cart, and place orders easily. It also provides an admin panel where administrators can manage product listings and monitor customer orders. The main goal of this system is to simplify the process of booking catering services and handling food orders through a user-friendly web interface.




## Features


### 👤 User Features

####  Register and Login
Users can create an account and securely log in to access their dashboard.

#### View Products
Browse through available catering services with detailed descriptions, pricing, and images.

####  Add to Cart
Select desired items and add them to a shopping cart for easy checkout.

####  My Orders
View and manage both current and past orders, including order status.

#### Place Order
Review items in the cart, confirm details, and submit the order for processing.



### 🛠️ Admin Features

####  Register and Login
Admins can log in securely to access management functionalities.

####  Upload Product Details
Admins can add new menu items, edit existing ones, or remove outdated services.

####  View Orders
Monitor, list, and update the status of customer orders in real-time.


## New Feature 


- Add order tracking with status updates.

- Enable image uploads for products.

- Improve payment integration with Razorpay
## System Modules
**Admin**
- Register and Login

- Upload Product Details

- View Orders
- Add order tracking with status updates.

**User**
- Register and Login

- View Products

- Add to Cart

- My Orders

- Place Orders

- Payment Method (via Razorpay)


## Tech Stack


### Frontend
- **vite** – Fast bundler for React
- **react Router DOM** – Routing
- **axios** – API calls
- **react toastify** – Notifications
- **jwt-decode** – Token decoding
- **Others**: HTML, CSS, JavaScript

### Backend
- **express** – Server/API
- **jsonwebtoken** – Auth
- **bcryptjs** – Password hashing
- **multer** – File upload
- **razorpay** – Payment integration
- **mongoose** – MongoDB ODM
- **dotenv** – Environment config
- **cors** – Cross-Origin requests
- **nodemon** – Dev auto-restart


##  Installation


To run this project locally, follow these steps:



### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Athira-vk/Catering-Reservation-and-Ordering-System.git
```



### 2️⃣ Install Project Dependencies

####  Backend

```bash
cd backend
npm install
```

####  Admin Panel

```bash
cd admin
npm install
```

####  Frontend (User)

```bash
cd frontend
npm install
```



### 3️⃣ Set Up Environment Variables

####  Backend `.env` File

Create a `.env` file inside the `backend/` directory with the following content:


JWT_KEY=''
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=


Also, configure MongoDB in `config/db.js` with your connection string.



### 4️⃣ Configure API URLs

####  Backend URL in Admin

In the `admin/App.jsx` project, set:
```js
const url = "http://localhost:4000";
```

####  Backend URL in Frontend

In the `frontend/context/StoreContext.jsx` project, set:
```js
const url = "http://localhost:4000";
```

####  Frontend URL in Backend

In the `backend/orderController.js` file, add:
```js
frontend_url= "http://localhost:5173";
```



### 5️⃣ Start the Application

####  Start Backend Server

```bash
cd backend
npm run server
```

####  Start Frontend (User)

```bash
cd frontend
npm run dev
```
####  Start Admin 

```bash
cd frontend
npm run dev
```


### ✅ Application Running

- **Frontend (User App):** http://localhost:5173
- **Admin :** http://localhost:5174 
- **Backend API:** http://localhost:4000

Make sure MongoDB is running before starting the backend.



    
## Demo


You can access the live application here:  
👉 [Live Demo for Frontend](https://catering-reservation-and-ordering-system-1xyt.onrender.com)

👉 [Live Demo for Admin](https://catering-reservation-and-ordering-system-li1p.onrender.com)

## Screenshots

                          
### 🏠 Home Page
![HomePage1](https://github.com/user-attachments/assets/ff5aec2c-7c76-45c2-be25-262ef1ff2bdc)

![Home Page 2](https://github.com/user-attachments/assets/0c56fdbb-fd7c-4ed8-86bd-2026e35bc8a5)

---

### 🔻 Footer
![Footer](https://github.com/user-attachments/assets/28312a8f-d12d-4621-93da-b3f45d4540f3)

---

### 👤 User Authentication
**Login**
![User Login](https://github.com/user-attachments/assets/ac4b63e4-c268-4172-9e4a-845e08cf47d1)

**Sign Up**
![User SignUp](https://github.com/user-attachments/assets/959ea084-c90f-4727-a33e-78f78592ced5)

---

### 🛒 Shopping
**Add to Cart**
![Add to cart](https://github.com/user-attachments/assets/4e991a74-bee1-4a54-8f6d-db8ad7f3664b)

**Cart Page**
![Cart Page](https://github.com/user-attachments/assets/64c37ad5-a3b1-406a-8fc4-76e7c8f0a5ec)

**Place Order**
![Place Order](https://github.com/user-attachments/assets/b9c61c01-bfba-48e0-9704-620c565b7606)

**Payment**
![Payment](https://github.com/user-attachments/assets/f30a8d46-cc5e-441b-a84c-7646bf224dfc)

**My Orders**
![My Order](https://github.com/user-attachments/assets/61d583a3-5b53-4e00-9c99-e00a0b33cfdb)

---

### 🛠️ Admin Panel

**Admin Landing Page**
![Admin Landing Page](https://github.com/user-attachments/assets/425908b1-2a5d-47cd-8cab-4455cecfa240)

**Login**
![Admin Login](https://github.com/user-attachments/assets/861be7f5-bd08-4938-9df3-9dc237587a1e)

**Sign Up**
![Admin SignUp](https://github.com/user-attachments/assets/a82160e8-c7ec-49a9-a573-a6a667bd3fcb)

**Upload Product Details**
![Upload Product Details](https://github.com/user-attachments/assets/db8520e3-e557-4bd4-b247-87ec40934b72)

**List Product**
![List Product](https://github.com/user-attachments/assets/12a93ebb-e2da-489b-87f8-ad36e310b2cb)

**View Orders**
![View Orders](https://github.com/user-attachments/assets/a27eb850-f33f-4b4d-af2e-eb11e6eecbb1)
