import React from "react";
import "../App.css";
import { Route, Link } from "react-router-dom";

function Diary({ title, entry, id }) {
  return (
    <div className="diary">
      <h2>{title}</h2>
      <p>{entry}</p>
    </div>
  );
}

export default Diary;
