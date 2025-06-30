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
    </div>
  );
}

export default Home;
