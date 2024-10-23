// Components
import RegisterLoginForm from "../components/RegisterLoginForm";

const Login = () => {
  return (
    <main>
      <div className="title-wrapper">
        <h3 className="page-title">Login</h3>
      </div>
      <RegisterLoginForm route="/api/token/" formType="login" />
    </main>
  );
};

export default Login;
