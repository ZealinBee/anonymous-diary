import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Diarypage from "./components/Diarypage";
import Home from "./components/Home";
import "./App.css"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/:id" element={<Diarypage></Diarypage>}></Route>
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
