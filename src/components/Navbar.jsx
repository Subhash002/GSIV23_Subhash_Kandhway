import { useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setSearchTerm }) => {
  const searchRef = useRef(null);
  const { pathname } = useLocation();
  console.log(pathname);
  const onEnterInput = (event) => {
    if (event.key === "Enter") {
      setSearchTerm(searchRef.current.value);
      searchRef.current.value = "";
    }
  };

  return (
    <div className="navbar">
      {pathname.startsWith("/movies/") ? (
        <h3>Movie Details</h3>
      ) : (
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            ref={searchRef}
            placeholder="Search"
            onKeyPress={onEnterInput}
          />
        </div>
      )}

      <Link to={"/"}>
        <HomeIcon style={{ color: "black" }} />
      </Link>
    </div>
  );
};

export default Navbar;
