import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dashboard,
  Register,
  Login,
  UpdateProfile,
  ResetPassword,
  Rps,
} from "./components";
import { Auth } from "./context/Auth";
import { auth } from "./services/firebase";

export default function App() {
  function PrivateRoute({ children, redirectTo }) {
    return auth.currentUser ? children : <Navigate to={redirectTo} />;
  }

  return (
    <>
      <Auth>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/update-profile"
            element={
              <PrivateRoute redirectTo="/login">
                <UpdateProfile />
              </PrivateRoute>
            }
          />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/rpsgame"
            element={
              <PrivateRoute redirectTo="/login">
                <Rps />
              </PrivateRoute>
            }
          />
        </Routes>
      </Auth>
    </>
  );
}
