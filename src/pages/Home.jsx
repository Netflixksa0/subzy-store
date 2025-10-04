// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ direction: "rtl", padding: "20px" }}>
      <h1>البرامج المتاحة</h1>
      <div style={{ marginTop: "20px" }}>
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "15px" }}>
          <h2>YouTube Premium</h2>
          <p>السعر: 25 ريال</p>
          <Link to="/login">
            <button>اشترك الآن</button>
          </Link>
        </div>
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "15px" }}>
          <h2>Shahid VIP</h2>
          <p>السعر: 20 ريال</p>
          <Link to="/login">
            <button>اشترك الآن</button>
          </Link>
        </div>
      </div>

      {/* ✅ إضافة رقم الحساب البنكي */}
      <div style={{ marginTop: "30px", padding: "15px", background: "#fce4ec", borderRadius: "10px" }}>
        <h3>📌 رقم الحساب البنكي للتحويل:</h3>
        <p style={{ fontWeight: "bold", fontSize: "18px", color: "darkblue" }}>
          SA21 8000 0336 6080 1090 8353
           <p>اسم صاحب الحساب: SALWA S. JBRSGHIR</p>
        </p>
      </div>
    </div>
  );
}

export default Home;
