import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import DiaryList from "./DiaryList";
import "../App.css";
import DiaryForm from "./DiaryForm";

function Home() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
    
      <Button variant="contained" onClick={() => setIsClosed(false)}>
        Write a diary
      </Button>
      <DiaryList></DiaryList>
      <DiaryForm isClosed={isClosed} setIsClosed={setIsClosed}></DiaryForm>
    </>
  );
}

export default Home;
