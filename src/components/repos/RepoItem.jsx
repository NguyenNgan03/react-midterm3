import React, { useContext } from "react";

import { ThemeContext } from "../ThemeContext";

function RepoItem({ repo }) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="card text-center">
      <h3>{repo?.name}</h3>
      <div>Language: {repo?.language}</div>
      <div>
        <div>Owner: {repo?.owner.login}</div>
        <img
          src={repo?.owner.avatar_url}
          alt=""
          className="round-img"
          style={{ width: "60px" }}
        />
      </div>
      <div>
        <a
          href={repo?.clone_url}
          className={`btn ${darkMode ? "" : "btn-dark"} btn-sm my-1`}
          target="_blank"
          rel="noopener noreferrer"
        >
          More
        </a>
      </div>
    </div>
  );
}
export default RepoItem;

