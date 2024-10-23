// Components
import RegisterLoginForm from "../components/RegisterLoginForm";

const Register = () => {
  return (
    <main>
      <div className="title-wrapper">
        <h3 className="page-title">Register</h3>
      </div>
      <RegisterLoginForm route="/api/user/register/" formType="register" />
    </main>
  );
};

export default Register;
