import React, { useState } from "react";
import Welcome from "./Welcome";

const ListComponent = () => {
  const [list, setList] = useState([
    { username: "홍길동", age: 33, height: 183 },
    { username: "고길동", age: 43, height: 123 },
    { username: "둘리", age: 23, height: 133 },
  ]);
  return (
    <div>
      {/* <Welcome username={list[0].username} age={list[0].age}></Welcome>
      <Welcome username={list[1].username} age={list[1].age}></Welcome>
      <Welcome username={list[2].username} age={list[2].age}></Welcome> */}
      {list.map((element) => {
        return (
          <Welcome username={element.username} age={element.age}></Welcome>
        );
      })}
    </div>
  );
};

export default ListComponent;