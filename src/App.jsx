// src/App.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Blog from "./pages/Blog";
import "./App.css";

function Home() {
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
        { label: "شهري فردي", price: "15 ريال" },
        { label: "شهري عائلي", price: "25 ريال" }
      ]
    },
    {
      name: "Spotify Premium",
      image: "/spotify.png",
      plans: [
        { label: "شهري فردي", price: "15 ريال" },
        { label: "شهري عائلي", price: "20 ريال" }
      ]
    },
    {
      name: "Disney+",
      image: "/disney.png",
      plans: [
        { label: "شهري", price: "20 ريال" },
        { label: "3 أشهر", price: "65 ريال" }
      ]
    },
    {
      name: "Shahid VIP",
      image: "/shahid.png",
      plans: [
        { label: "شهري", price: "25 ريال" },
        { label: "شهرين + شهر مجاناً", price: "50 ريال" },
        { label: "باقة الرياضة - شهري", price: "50 ريال" },
        { label: "باقة الشامل - شهري", price: "75 ريال" }
      ]
    },
    {
      name: "OSN+",
      image: "/osn.png",
      plans: [{ label: "شهري", price: "30 ريال" }]
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
        alert("✅ تم إرسال البيانات بنجاح!");
        setForm({ user_email: "", user_phone: "", subscription: "" });
      })
      .catch((error) => {
        console.error("❌ فشل الإرسال:", error);
      });
  };

  const handleLogin = () => {
    if (!loginEmail) {
      alert("يرجى إدخال الإسم");
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
        alert("✅ تم تسجيل الدخول!");
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("❌ فشل تسجيل الدخول:", error);
      });
  };

  if (!isLoggedIn) {
    return (
      <div
        className="app login-page"
        style={{
          backgroundColor: "#FFBEC6",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem"
        }}
      >
        <img
          src="/logo.png"
          alt="Subzy Logo"
          style={{ width: "160px", marginBottom: "1rem" }}
        />
        <h1 style={{ marginBottom: "0.5rem" }}>مرحباً بك في Subzy</h1>
        <p style={{ marginBottom: "1rem" }}>سجّل دخولك للمتابعة</p>
        <input
          type="email"
          placeholder="أدخل الاسم "
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "250px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1rem"
          }}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{
            backgroundColor: "#f06292",
            color: "white",
            padding: "0.5rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          تسجيل الدخول
        </button>
      </div>
    );
  }

  return (
    <div className="app" style={{ backgroundColor: "#FFBEC6" }}>
      <img
        src="/logo.png"
        alt="Subzy Logo"
        style={{ width: "140px", margin: "1rem auto" }}
      />
      <h1>أهلاً بك في متجر Subzy للاشتراكات الرقمية</h1>
      <h2 id="subscriptions">🍿🎬 الاشتراكات الترفيهية</h2>

      <div className="cards">
        {subscriptions.map((sub, i) => (
          <div className="card" key={sub.name}>
            <img src={sub.image} alt={sub.name} />
            <h2>{sub.name}</h2>
            <button
              onClick={() => setSelectedCard(selectedCard === i ? null : i)}
            >
              اختر الباقة
            </button>

            {selectedCard === i && (
              <div className="plans-container">
                {sub.plans.map((plan, j) => (
                  <div
                    className="plan-box"
                    key={j}
                    onClick={() =>
                      setForm({ ...form, subscription: `${sub.name} - ${plan.label}` })
                    }
                  >
                    <p>{plan.label}</p>
                    <strong>{plan.price}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ✅ نموذج التسجيل مع Dropdown */}
      <form onSubmit={handleSubmit} className="register-form">
        <h3>📩 سجل بياناتك</h3>
        <input
          type="email"
          name="user_email"
          placeholder="البريد الإلكتروني"
          value={form.user_email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
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
          <option value="">اختر نوع الاشتراك</option>
          {subscriptions.map((sub, i) =>
            sub.plans.map((plan, j) => (
              <option
                key={`${i}-${j}`}
                value={`${sub.name} - ${plan.label}`}
              >
                {sub.name} - {plan.label} ({plan.price})
              </option>
            ))
          )}
        </select>
        <button type="submit">إرسال</button>
      </form>

      {/* ✅ معلومات الدفع ثابتة تحت نموذج التسجيل */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#fce4ec",
          borderRadius: "10px",
          border: "1px solid #f06292",
          textAlign: "center" // هذا يخلي النص في الوسط
        }}
      >
        <h3>📌 رقم الحساب البنكي للتحويل</h3>
        <p style={{ fontWeight: "bold", fontSize: "18px", color: "darkblue" }}>
          SA21 8000 0336 6080 1090 8353
        </p>
        <p>اسم صاحب الحساب: SALWA S. JBRSGHIR</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          background: "#f8bbd0",
          padding: "1rem",
          justifyContent: "center"
        }}
      >
        <Link to="/">الرئيسية</Link>
        <Link to="/about">من نحن</Link>
        <Link to="/policy">سياسة الاستخدام</Link>
        <Link to="/blog">المدونة</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <a
        href="https://wa.me/966544920067"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          zIndex: 1000
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "35px", height: "35px" }}
        />
      </a>
    </Router>
  );
}
