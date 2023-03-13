import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import DiaryList from "./DiaryList";
import "../App.css";
import DiaryForm from "./DiaryForm";
import Selection from "./Selection";

function Home() {
  const [isClosed, setIsClosed] = useState(true);
  const [diaries, setDiaries] = useState([]);
  const [originalDiaries, setOriginalDiaries] = useState([]);
  return (
    <>
      <nav>
        <Button variant="contained" onClick={() => setIsClosed(false)}>
          Write a diary
        </Button>
        <Selection setDiaries={setDiaries} originalDiaries={originalDiaries}></Selection>
      </nav>

      <DiaryList diaries={diaries} setDiaries={setDiaries} setOriginalDiaries={setOriginalDiaries}></DiaryList>
      <DiaryForm
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        diaries={diaries}
        setDiaries={setDiaries}
      ></DiaryForm>
    </>
  );
}

export default Home;
