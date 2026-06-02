import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

export default function SettingsPage() {
  const {
    state: { settings },
    updateSettings,
    resetAllData,
  } = useAppContext();
  const [organizationName, setOrganizationName] = useState(settings.organizationName);
  const [dashboardGreeting, setDashboardGreeting] = useState(settings.dashboardGreeting);

  function handleSubmit(event) {
    event.preventDefault();
    updateSettings({ organizationName, dashboardGreeting });
  }

  return (
    <>
      <PageHeader
        eyebrow="Studio Settings"
        title="Workspace voice and defaults"
        description="Tune the brand, adjust the active theme, and reset the demo workspace whenever you want a clean slate."
      />
      <div className="row g-4">
        <div className="col-12 col-xl-7">
          <div className="glass-card h-100">
            <h3 className="section-title">Brand controls</h3>
            <form className="vstack gap-3" onSubmit={handleSubmit}>
              <div>
                <label className="form-label fw-semibold" htmlFor="organizationName">
                  Workspace name
                </label>
                <input
                  id="organizationName"
                  className="form-control"
                  value={organizationName}
                  onChange={(event) => setOrganizationName(event.target.value)}
                />
              </div>
              <div>
                <label className="form-label fw-semibold" htmlFor="dashboardGreeting">
                  Sidebar message
                </label>
                <textarea
                  id="dashboardGreeting"
                  className="form-control"
                  rows="4"
                  value={dashboardGreeting}
                  onChange={(event) => setDashboardGreeting(event.target.value)}
                />
              </div>
              <div>
                <label className="form-label fw-semibold" htmlFor="themeSelect">
                  Visual mode
                </label>
                <select
                  id="themeSelect"
                  className="form-select"
                  value={settings.theme}
                  onChange={(event) => updateSettings({ theme: event.target.value })}
                >
                  <option value="light">Day shift</option>
                  <option value="dark">Night shift</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  id="notifications"
                  className="form-check-input"
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(event) => updateSettings({ notifications: event.target.checked })}
                />
                <label className="form-check-label" htmlFor="notifications">
                  Keep reminder nudges and activity alerts enabled
                </label>
              </div>
              <button className="btn btn-primary align-self-start" type="submit">
                Save workspace
              </button>
            </form>
          </div>
        </div>
        <div className="col-12 col-xl-5">
          <div className="glass-card h-100">
            <h3 className="section-title">Reset tools</h3>
            <p className="section-copy">
              Restore the demo content if you want to discard edits and return to the refreshed HarborLight sample data.
            </p>
            <button className="btn btn-outline-danger" type="button" onClick={resetAllData}>
              Restore starter data
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
