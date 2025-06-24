import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    user_email: "",
    user_phone: "",
    subscription: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📤 ترسل البيانات:", form);

    emailjs
      .send("subzy", "template_pdyrmfr", form, "4ZUhJ78IGMM8CpFVF")
      .then(() => {
        alert("✅ تم إرسال البيانات بنجاح!");
        setForm({ user_email: "", user_phone: "", subscription: "" });
      })
      .catch((error) => {
        console.error("❌ فشل الإرسال:", error);
      });
  };

  return (
    <div className="app">
      <h1>اشتركات المنصات</h1>

      <div className="cards">
        {[
          { img: "/youtube.png", name: "YouTube Premium", price: "25 ريال" },
          { img: "/spotify.png", name: "Spotify Premium", price: "25 ريال" },
          { img: "/disney.png", name: "Disney+", price: "30 ريال" },
          { img: "/shahid.png", name: "Shahid VIP", price: "25 ريال" },
        ].map((sub, i) => (
          <div className="card" key={i}>
            <img src={sub.img} alt={sub.name} />
            <h2>{sub.name}</h2>
            <p className="price">{sub.price}</p>
          </div>
        ))}
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2>سجل بياناتك</h2>

        <input
          type="email"
          name="user_email"
          placeholder="الإيميل"
          value={form.user_email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="user_phone"
          placeholder="رقم الجوال"
          value={form.user_phone}
          onChange={handleChange}
          required
        />

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
