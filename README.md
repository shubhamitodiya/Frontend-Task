# MyTaskManager (MERN Stack Project)

<<<<<<< HEAD
![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![React](https://img.shields.io/badge/React-18.2-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-purple)

---

## Description
A full-stack MERN task manager application featuring user authentication and a responsive dashboard. Users can register, log in, and manage tasks with CRUD operations.

---
=======
## Description
A simple full-stack MERN task manager with user authentication.
>>>>>>> 6aa0e08 (Add project screenshots)

## Features
- User registration and login (JWT authentication)
- Create, read, update, delete tasks
- Protected dashboard routes (login required)
- Password hashing with bcrypt
- API tested using Postman
<<<<<<< HEAD
- Responsive UI with Bootstrap

---

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Authentication:** JWT
- **Styling:** Bootstrap

---
=======

## Tech Stack
- Frontend: React.js
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT
- Styling: Bootstrap
>>>>>>> 6aa0e08 (Add project screenshots)

## Installation / Setup

### 1. Clone the repository
```bash
<<<<<<< HEAD
git clone https://github.com/shubhamitodiya/Frontend-Task

2. Backend Setup
cd backend
npm install

Create a .env file with placeholders:
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>


Start the backend:
npm start

3. Frontend Setup
=======
git clone <your-github-link>
2. Backend
bash
Copy code
cd backend
npm install
Create a .env file with placeholders:

ini
Copy code
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
Start the backend:

bash
Copy code
npm start
3. Frontend
bash
Copy code
>>>>>>> 6aa0e08 (Add project screenshots)
cd ../frontend
npm install
npm start
Open your browser at http://localhost:3000

<<<<<<< HEAD
| Method | Endpoint              | Description                       |
| ------ | --------------------- | --------------------------------- |
| POST   | /api/auth/register    | Register a new user               |
| POST   | /api/auth/login       | Login user and receive JWT token  |
| GET    | /api/tasks            | Get all tasks (auth required)     |
| POST   | /api/tasks            | Create a new task (auth required) |
| PUT    | /api/tasks/:id        | Update task (auth required)       |
| PATCH  | /api/tasks/:id/toggle | Toggle task completion            |
| DELETE | /api/tasks/:id        | Delete task                       |


Notes on Scaling

Frontend and backend are separated; backend is modular for easy scaling.
In production: deploy backend on Render/Heroku and frontend on Vercel/Netlify.

Author
Shubham Itodiya

=======
API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user, get JWT token
GET	/api/tasks	Get all tasks (auth required)
POST	/api/tasks	Create a new task (auth required)
PUT	/api/tasks/:id	Update task (auth required)
PATCH	/api/tasks/:id/toggle	Toggle task completion
DELETE	/api/tasks/:id	Delete task

Postman Collection
Exported Postman collection is included in the repository for API testing.

Notes on Scaling
Frontend and backend are separated; backend is modular for easy scaling.

In production: deploy backend on Render/Heroku and frontend on Vercel/Netlify.

Author
[Your Name]
>>>>>>> 6aa0e08 (Add project screenshots)
git add README.md
