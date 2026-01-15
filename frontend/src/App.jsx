import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import { getUserRole } from "./services/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
  const role = getUserRole();

  if (!loggedIn) {
    return (
      <div className="container">
        <div>
          <Register />
          <br />
          <Login onLogin={() => setLoggedIn(true)} />
        </div>
      </div>
    );
  }

  if (role === "admin") {
    return <AdminDashboard />;
  }

  return <Dashboard />;
}

export default App;
