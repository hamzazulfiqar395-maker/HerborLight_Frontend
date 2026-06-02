import { NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "../state/AppContext";

const navigation = [
  { to: "/dashboard", label: "Mission Desk" },
  { to: "/donations", label: "Funding Flow" },
  { to: "/beneficiaries", label: "Care Network" },
  { to: "/events", label: "Field Calendar" },
  { to: "/volunteers", label: "Crew Board" },
  { to: "/search", label: "Signal Search" },
  { to: "/settings", label: "Studio Settings" },
];

export default function AppShell() {
  const {
    state: { settings },
  } = useAppContext();

  return (
    <div className="app-shell min-vh-100">
      <div className="container-fluid">
        <div className="row min-vh-100">
          <aside className="col-12 col-lg-3 col-xl-2 sidebar-panel px-3 px-md-4 py-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div>
                <div className="eyebrow">Community Care Console</div>
                <h1 className="brand-title mb-0">{settings.organizationName}</h1>
              </div>
            </div>
            <p className="sidebar-copy">{settings.dashboardGreeting}</p>
            <div className="sidebar-badge mb-4">Live records, calmer coordination.</div>
            <nav className="nav flex-column gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link sidebar-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>
          <main className="col-12 col-lg-9 col-xl-10 px-3 px-md-4 px-xl-5 py-4 py-md-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
