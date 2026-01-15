import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      await api.post("/auth/register", form);
      setMsg("Registration successful");
    } catch (err) {
      setMsg("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} /><br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} /><br />
      <button onClick={submit}>Register</button>
      <p>{msg}</p>
    </div>
  );
}
