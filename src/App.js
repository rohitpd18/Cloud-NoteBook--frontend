import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import { Alert } from "./Components/Alert";
import { Home } from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Singup from "./Components/Singup";
import NoteState from "./Context/Notes/NoteState";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert=(massage, type)=>{
    setAlert({
      massage,
      type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  return (
    <>
    
    <NoteState> {/*using this for context api*/}
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home showAlert={showAlert} />} />
          <Route path="/about" element={<About showAlert={showAlert} />} />
          <Route path="/login" element={<Login showAlert={showAlert} />} />
          <Route path="/singup" element={<Singup showAlert={showAlert} />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
