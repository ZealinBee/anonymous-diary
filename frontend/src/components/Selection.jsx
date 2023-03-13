import React, {useState} from "react";
import {
  Select as Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

function Selection({setDiaries, originalDiaries}) {
  const [sort, setSort] = useState("");
  
  function handleChange(e) {
    setSort(e.target.value);
    if(e.target.value === "Oldest to Newest") {
      const reversedDiaries = [...originalDiaries].reverse()
      setDiaries(reversedDiaries)
    }else if(e.target.value === "Newest to Oldest") {
      setDiaries(originalDiaries)
    }
    
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 170 }}>
      <InputLabel id="demo-simple-select-label">Sort</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        onChange={handleChange}
        label="Sort"
        inputProps={{ 'aria-label': 'Without label' }}

        >

        <MenuItem value={"Oldest to Newest"}>Oldest to Newest</MenuItem>
        <MenuItem value={"Newest to Oldest"}>Newest to Oldest</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Selection;
