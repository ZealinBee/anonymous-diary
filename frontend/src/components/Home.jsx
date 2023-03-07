import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import DiaryList from "./DiaryList";
import "../App.css";
import DiaryForm from "./DiaryForm";

function Home() {
  const [isClosed, setIsClosed] = useState(true);
  const [diaries, setDiaries] = useState([]);

  return (
    <>
    
      <Button variant="contained" onClick={() => setIsClosed(false)}>
        Write a diary
      </Button>
      <DiaryList diaries={diaries} setDiaries={setDiaries}></DiaryList>
      <DiaryForm isClosed={isClosed} setIsClosed={setIsClosed} diaries={diaries} setDiaries={setDiaries}></DiaryForm>
    </>
  );
}

export default Home;
