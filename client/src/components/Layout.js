import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)" }}
      >
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" to="/">
            <span role="img" aria-label="logo">💼</span> EmployeePortal
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link text-white px-3 fw-semibold" to="/">🏠 Home</Link>
              <Link className="nav-link text-white px-3 fw-semibold" to="/AddEmp">➕ Add Employee</Link>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
