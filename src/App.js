import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import LoginContactUsComponent from "./Components/LoginContactUsComponent/LoginContactUsComponent";
import SubscriptionDetailComponent from "./Components/SubscriptionDetailsComponent/SubscriptionDetailComponent";
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
        <Route path="/subscription" element={<SubscriptionDetailComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
