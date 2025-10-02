import { useEffect, useState } from "react";
import api from "../utils/api";
import "./TaskList.css";

export default function TaskList() {
  const token = localStorage.getItem("token");

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTask, setEditingTask] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async () => {
    if (!newTask.title) return;
    try {
      await api.post("/tasks", newTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNewTask({ title: "", description: "" });
      setShowAddForm(false);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowAddForm(true);
    setNewTask({ title: task.title, description: task.description });
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/tasks/${editingTask._id}`, newTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditingTask(null);
      setNewTask({ title: "", description: "" });
      setShowAddForm(false);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (task) => {
    try {
      // Optimistic UI update with animation
      setTasks(prev =>
        prev.map(t =>
          t._id === task._id ? { ...t, completed: !t.completed, toggling: true } : t
        )
      );

      // Remove animation class after animation ends
      setTimeout(() => {
        setTasks(prev =>
          prev.map(t =>
            t._id === task._id ? { ...t, toggling: false } : t
          )
        );
      }, 300); // match CSS animation duration

      // Update backend
      await api.put(
        `/tasks/${task._id}`,
        { completed: !task.completed },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Tasks</h3>

      {/* Add Task Button */}
      {!showAddForm && (
        <button
          className="btn btn-success mb-3"
          onClick={() => setShowAddForm(true)}
        >
          Add New Task
        </button>
      )}

      {/* Add / Edit Task Form */}
      {showAddForm && (
        <div className="add-task-form mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
          {editingTask ? (
            <button className="btn btn-warning w-100" onClick={handleUpdate}>
              Update Task
            </button>
          ) : (
            <button className="btn btn-success w-100" onClick={handleAdd}>
              Add Task
            </button>
          )}
        </div>
      )}

      {/* Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Task List */}
      <div className="task-list">
        {filteredTasks.length === 0 && <p className="text-muted">No tasks found.</p>}

        {filteredTasks.map((task) => (
          <div
            key={task._id}
            className={`task-item ${task.completed ? "completed" : ""} ${task.toggling ? "toggle-animation" : ""}`}
          >
            <div>
              <h5 className="task-title">{task.title}</h5>
              <p className="task-desc">{task.description}</p>
            </div>
            <div>
              <button
                className={`btn btn-sm me-2 ${task.completed ? "btn-success" : "btn-outline-success"}`}
                onClick={() => toggleComplete(task)}
              >
                ✓
              </button>
              <button
                className="btn btn-sm btn-primary me-2"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
