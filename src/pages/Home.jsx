// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const subscriptions = [
    {
      name: "YouTube Premium",
      plans: [
        { label: "شهري فردي", price: "15 ريال" },
        { label: "شهري عائلي", price: "25 ريال" }
      ]
    },
    {
      name: "Shahid VIP",
      plans: [
        { label: "شهري", price: "25 ريال" },
        { label: "شهرين + شهر مجاناً", price: "50 ريال" },
        { label: "باقة الرياضة - شهري", price: "50 ريال" },
        { label: "باقة الشامل - شهري", price: "75 ريال" }
      ]
    }
  ];

  return (
    <div style={{ direction: "rtl", padding: "20px", backgroundColor: "#ffe5ec" }}>
      <h1 style={{ textAlign: "center" }}>البرامج المتاحة</h1>

      {subscriptions.map((sub, i) => (
        <div
          key={i}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "8px",
            background: "#fff"
          }}
        >
          <h2>{sub.name}</h2>
          {sub.plans.map((plan, j) => (
            <p key={j}>
              {plan.label} - {plan.price}
            </p>
          ))}
          <Link to="/login">
            <button>اشترك الآن</button>
          </Link>
        </div>
      ))}

      {/* ✅ معلومات الدفع تظهر أسفل البرامج */}
      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#fce4ec",
          borderRadius: "10px",
          border: "2px solid #f06292",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          color: "darkblue"
        }}
      >
        <h3>📌 رقم الحساب البنكي للتحويل</h3>
        <p>SA21 8000 0336 6080 1090 8353</p>
        <p>اسم صاحب الحساب: SALWA S. JBRSGHIR</p>
      </div>
    </div>
  );
}

export default Home;
