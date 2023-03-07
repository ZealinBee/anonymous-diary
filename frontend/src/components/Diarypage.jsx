import React from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
function Diarypage() {
  const id = useParams();
  const [currentDiary, setCurrentDiary] = useState({});
  useEffect(() => {
    fetch(`https://anonymous-diary-fullstack.up.railway.app/diaries/`)
      .then((res) => res.json())
      .then((data) => {
        data.map((diary) => {
          if (
            JSON.stringify(diary._id).slice(1, -1) ===
            Object.values(id).join("")
          ) {
            setCurrentDiary(diary);
          } else {
            console.log("nope");
          }
        });
      });
  });

  return (
    <>
      <Link to={"/"}>
        {" "}
        <Button variant="contained">Back to home</Button>
        <div class="diary-page">
          <h1>{currentDiary.title}</h1>
          <p>
            {currentDiary.entry}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Diarypage;
