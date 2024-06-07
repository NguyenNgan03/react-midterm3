import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeContext } from "../ThemeContext";
const UserItem = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const { login, avatar_url} = props.user;
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className={`btn btn-sm my-1 ${darkMode ? "btn-light" : "btn-dark"}`}
        >
          More
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
