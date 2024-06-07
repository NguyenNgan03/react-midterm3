import React from "react";
import RepoItem from "./RepoItem";
const Repos = ({ repos }) => {
  return (
    <>
      <h1>Repos</h1>
      <div className="cardList">
        {repos.map((repo, index) => (
          <RepoItem key={index} repo={repo} />
        ))}
      </div>
    </>
  );
};
export default Repos;
