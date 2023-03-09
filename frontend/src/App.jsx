import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Diarypage from "./components/Diarypage";
import Home from "./components/Home";
import NotFound from "./components/NotFound"
import "./App.css"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/diary/:id" element={<Diarypage></Diarypage>}></Route>
          <Route element={<NotFound></NotFound>}></Route>
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
