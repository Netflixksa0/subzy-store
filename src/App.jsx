import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    user_email: "",
    user_phone: "",
    subscription: ""
  });

  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");

  const subscriptions = [
    {
      name: "YouTube Premium",
      image: "/youtube.png",
      plans: [
        { label: " شهري فردي", price: " 15ريال" },
        { label: " شهري عائلي", price: "25 ريال" }
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
        { label: "باقة الشامل - شهري", price: "75 ريال" }
      ]
    },
    {
      name: "OSN+",
      image: "/osn.png",
      plans: [
        { label: "شهري", price: "30 ريال" }
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("subzy", "template_pdyrmfr", form, "4ZUhJ78IGMM8CpFVF")
      .then(() => {
        alert("\u2705 تم إرسال البيانات بنجاح!");
        setForm({ user_email: "", user_phone: "", subscription: "" });
      })
      .catch((error) => {
        console.error("\u274C فشل الإرسال:", error);
      });
  };

  const handleLogin = () => {
    if (!loginEmail) {
      alert("'يرجى إدخال الإسم");
      return;
    }

    emailjs
      .send(
        "subzy",
        "template_pdyrmfr",
        {
          user_email: loginEmail,
          user_phone: "تم تسجيل الدخول",
          subscription: "دخول المستخدم"
        },
        "4ZUhJ78IGMM8CpFVF"
      )
      .then(() => {
        alert("\u2705 تم تسجيل الدخول!");
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("\u274C فشل تسجيل الدخول:", error);
      });
  };

  if (!isLoggedIn) {
    return (
      <div className="app login-page" style={{ backgroundColor: "#FFBEC6", minHeight: "100vh", textAlign: "center", padding: "2rem" }}>
        <img src="/logo.png" alt="Subzy Logo" style={{ width: "160px", marginBottom: "1rem" }} />
        <h1 style={{ marginBottom: "0.5rem" }}>مرحباً بك في Subzy</h1>
        <p style={{ marginBottom: "1rem" }}>سجّل دخولك للمتابعة</p>
        <input
          type="email"
          placeholder="يرجى ادخال الاسم "
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          style={{ padding: "0.5rem", width: "250px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "1rem" }}
        />
        <br />
        <button onClick={handleLogin} style={{ backgroundColor: "#f06292", color: "white", padding: "0.5rem 1.5rem", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
          تسجيل الدخول
        </button>
        <br />
        <a href="#subscriptions" style={{ display: "inline-block", marginTop: "1rem", color: "#f06292", fontWeight: "bold", textDecoration: "underline" }}>
          
        </a>
      </div>
    );
  }

  return (
    <div className="app" style={{ backgroundColor: "#FFBEC6" }}>
      <img src="/logo.png" alt="Subzy Logo" style={{ width: "140px", margin: "1rem auto" }} />
      <h1>أهلاً بك في متجر Subzy للاشتراكات الرقمية</h1>
      <h2 id="subscriptions">🍿🎬 الاشتراكات الترفيهية</h2>

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
          href="https://wa.me/966544920067"
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
