import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import LoginContactUsComponent from "./Components/LoginContactUsComponent/LoginContactUsComponent";
import SubscriptionDetailComponent from "./Components/SubscriptionDetailsComponent/SubscriptionDetailComponent";
import TrialSubscriptionComponent from "./Components/TrialSubscriptionComponent/TrailSubscriptionComponent";
import AnnualSubscriptionComponent from "./Components/AnnualSubscriptionComponent/AnnualSubscriptionComponent";
import DashboardComponent from "./Components/DashboardComponent/DashboardComponent";
import SubscriptionRequestComponent from "./Components/SubscriptionRequestComponent/SubscriptionRequestComponent";
import SupportComponent from "./Components/SupportComponent/SupportComponent";
import LineofBussinessComponent from "./Components/LineofBussinessComponent/LineoofBussinessComponent";
import CategoryComponent from "./Components/CategoryComponent/CategoryComponent";
import OrganizationDetailsComponent from "./Components/OrganizationDetailsComponent/OrganizationDetailsComponent";
import UserComponent from "./Components/UserComponent/UserComponent";
import QuestionnairComponent from "./Components/QuestionnairComponent/QuestionnairComponent";
import NewsReportComponent from "./Components/NewsReportComponent/NewsReportComponent";
import UpcomingCountryComponent from "./Components/UpcomingCountryCompoenent/UpcomingCountryComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginComponent />} />
        <Route exact path="/contactUs" element={<LoginContactUsComponent />} />
        <Route
          exact
          path="/subscription"
          element={<SubscriptionDetailComponent />}
        />
        <Route
          exact
          path="/trial-subscription-registration"
          element={<TrialSubscriptionComponent />}
        />
        <Route
          exact
          path="/annual-subscription-registration"
          element={<AnnualSubscriptionComponent />}
        />
        <Route exact path="/dashboard" element={<DashboardComponent />} />
        <Route
          exact
          path="/subscription-request"
          element={<SubscriptionRequestComponent />}
        />
        <Route path="/support" element={<SupportComponent />} />
        <Route
          path="/line-of-bussiness"
          element={<LineofBussinessComponent />}
        />
        <Route path="/category" element={<CategoryComponent />} />
        <Route
          path="/organization"
          element={<OrganizationDetailsComponent />}
        />
        <Route path="/user" element={<UserComponent />} />
        <Route path="/questionnair" element={<QuestionnairComponent />} />
        <Route path="/news-report" element={<NewsReportComponent />} />
        <Route
          path="/upcoming-country"
          element={<UpcomingCountryComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// /annual-subscription-registration
