import useLogout from "../hooks/useLogout";

const Logout = () => {
  const { logout, error } = useLogout()

  return (
    <main id="logout-main">
      <div>
        <h3 className="page-title">Logout</h3>
      </div>
      <section>
        <p>Are you sure you want to log out?</p>
        <button className="border-0" onClick={logout}>
          Logout
        </button>
        {error && (
          <p>{error}</p>
        )}
      </section>
    </main>
  );
};

export default Logout;
