<<<<<<< HEAD
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [form, setForm] = useState({ email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_xxxxxxx", "template_pdyrmfr", form, "4ZUhJ78IGMM8CpFVF")
      .then(
        () => {
          alert("تم إرسال البيانات بنجاح!");
          setForm({ email: "", phone: "" });
        },
        (error) => {
          console.error("فشل الإرسال:", error);
        }
      );
  };

  return (
    <div className="app">
      <h1>اشتركات المنصات</h1>

      <div className="cards">
        <div className="card">
          <img src="/youtube.png" alt="YouTube" />
          <h2>YouTube Premium</h2>
          <button>25 ريال</button>
        </div>
        <div className="card">
          <img src="/spotify.png" alt="Spotify" />
          <h2>Spotify Premium</h2>
          <button>25 ريال</button>
        </div>
        <div className="card">
          <img src="/disney.png" alt="Disney+" />
          <h2>Disney+</h2>
          <button>30 ريال</button>
        </div>
        <div className="card">
          <img src="/shahid.png" alt="Shahid" />
          <h2>Shahid VIP</h2>
          <button>25 ريال</button>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2>سجل بياناتك</h2>
        <input
          type="email"
          name="email"
          placeholder="الإيميل"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="رقم الجوال"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">إرسال</button>
      </form>

      <div className="account-info">
        <h3>التحويل إلى الحساب التالي:</h3>
        <p>SA21800003366080109053</p>
      </div>
    </div>
  );
}

export default App;
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 516b076534b87358c005c4c6ae7956a22f28891d
