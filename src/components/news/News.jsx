import Calendar from "../calendar/Calendar";
import Weather from "../weather/Weather";
import "./news.css";

const News = () => {
  return (
    <div className="news">
      <header className="news-header">news Header</header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">User</div>
          <nav className="nav-categories">Cat</nav>
        </div>

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
