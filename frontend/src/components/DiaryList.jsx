import React from "react";
import Diary from "./Diary";
import { useState, useEffect } from "react";
import "../App.css";

function DiaryList({ diaries, setDiaries, setOriginalDiaries }) {
  useEffect(() => {
    fetch(`${import.meta.env.VITE_DEV_URL}/diaries`)
      .then((res) => res.json())
      .then((data) => {
        setDiaries(data);
        setOriginalDiaries(data);
      })
      .catch((error) => {
        console.log("Error fetcing data: ", error);
      });
  }, []);
  
 // Not really reversed, just sorted from newest to oldest, this is probably anti pattern but oh well
  const reversedDiary = [...diaries].reverse();

  return (
    <>
      <main>
        {reversedDiary.map((diary) => {
          if (diary.entry.length > 100) {
            const shorterEntry =
              diary.entry.split(" ").slice(0, 15).join(" ") + "...";
            return (
              <Diary
                title={diary.title}
                entry={shorterEntry}
                id={diary.id}
              ></Diary>
            );
          } else {
            return (
              <Diary
                title={diary.title}
                entry={diary.entry}
                id={diary.id}
              ></Diary>
            );
          }
        })}
      </main>
    </>
  );
}

export default DiaryList;
