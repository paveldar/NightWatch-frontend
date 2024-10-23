import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const useLogout = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const logout = (e) => {
    e.preventDefault();
    try {
      // Delete tokens from localStorage
      localStorage.clear();

      // Dispatch logout action
      dispatch({ type: "LOGOUT" });

      // Redirect to login page
      navigate("/login");

      setError(null)

    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  return { logout, error };
};

export default useLogout;
