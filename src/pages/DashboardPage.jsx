import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function DashboardPage() {
  const {
    state: { donations, beneficiaries, events, volunteers },
  } = useAppContext();

  const totalDonations = donations.reduce((sum, donation) => sum + Number(donation.amount || 0), 0);
  const upcomingEvents = [...events]
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);
  const bars = donations.slice(0, 5).map((donation) => ({
    label: donation.donorName,
    amount: Number(donation.amount || 0),
  }));
  const maxBar = Math.max(...bars.map((bar) => bar.amount), 1);

  const summaryCards = [
    { label: "Funds routed", value: formatCurrency(totalDonations) },
    { label: "Care partners", value: beneficiaries.length },
    { label: "Field activations", value: events.length },
    { label: "Crew on call", value: volunteers.length },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Mission Desk"
        title="Community operations snapshot"
        description="Review live support activity, outreach timing, and funding momentum without leaving the main workspace."
      />
      <section className="row g-4 mb-4">
        {summaryCards.map((card) => (
          <div className="col-12 col-md-6 col-xl-3" key={card.label}>
            <div className="glass-card h-100">
              <div className="metric-label mb-2">{card.label}</div>
              <div className="dashboard-stat">{card.value}</div>
            </div>
          </div>
        ))}
      </section>
      <section className="row g-4">
        <div className="col-12 col-xl-7">
          <div className="glass-card h-100">
            <h3 className="section-title">Funding pulse</h3>
            <p className="section-copy">
              Recent giving patterns help the team see where campaigns are landing and where follow-up could unlock more support.
            </p>
            <div className="chart-stack">
              {bars.map((bar) => (
                <div className="chart-row" key={bar.label}>
                  <div className="chart-label">{bar.label}</div>
                  <div className="chart-bar-wrap">
                    <div
                      className="chart-bar"
                      style={{ width: `${(bar.amount / maxBar) * 100}%` }}
                    />
                  </div>
                  <div className="chart-amount">{formatCurrency(bar.amount)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-5">
          <div className="glass-card h-100">
            <h3 className="section-title">Next field moments</h3>
            <p className="section-copy">
              Upcoming sessions stay visible here so logistics, volunteer coverage, and outreach prep move together.
            </p>
            <div className="vstack gap-3">
              {upcomingEvents.map((event) => (
                <article key={event.id} className="entity-row">
                  <div>
                    <div className="entity-title">{event.title}</div>
                    <div className="entity-meta">
                      {event.date} · {event.location}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
