import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import LoginContactUsComponent from "./Components/LoginContactUsComponent/LoginContactUsComponent";
import SubscriptionDetailComponent from "./Components/SubscriptionDetailsComponent/SubscriptionDetailComponent";
import TrialSubscriptionComponent from "./Components/TrialSubscriptionComponent/TrailSubscriptionComponent";
import AnnualSubscriptionComponent from "./Components/AnnualSubscriptionComponent/AnnualSubscriptionComponent";

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
        <Route
          path="/trial-subscription-registration"
          element={<TrialSubscriptionComponent />}
        />
        <Route
          path="/annual-subscription-registration"
          element={<AnnualSubscriptionComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// /annual-subscription-registration
