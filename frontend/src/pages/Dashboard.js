import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";

export default function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/login");
  }, [token]);

  return (
    <div>
      <Navbar />
      <TaskList />
    </div>
  );
}
