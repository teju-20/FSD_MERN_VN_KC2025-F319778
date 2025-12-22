import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import Impact from "./pages/Impact";
import Login from "./pages/Login";
import Register from "./pages/Register";

/* -------------------- PROTECTED ROUTE -------------------- */
const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // If not logged in → go to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If role mismatch → redirect properly
  if (role && user.role !== role) {
    return <Navigate to={user.role === "seller" ? "/admin" : "/"} replace />;
  }

  return children;
};

/* -------------------- APP -------------------- */
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* -------- PUBLIC ROUTES -------- */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* -------- BUYER ROUTES -------- */}
        <Route
          path="/"
          element={
            <ProtectedRoute role="buyer">
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute role="buyer">
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/impact"
          element={
            <ProtectedRoute role="buyer">
              <Impact />
            </ProtectedRoute>
          }
        />

        {/* -------- SELLER / ADMIN ROUTE -------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="seller">
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* -------- FALLBACK -------- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
