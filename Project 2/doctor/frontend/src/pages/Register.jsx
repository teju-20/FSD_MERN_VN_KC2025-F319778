import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ role: "patient" });
  const nav = useNavigate();

  const submit = async () => {
    await API.post("/auth/register", form);
    nav("/");
  };

  return (
    <div className="box">
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <select onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      {form.role==="doctor" && (
        <>
          <input placeholder="Specialization" onChange={e=>setForm({...form,specialization:e.target.value})}/>
          <input placeholder="Experience" onChange={e=>setForm({...form,experience:e.target.value})}/>
        </>
      )}
      <button onClick={submit}>Register</button>
    </div>
  );
}
