import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 shadow-sm">
      <span className="navbar-brand mb-0 h1">Task Manager</span>
      <button className="btn btn-outline-danger" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
