import { useState } from "react";
import DiaryForm from "./components/DiaryForm";
import "./App.css";
import Button from "@mui/material/Button";
import DiaryList from "./components/DiaryList";

function App() {
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

export default App;
