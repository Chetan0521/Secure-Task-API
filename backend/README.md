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


        ##  👨‍💻 Author: Chetan Shinde
        Email : chetanshinde2643@gmail.com
        GitHub: https://github.com/Chetan0521
        Phone : 9665809591


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

