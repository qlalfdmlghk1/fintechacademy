import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    let data = "아직 아무것도 없습니다.";
    axios
      .get(
        "https://newsapi.org/v2/everything?q=삼성&from=2022-07-10&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko"
      )
      .then((response) => {
        data = response.data;
        console.log(data);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>요청 보내기</button>
    </div>
  );
};

export default AxiosTest;