import React from "react";

const NewsList = ({ newsList }) => {
  return (
    <div>
      {newsList.map((article) => {
        return <p>{article.title}</p>;
      })}
    </div>
  );
};

export default NewsList;