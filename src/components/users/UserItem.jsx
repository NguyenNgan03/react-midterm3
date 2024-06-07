import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeContext } from "../ThemeContext";
const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  const { darkMode } = useContext(ThemeContext);
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
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
