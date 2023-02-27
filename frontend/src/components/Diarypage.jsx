import React from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import "../App.css";
function Diarypage() {
  const id = useParams();
  return (
    <>
      <Link to={"/"}>
        {" "}
        <Button variant="contained">Back to home</Button>
        <div class="diary-page">
          <h1>This is my first diary</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio molestias eaque dignissimos a eum assumenda accusamus. Impedit itaque deserunt alias saepe ad ipsam! Error totam veniam voluptas laudantium, enim vero non neque obcaecati fuga saepe recusandae sit hic et nobis molestiae deserunt amet laborum. Fugit velit eaque sit at!</p>
        </div>
      </Link>
    </>
  );
}

export default Diarypage;
