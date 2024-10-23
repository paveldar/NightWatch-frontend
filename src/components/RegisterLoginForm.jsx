import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

const RegisterLoginForm = ({ route, formType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setIsPending(true);
    e.preventDefault();

    try {
      let res;

      if (route === "/api/token/") {
        res = await api.post(route, { username: email, password: password });
        if (res.data.access !== undefined) {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
        }
        if (res.data.refresh !== undefined) {
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        }
      }

      if (route === "/api/user/register/") {
        await api.post(route, { username: email, password: password });
        res = await api.post("/api/token/", {
          username: email,
          password: password,
        });
        if (res.data.access !== undefined) {
          localStorage.setItem(ACCESS_TOKEN, res.data.access);
        }
        if (res.data.refresh !== undefined) {
          localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        }
      }

      navigate("/");
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.status);
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-control-lg border-0 shadow-none"
        type="email"
        name="email"
        placeholder="e-mail"
        required
        autoComplete="on"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="form-control-lg border-0 shadow-none"
        type="password"
        name="password"
        placeholder="password"
        required
        autoComplete="on"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="border-0">
        {formType === "register" ? "Register" : "Log In"}
      </button>
      {error && route === "/api/token/" && (
        <p>{error === 401 ? "Incorrect login credentials" : error}</p>
      )}
      {error && route === "/api/user/register/" && (
        <p>
          {error === 400 || error === 401
            ? "Account with this email already exists"
            : error}
        </p>
      )}
    </form>
  );
};

export default RegisterLoginForm;
