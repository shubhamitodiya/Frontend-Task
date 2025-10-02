# MyTaskManager (MERN Stack Project)

## 🚀 Description
A simple full-stack MERN task manager with user authentication and task management features.

---

## ✅ Features
- User registration and login (JWT authentication)
- Create, read, update, delete tasks
- Protected dashboard routes (login required)
- Password hashing with bcrypt
- API tested using Postman
- Responsive UI with Bootstrap

---

## 🛠 Tech Stack
- **Frontend:** React.js  
- **Backend:** Node.js + Express  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Styling:** Bootstrap  

---

## ⚡ Installation / Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shubhamitodiya/Frontend-Task.git
    

2️⃣ Backend Setup
cd backend
npm install

Create a .env file:
MONGO_URI=mongodb+srv://<username>:<new_password>@cluster0.unyolsj.mongodb.net/<database_name>?retryWrites=true&w=majority
JWT_SECRET=<your_jwt_secret>

Start the backend:
node server.js

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start
Open your browser at http://localhost:3000


| Method | Endpoint              | Description                       |
| ------ | --------------------- | --------------------------------- |
| POST   | /api/auth/register    | Register new user                 |
| POST   | /api/auth/login       | Login user, get JWT token         |
| GET    | /api/tasks            | Get all tasks (auth required)     |
| POST   | /api/tasks            | Create a new task (auth required) |
| PUT    | /api/tasks/:id        | Update task (auth required)       |
| PATCH  | /api/tasks/:id/toggle | Toggle task completion            |
| DELETE | /api/tasks/:id        | Delete task                       |


📈 Notes on Scaling

Frontend and backend are separated for modular scaling.
In production: backend on Render/Heroku, frontend on Vercel/Netlify.

.

👨‍💻 Author

Shubham Itodiya