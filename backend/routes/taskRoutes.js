const express = require("express");
const { getTasks, createTask, updateTask, deleteTask, toggleCompleteTask } = require("../controllers/taskController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, getTasks);
router.post("/", auth, createTask);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);
router.patch("/:id/toggle", auth, toggleCompleteTask); 

module.exports = router;
