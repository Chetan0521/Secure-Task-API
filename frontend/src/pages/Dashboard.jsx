import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data.data);
  };

  const addTask = async () => {
    if (!title) return;
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="dashboard">
      <button className="logout" onClick={logout}>Logout</button>

      <h2>Your Tasks</h2>

      <input
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {tasks.map((t) => (
        <div key={t._id} className="task">
          <span>{t.title}</span>
        </div>
      ))}
    </div>
  );
}
