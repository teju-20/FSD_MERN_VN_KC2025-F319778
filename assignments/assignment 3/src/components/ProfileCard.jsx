import React from 'react'

export default function ProfileCard(props) {
  return (
    <div
      style={{
        width: "250px",
        padding: "15px",
        margin: "15px",
        background: "white",
        borderRadius: "12px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px"
        }}
      />

      <h3 style={{ margin: "5px 0" }}>{props.name}</h3>
      <p style={{ margin: "0", fontWeight: "bold", color: "gray" }}>
        {props.role}
      </p>
    </div>
  )
}
