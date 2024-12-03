import Calendar from "../calendar/Calendar";
import Header from "../header/Header";
import Navbar from "../nav/Navbar";
import Weather from "../weather/Weather";
import "./news.css";
const News = () => {
  return (
    <div className="news">
      <Header />
      <div className="news-content">
        <Navbar />

        {/* news */}
        <div className="news-section">
          <div className="headline">Headline</div>
          <div className="news-grid">new grid</div>
        </div>

        {/* blogs */}
        <div className="my-blogs">Blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">news Footer</footer>
    </div>
  );
};

export default News;
