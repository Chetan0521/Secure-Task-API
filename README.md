# SecureTask Frontend

This is the frontend application for **SecureTask API**, built using **React (Vite)**.
It demonstrates authentication, role-based access control, and task management by consuming the SecureTask backend APIs.

---

## 🚀 Features

### User Features
- User registration
- User login with JWT authentication
- Protected user dashboard
- Create and view own tasks
- Logout functionality

### Admin Features
- Admin login
- Admin dashboard
- View all registered users
- View all tasks with task owner information

---

## 🛠 Tech Stack

- React (Vite)
- JavaScript (ES6)
- Axios
- Plain CSS
- JWT-based authentication

---

## 📂 Folder Structure

```text
src/
 ├── pages/
 │   ├── Register.jsx
 │   ├── Login.jsx
 │   ├── Dashboard.jsx
 │   └── AdminDashboard.jsx
 ├── services/
 │   ├── api.js
 │   └── auth.js
 ├── App.jsx
 ├── main.jsx
 └── index.css


🔌 Backend Integration

The frontend communicates with the backend at:

🔌 Backend Integration

The frontend communicates with the backend at:
[text](http://localhost:5000/api/v1)
Authentication is handled using JWT tokens stored in localStorage.

Axios automatically attaches the token to every protected API request.

▶️ Run the Frontend Locally
1️⃣ Install dependencies

cd frontend
npm install

2️⃣ Start development server
npm run dev

Frontend will run at:

http://localhost:5173

🔐 Authentication Flow

1. Register a new user
2. Login to receive JWT token
3. Token tored in browser localStorage
4. Role (admin/user) is decoded from JWT
5. UI renders dashboard based on role


🧪 Tested Scenarios

User registration & login
User task CRUD
Admin access control
Unauthorized access blocking
Backend API integration

📌 Notes

Backend must be running before starting frontend
Admin routes are visible only to admin users
This frontend is intentionally simple and functional to demonstrate API usage


        👨‍💻 Author
        Chetan Shinde
        Email : chetanshinde2643@gmail.com
        GitHub: https://github.com/Chetan0521
        Phone : 9665809591

        Start Project

        1. Start backend:

        cd backend
        npm run dev

        2. Start frontend
        cd frontend
        npm run dev

        User login → user dashboard
        Admin login → admin dashboard

# SecureTask API

SecureTask API is a scalable RESTful backend system built with Node.js, Express, and MongoDB.  
It supports JWT-based authentication, role-based access control (Admin/User), and secure CRUD operations.

---

## 🚀 Features

- User Registration & Login (JWT Authentication)
- Role-Based Access Control (Admin / User)
- Task Management (CRUD)
- Ownership-based security
- MongoDB Atlas integration
- Swagger API Documentation
- Modular & scalable architecture

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcrypt
- Swagger (OpenAPI)
- Postman

---

## 📂 Project Structure

```text
backend/
 ├── src/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── middlewares/
 │   └── config/
 ├── docs/
 │   └── swagger.yaml
 ├── server.js
 └── .env


## ⚙️ Environment Variables

Create .env file inside backend/:

PORT=5000
JWT_SECRET=your_secret
JWT_EXPIRES_IN=1d
MONGO_URI=your_mongodb_uri


▶️ Run the Project

cd backend
npm install
npm run dev

## 📄 API Documentation
Swagger UI available at:

http://localhost:5000/api-docs


🔐 Authentication Flow

1.Register user
2.Login user → Receive JWT
3.Use JWT in Authorization: Bearer <token>
4.Access protected routes


🧪 Testing

Tested using Postman
Includes positive & negative cases
Admin & User role verification

📈 Scalability Notes

Modular MVC architecture
API versioning (/api/v1)
Can be extended with Redis caching
Docker-ready for containerization
Supports horizontal scaling with load balancers



# 🟢 FINAL  STATUS

| Requirement | Status |
|-----------|--------|
Backend APIs | ✅ |
Auth + JWT | ✅ |
RBAC | ✅ |
CRUD | ✅ |
MongoDB | ✅ |
Swagger Docs | ✅ |
README | ✅ |
Frontend | 

---

## 🏁 FINAL VERDICT

🎯 **BACKEND  = COMPLETE **

