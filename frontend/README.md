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

