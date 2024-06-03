import React from "react";

function Card(props) {
  return (
    <div
      style={{
        marginTop: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // border: "2px solid red",
      }}
    >
      <img style={{ width: "50px" }} src={props.img} />
      <h3 style={{ marginTop: "10px", marginBottom: "10px" }}>Card Sorting</h3>
      <p style={{ marginBottom: "10px" }}>
        Discover how people group and label information.
      </p>
      <button
        style={{
          padding: "10px",
          background: "#e1e1e1",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Learn more
      </button>
    </div>
  );
}

export default Card;
