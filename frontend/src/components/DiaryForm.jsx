import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {useEffect, useState} from "react"

function DiaryForm(props) {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const { isClosed, setIsClosed } = props;

  function submitForm(e) {
    e.preventDefault()
    setIsClosed(true)
    fetch("http://localhost:8000/diaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        entry:entry,
        date: new Date().toLocaleDateString(),
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(error => console.log(error))
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
            sx={{ marginBottom: "15px", color: "#0c0c0d" }} // override default margin for TextField
          />
          <TextField
            id="outlined-multiline-static"
            label="Entry"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            multiline
            required
            rows={10}
            sx={{ marginBottom: "15px", color: "#0c0c0d" }} // override default margin for TextField
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
