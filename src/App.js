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
import UserProfileComponent from "./Components/UserProfileComponent/UserProfileComponent";
import AddCountryDataComponent from "./Components/AddCountryDataComponent/AddCountryDataComponent";
import EditCountryDataComponent from "./Components/EditCountryDataComponent/EditCountryDataComponent";
import ViewCountryDataComponent from "./Components/ViewCountryDataComponent/ViewCountryDataComponent";
import ClientDahboardComponent from "./Components/ClientComponents/ClientDashboardCompoent/ClienDashboardComponent";
import ClientDatabaseComponent from "./Components/ClientComponents/ClientDatabaseComponent/ClientDatabaseComponent";
import ClientSupportComponent from "./Components/ClientComponents/ClientSupportComponent/ClientSupportComponent";
import ClientAboutUsComponent from "./Components/ClientComponents/ClientAboutUsComponent/ClientAboutUsComponent";
import ClientOtherServicesComponent from "./Components/ClientComponents/ClientOtherServicesComponent/ClientOtherServicesComponent";
import ClientLatestNewsLetterComponent from "./Components/ClientComponents/ClientLatestNewsLetterComponent/ClientLatestNewsLetterComponent";
import ClientUserProfileComponent from "./Components/ClientComponents/ClientUserProfileComponent/ClientUserProfileComponent";

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
        <Route path="/my-profile" element={<UserProfileComponent />} />
        <Route path="/add-country-data" element={<AddCountryDataComponent />} />
        <Route
          path="/edit-country-data"
          element={<EditCountryDataComponent />}
        />
        <Route
          path="/view-country-data"
          element={<ViewCountryDataComponent />}
        />
        <Route path="/client-dashboard" element={<ClientDahboardComponent />} />
        <Route path="/client-database" element={<ClientDatabaseComponent />} />
        <Route path="/client-support" element={<ClientSupportComponent />} />
        <Route path="/client-about-us" element={<ClientAboutUsComponent />} />
        <Route
          path="/client-other-services"
          element={<ClientOtherServicesComponent />}
        />
        <Route
          path="/client-latestNewsLetter"
          element={<ClientLatestNewsLetterComponent />}
        />
        <Route
          path="/client-user-profile"
          element={<ClientUserProfileComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// /annual-subscription-registration
