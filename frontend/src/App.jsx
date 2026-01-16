import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import LeadDetails from "./pages/LeadDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./components/Layout";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("auth") ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/leads"
          element={
            <PrivateRoute>
              <Layout>
                <Leads />
              </Layout>
            </PrivateRoute>
          }
        />

        <Route
          path="/leads/:id"
          element={
            <PrivateRoute>
              <Layout>
                <LeadDetails />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
