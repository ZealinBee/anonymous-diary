import React from "react";
import Diary from "./Diary";
import { useState, useEffect } from "react";
import "../App.css"


function DiaryList() {

  const [diaries, setDiaries] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/diaries")
      .then((res) => res.json())
      .then((data) => {
        setDiaries(data)
      })
      .catch((error) => {
        console.log("Error fetcing data: ", error)
      });
  }, []);

  return (
    <>
      <main>
        {diaries.map((diary) => {
          console.log(diary)
          return (
            <Diary title={diary.title} entry={diary.entry} id={diary.id}></Diary>
          );
        })}
   
      </main>
    </>
  );
}

export default DiaryList;
