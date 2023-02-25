import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

function DiaryForm(props) {
  const { isClosed, setIsClosed } = props;
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
          validate
          autoComplete="off"
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
            required
            sx={{ marginBottom: "15px", color: "#0c0c0d" }} // override default margin for TextField
          />
          <TextField
            id="outlined-multiline-static"
            label="Entry"
            multiline
            required
            rows={10}
            sx={{ marginBottom: "15px", color: "#0c0c0d" }} // override default margin for TextField
          />
          <Button
            variant="outlined"
            type="submit"
            sx={{ maxWidth: "150px", margin: "0 auto" }}
            onClick={() => setIsClosed(true)}
          >
            Submit Entry
          </Button>
        </Box>
      )}
    </>
  );
}

export default DiaryForm;
