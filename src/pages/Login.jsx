import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nPhone: ${phone}`);
    navigate("/checkout");
  };

  return (
    <div style={{ direction: "rtl", padding: "2rem" }}>
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleLogin}>
        <label>الإيميل:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>كلمة السر:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>رقم الهاتف:</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <button type="submit">دخول</button>
      </form>
    </div>
  );
}

export default Login;
