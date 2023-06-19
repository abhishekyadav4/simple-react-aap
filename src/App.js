
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Query from './components/Query';
import Home from './components/Home';
// import ErrorPage from './components/ErrorPage';
import { useState } from 'react';
import Footer from './components/Footer';


function App() {

  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Dark")

  const changeMode = () => {

    if (mode === "light") {
      setMode("dark");
      setModeText("Light");
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else {
      setMode("light");
      setModeText("Dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"
    }
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Header mode={mode} changeMode={changeMode} modeText={modeText} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/query" element={<Query />} />
          {/* <Route path="/*" element={<Navigate to="/"/>}/> */}
           {/* <Route path="/*" element={<ErrorPage to="/"/>}/> */}

        </Routes> 
         <Footer />
      </BrowserRouter> 

    
    </div>
  );
}

export default App;
