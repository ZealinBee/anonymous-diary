import React from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";
function Diarypage() {
  const id = useParams();
  const [currentDiary, setCurrentDiary] = useState({});
  useEffect(() => {
    fetch(`${import.meta.env.VITE_DEV_URL}/diaries`)
      .then((res) => res.json())
      .then((data) => {
        let foundDiary = data.find(
          (diary) =>
            JSON.stringify(diary.id).slice(1, -1) === Object.values(id).join("")
        );
        if (foundDiary) {
          setCurrentDiary(foundDiary);
        } else {
          setCurrentDiary({ title: "Diary Not Found", entry: "are you trying to mess around with the url?" });
        }
      });
  }, []);

  return (
    <>
      <Link to={"/"}>
        <Button variant="contained" sx={{ marginTop: 2, marginLeft:2}}>Back to home</Button>
      </Link>
      <div class="diary-page" >
        <h1>{currentDiary.title}</h1>
        <pre>{currentDiary.entry}</pre>
      </div>
    </>
  );
}

export default Diarypage;
