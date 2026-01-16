import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const linkClass = (path) =>
    `px-3 py-1 rounded ${
      pathname === path
        ? "bg-white text-blue-600 font-semibold"
        : "text-white hover:bg-blue-500"
    }`;

  return (
    <div className="bg-blue-600">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-white font-bold text-lg">Lead CRM</h1>
        <div className="flex gap-2">
          <Link to="/" className={linkClass("/")}>Dashboard</Link>
          <Link to="/leads" className={linkClass("/leads")}>Leads</Link>
          <button onClick={logout} className="text-white hover:underline">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

