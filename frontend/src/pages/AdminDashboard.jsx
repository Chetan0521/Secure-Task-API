const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};


import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  const loadData = async () => {
    const usersRes = await api.get("/admin/users");
    const tasksRes = await api.get("/admin/tasks");
    setUsers(usersRes.data.data);
    setTasks(tasksRes.data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <button className="logout" onClick={logout}>Logout</button>


      <h3>All Users</h3>
      {users.map((u) => (
        <div key={u._id} className="task">
          <span>{u.email}</span>
          <span>({u.role})</span>
        </div>
      ))}

      <hr />

      <h3>All Tasks</h3>
      {tasks.map((t) => (
        <div key={t._id} className="task">
          <span>{t.title}</span>
          <span>— {t.user.email}</span>
        </div>
      ))}
    </div>
  );
}
