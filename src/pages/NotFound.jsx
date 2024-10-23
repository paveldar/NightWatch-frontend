import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // Automatic redirect to home page
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <main>
      <h4>There is nothing here</h4>
      <p>Redirecting...</p>
    </main>
  );
};

export default NotFound;
