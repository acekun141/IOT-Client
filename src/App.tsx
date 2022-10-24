import { BrowserRouter, Routes, Route } from "react-router-dom";
import protectRoute from "./container/ProtectedRoute";
import publicRoute from "./container/PublicRoute";
import StateProvider from "./container/StateProvider";
import DashboardPage from "./pages/DashboardPage";
import DevicesPage from "./pages/DevicesPage";
import LandingPage from "./pages/LandingPage";
import SensorsPage from "./pages/SensorsPage";


function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={publicRoute(<LandingPage />, true)}/>
          <Route path="/dashboard" element={protectRoute(<DashboardPage />)}/>
          <Route path="/devices" element={protectRoute(<DevicesPage />)}/>
          <Route path="/sensors" element={protectRoute(<SensorsPage />)}/>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  )
}

export default App
