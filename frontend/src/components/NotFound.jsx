import React from "react";
import "../App.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="not-found">
      <h1>404 Not Found</h1>
      <p>The page you're looking for does not exist</p>
      <Link to="/">
        <Button
          variant="outlined"
          type="submit"
          sx={{ maxWidth: "150px", margin: "1rem auto" }}
        >
          Back To Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
