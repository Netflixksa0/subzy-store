// src/pages/Home.jsx
import { Link } from "react-router-dom";
import youtubeImg from "../assets/youtube.png";
import spotifyImg from "../assets/spotify.png";
import disneyImg from "../assets/disney.png";
import shahidImg from "../assets/shahid.png";

function Home() {
  return (
    <div className="app" style={{ padding: "20px", direction: "rtl" }}>
      <h1>اشتركات المنصات</h1>
      <div className="cards" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div className="card" style={{ border: "1px solid #ccc", padding: "10px", width: "220px" }}>
          <img src={youtubeImg} alt="YouTube" style={{ width: "100%" }} />
          <h2>YouTube Premium</h2>
          <p>استمتع بمشاهدة بدون إعلانات.</p>
          <Link to="/login"><button>اشترك الآن</button></Link>
        </div>

        <div className="card" style={{ border: "1px solid #ccc", padding: "10px", width: "220px" }}>
          <img src={spotifyImg} alt="Spotify" style={{ width: "100%" }} />
          <h2>Spotify Premium</h2>
          <p>موسيقى بدون إعلانات وجودة عالية.</p>
          <Link to="/login"><button>اشترك الآن</button></Link>
        </div>

        <div className="card" style={{ border: "1px solid #ccc", padding: "10px", width: "220px" }}>
          <img src={disneyImg} alt="Disney+" style={{ width: "100%" }} />
          <h2>Disney+</h2>
          <p>أفلام ديزني وعالم مارفل.</p>
          <Link to="/login"><button>اشترك الآن</button></Link>
        </div>

        <div className="card" style={{ border: "1px solid #ccc", padding: "10px", width: "220px" }}>
          <img src={shahidImg} alt="Shahid" style={{ width: "100%" }} />
          <h2>Shahid VIP</h2>
          <p>أحدث المسلسلات والأفلام العربية.</p>
          <Link to="/login"><button>اشترك الآن</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
