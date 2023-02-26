import React from 'react'
import '../App.css'

function Diary({title,entry}) {
  return (
    <div class="diary">
        <h2>{title}</h2>
        <p>{entry}</p>
    </div>
  )
}

export default Diary