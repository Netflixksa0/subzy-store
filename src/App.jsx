import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// ✅ استيراد الصفحات من مجلد pages
import About from "./pages/About";
import Policy from "./pages/Policy";
import Blog from "./pages/Blog";

// ✅ الكود الأصلي للمتجر
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
          placeholder="أدخل بريدك الإلكتروني"
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
          <div className="card" key={i}>
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

      {/* ✅ نموذج التسجيل */}
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
        <input
          type="text"
          name="subscription"
          placeholder="نوع الاشتراك"
          value={form.subscription}
          onChange={handleChange}
          required
        />
        <button type="submit">إرسال</button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* ✅ روابط التصفح */}
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
    </Router>
  );
}
