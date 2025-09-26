import React, { useEffect } from "react";

const ProductCard = ({ title, price, image }) => {
  useEffect(() => {
    try {
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("data-ad-client", "ca-pub-5390945752845543");
      document.head.appendChild(script);
    } catch (error) {
      console.error("Error loading Google AdSense script:", error);
    }
  }, []);

  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.price}>{price} SAR</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#330000",
    borderRadius: "12px",
    padding: "20px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    color: "#ffe6f0",
    margin: "10px 0",
  },
  price: {
    fontSize: "16px",
    color: "#ffe6f0",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#ff99cc",
    color: "#1a0000",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ProductCard;
