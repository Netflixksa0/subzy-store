import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    user_email: "",
    user_phone: "",
    subscription: ""
  });

  const [selectedCard, setSelectedCard] = useState(null); // ✅ لحالة عرض الباقات

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const subscriptions = [
    {
      name: "YouTube Premium",
      image: "/youtube.png",
      plans: [
        { label: " شهري فردي", price: " 15ريال" },
        { label:" شهري عائلي", price: "25 ريال" }
      ]
    },
    {
      name: "Spotify Premium",
      image: "/spotify.png",
      plans: [
        { label: " شهري فردي", price: "15 ريال" },
        { label: "شهري عائلي", price: "20 ريال" }
      ]
    },
    {
      name: "Disney+",
      image: "/disney.png",
      plans: [
        { label: "شهري", price: "20 ريال" },
        { label: "3 اشهر", price: "65 ريال" }
      ]
    },
    {
      name: "Shahid VIP",
      image: "/shahid.png",
      plans: [
        { label: "شهري", price: "25 ريال" },
        { label: "شهرين وشهر مجانا", price: "50 ريال" },
        { label: "باقة الرياضة - شهري", price: "50 ريال" },
        { label: "باقة الشامل - شهري", price: "75 ريال" }, 
      ]
    },
    {
      name: "OSN+",
      image: "/osn.png",
      plans: [
        { label: "شهري", price: "30 ريال" },
      ]
    },
    {
      name: "Watch It",
      image: "/watchit.png",
      plans: [
        { label: "سنوي بإعلانات", price: "60 ريال" },
        { label: "سنوي بدون إعلانات", price: "140 ريال" },
        { label: "شهري بإعلانات", price: "20 ريال" },
        { label: "شهري بدون إعلانات", price: "15 ريال" }
      ]
    }
  ];

  return (
    <div className="app">
      <h1>أهلاً بك في متجر Subzy للاشتراكات الرقمية</h1>
      <h2>🍿🎬 الاشتراكات الترفيهية</h2>

      <div className="cards">
        {subscriptions.map((sub, i) => (
          <div className="card" key={i}>
            <img src={sub.image} alt={sub.name} />
            <h2>{sub.name}</h2>
            <button onClick={() => setSelectedCard(selectedCard === i ? null : i)}>
              اختر الباقة
            </button>

            {selectedCard === i && (
              <div className="plans-container">
                {sub.plans.map((plan, j) => (
                  <div className="plan-box" key={j}>
                    <p>{plan.label}</p>
                    <strong>{plan.price}</strong>
                  </div>
                ))}
              </div>
            )}
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
          {subscriptions.map((sub) =>
            sub.plans.map((plan, index) => (
              <option
                key={`${sub.name}-${index}`}
                value={`${sub.name} – ${plan.label}`}
              >
                {sub.name} – {plan.label}
              </option>
            ))
          )}
        </select>

        <button type="submit">إرسال</button>
      </form>

      <div className="account-info">
        <h3>التحويل إلى الحساب التالي:</h3>
        <p>SA21800003366080109053</p>
<a
  href="https://wa.me/966544920067" // ← غيري الرقم لرقمك
  className="whatsapp-float"
  target="_blank"
>
  💬 تواصل معنا على واتساب
</a>

      </div>
    </div>
  );
}

export default App;
