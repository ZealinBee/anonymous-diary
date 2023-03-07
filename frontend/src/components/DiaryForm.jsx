import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";

function DiaryForm(props) {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const { isClosed, setIsClosed, diaries, setDiaries } = props;

  async function submitForm(e) {
    e.preventDefault();
    if(!title || !entry) {
      alert("Please fill out both fields")
      return
    }
    if(title.length > 100) {
      alert("Title must be less than 100 characters")
      return
    }
    if(entry.length > 1000) {
      alert("Entry must be less than 5000 characters")
      return
    }
    if(title.length < 2) {
      alert("Title must be at least 2 character")
      return
    }
    if(entry.length < 2) {
      alert("Entry must be at least 2 character")
      return
    }
    setIsClosed(true);
    await fetch(`${process.env.URL}/diaries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        entry: entry,
        title: title,
        date: new Date().toLocaleDateString(),
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    setDiaries([...diaries, {entry: entry, title: title, date: new Date().toLocaleDateString()}])
    setTitle("");
    setEntry("");

  }
  return (
    <>
      {!props.isClosed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: "150px",
            width: "50%",
            margin: "auto",
            backgroundColor: "#effaf6",
            padding: "35px",
            borderRadius: "10px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          component="form"
          validate="true"
          autoComplete="off"
          onSubmit={(e) => submitForm(e)}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: "3px",
              right: "3px",
            }}
            onClick={() => setIsClosed(true)}
          >
            <CloseIcon />
          </IconButton>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            sx={{ marginBottom: "15px", color: "#0c0c0d" }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Entry"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            multiline
            required
            rows={10}
            sx={{ marginBottom: "15px", color: "#0c0c0d" }}
          />
          <Button
            variant="outlined"
            type="submit"
            sx={{ maxWidth: "150px", margin: "0 auto" }}
          >
            Submit Entry
          </Button>
        </Box>
      )}
    </>
  );
}

export default DiaryForm;
