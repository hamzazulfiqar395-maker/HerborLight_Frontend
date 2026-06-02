import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

export default function SearchPage() {
  const {
    state: { donations, beneficiaries, events },
  } = useAppContext();
  const [query, setQuery] = useState("");
  const [type, setType] = useState("all");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const donationResults = donations.map((item) => ({
      id: item.id,
      type: "Funding",
      title: item.donorName,
      detail: `${item.purpose} · ${item.date}`,
    }));

    const beneficiaryResults = beneficiaries.map((item) => ({
      id: item.id,
      type: "Care",
      title: item.name,
      detail: `${item.category} · ${item.supportType}`,
    }));

    const eventResults = events.map((item) => ({
      id: item.id,
      type: "Field",
      title: item.title,
      detail: `${item.location} · ${item.date}`,
    }));

    return [...donationResults, ...beneficiaryResults, ...eventResults].filter((item) => {
      const typeMatches = type === "all" || item.type.toLowerCase() === type;
      const textMatches =
        !normalized ||
        item.title.toLowerCase().includes(normalized) ||
        item.detail.toLowerCase().includes(normalized);

      return typeMatches && textMatches;
    });
  }, [beneficiaries, donations, events, query, type]);

  return (
    <>
      <PageHeader
        eyebrow="Signal Search"
        title="Cross-workspace lookup"
        description="Scan funding, care, and field records from one place, then narrow the list to the signal you need."
      />
      <section className="glass-card mb-4">
        <div className="row g-3">
          <div className="col-12 col-lg-8">
            <label className="form-label fw-semibold" htmlFor="searchQuery">
              Search phrase
            </label>
            <input
              id="searchQuery"
              className="form-control"
              placeholder="Search by partner, campaign, support lane, session, or location"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="col-12 col-lg-4">
            <label className="form-label fw-semibold" htmlFor="searchType">
              Narrow by lane
            </label>
            <select
              id="searchType"
              className="form-select"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="all">Everything</option>
              <option value="funding">Funding</option>
              <option value="care">Care</option>
              <option value="field">Field</option>
            </select>
          </div>
        </div>
      </section>
      <section className="glass-card">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="section-title mb-0">Matched signals</h3>
          <span className="badge text-bg-light">{results.length} visible</span>
        </div>
        <div className="vstack gap-3">
          {results.length ? (
            results.map((item) => (
              <article key={item.id} className="entity-row">
                <div>
                  <div className="entity-title">{item.title}</div>
                  <div className="entity-meta">{item.type}</div>
                  <div className="entity-subtle">{item.detail}</div>
                </div>
              </article>
            ))
          ) : (
            <div className="empty-state">Nothing matches the current phrase and lane filters.</div>
          )}
        </div>
      </section>
    </>
  );
}
