# SecureTask API – Full Stack Project

SecureTask is a full-stack application built as part of a **Backend Developer (Intern) assignment**.  
It demonstrates secure backend API development with authentication, role-based access control, and a functional frontend UI to interact with the APIs.

The project is designed with **scalability, security, and clean architecture** in mind.

---

## 🚀 Features Overview

### 🔐 Authentication & Authorization
- User registration & login
- Password hashing using bcrypt
- JWT-based authentication
- Role-Based Access Control (User / Admin)

### 📝 Task Management
- Create, read, update, and delete tasks
- Ownership-based access (users can access only their own tasks)
- Admin can view all users and all tasks

### 🛡️ Security
- JWT protected routes
- Role-based middleware
- Input validation & error handling
- Environment variable based secrets

### 📄 API Documentation
- Swagger (OpenAPI) documentation available
- APIs tested using Postman

### 🎨 Frontend UI
- React (Vite) frontend
- User dashboard for task management
- Admin dashboard to view users & tasks
- Backend integration using Axios
- Simple, clean UI for demonstration

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- bcrypt
- Swagger (OpenAPI)

### Frontend
- React (Vite)
- JavaScript (ES6)
- Axios
- Plain CSS

---

## 📂 Project Structure

```text
Secure-Task-API/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── config/
│   ├── docs/
│   │   └── swagger.yaml
│   ├── README.md
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.css
│   ├── README.md
│   └── package.json
│
├── README.md   ← (This file)
└── .gitignore

⚙️ Environment Variables

Create a .env file inside backend/ using the example below:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d


▶️ How to Run the Project Locally
1️⃣ Start Backend
cd backend
npm install
npm run dev

Backend runs at:
http://localhost:5000

Swagger API Docs:
http://localhost:5000/api-docs


2️⃣ Start Frontend
cd frontend
npm install
npm run dev


Frontend runs at:
http://localhost:5173

🔐 Authentication Flow

1. Register a user
2. Login to receive JWT token
3. Token stored in browser localStorage
4. Axios attaches token to protected requests
5. User role is decoded from JWT on frontend
6. UI renders dashboard based on role


🔐 Authentication Flow

Register a user
Login to receive JWT token
Token stored in browser localStorage
Axios attaches token to protected requests
User role is decoded from JWT on frontend
UI renders dashboard based on role

📈 Scalability Notes

Modular MVC-based backend architecture

API versioning (/api/v1)
Easily extendable to microservices
Can integrate Redis for caching
Docker-ready for containerized deployment
Supports horizontal scaling with load balancers


Backend Developer 
    ##  👨‍💻 Author: Chetan Shinde
         Backend Developer, Data Analyst
        Email : chetanshinde2643@gmail.com
        GitHub: https://github.com/Chetan0521
        Phone : 9665809591


✅ Final Note

This project was built to demonstrate:
Secure backend API design
Clean code organization
Real-world authentication & authorization
Backend–frontend integration
Practical testing & documentation
