import { Routes, Route, Navigate } from "react-router-dom";
import Left from "./Home/LeftPart/Left";
import Right from "./Home/RightPart/Right";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { useAuth } from "./Context/AuthProvider";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [authUser] = useAuth();
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen ">
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/signup"
          element={
            authUser ? (
              <Navigate to="/" />
            ) : (
              <Signup />
            )
          }
        />
        <Route
          path="/login"
          element={
            authUser ? (
              <Navigate to="/" />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
