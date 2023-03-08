import React from "react";
import Diary from "./Diary";
import { useState, useEffect } from "react";
import "../App.css";

function DiaryList({diaries, setDiaries}) {

  useEffect(() => {
    fetch(`http://localhost:8000/diaries`)
      .then((res) => res.json())
      .then((data) => {
        setDiaries(data);
      })
      .catch((error) => {
        console.log("Error fetcing data: ", error);
      });
  }, []);

  return (
    <>
      <main>
        {diaries.map((diary) => {
          if (diary.entry.length > 100) {
            const shorterEntry =
              diary.entry.split(" ").slice(0, 32).join(" ") + "...";
            return (
              <Diary
                title={diary.title}
                entry={shorterEntry}
                id={diary._id}
              ></Diary>
            );
          } 
          else {
            return (
              <Diary
                title={diary.title}
                entry={diary.entry}
                id={diary._id}
              ></Diary>
            );
          }
        })}
      </main>
    </>
  );
}

export default DiaryList;
