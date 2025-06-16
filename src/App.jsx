import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [form, setForm] = useState({ email: "", phone: "", subscription: "" });

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
          setForm({ email: "", phone: "", subscription: "" });
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

        {/* نوع الاشتراك */}
        <select
          name="subscription"
          value={form.subscription}
          onChange={handleChange}
          required
        >
          <option value="">-- حدد نوع الاشتراك --</option>
          <option value="YouTube Premium">YouTube Premium</option>
          <option value="Spotify Premium">Spotify Premium</option>
          <option value="Disney+">Disney+</option>
          <option value="Shahid VIP">Shahid VIP</option>
        </select>

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
