import React from "react";

import Card from "./Card";
function Card_Section() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit ,minmax(250px,1fr))",
        gap: "10px",
      }}
    >
      <Card img="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg" />
      <Card img="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg" />
      <Card img="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg" />
      <Card img="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg" />
      <Card img="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg" />
      <Card img="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/6355e6254d0d41e7d3aa16c0_card-sorting.svg" />
    </div>
  );
}

export default Card_Section;
