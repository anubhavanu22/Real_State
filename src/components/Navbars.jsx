// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../app.css";
function Navbars (){
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#f2f2f2",
      }}
    >
      <div>
        {user && (
          <>
            <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
          </>
        )}
      </div>
      <div>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbars;
