import { Search } from "lucide-react";
import "./header.css";

const Header = () => {
  return (
    <header className="news-header">
      <h1 className="logo">Logo</h1>

      <div className="searchBar">
        <form>
          <input type="text" placeholder="search" />
          <button type="submit">
            <Search type="icon" size={"15"} />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
