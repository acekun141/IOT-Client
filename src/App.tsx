import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./container/ProtectedRoute";
import PublicRoute from "./container/PublicRoute";
import StateProvider from "./container/StateProvider";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <StateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute restricted={true}><LandingPage /></PublicRoute>}/>
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </StateProvider>
  )
}

export default App
