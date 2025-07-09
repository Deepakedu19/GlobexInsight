import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import LoginContactUsComponent from "./Components/LoginContactUsComponent/LoginContactUsComponent";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/contactUs" element={<LoginContactUsComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
