import React from "react";
import Diary from "./Diary";
import "../App.css"

function DiaryList() {
  const diaries = [
    {
      title: "My first diary",
      entry: "This is my first diary",
    },
    {
      title: "My second diary",
      entry: "This is my second diary",
    },
    {
      title: "My third diary",
      entry: "This is my third diary",
    }
  ]
  return (
    <>
      <main>
        {diaries.map((diary) => {
          return (
            <Diary title={diary.title} entry={diary.entry}></Diary>
          );
        })}
      </main>
    </>
  );
}

export default DiaryList;
