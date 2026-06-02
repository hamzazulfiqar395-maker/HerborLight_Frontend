import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

function formatCurrency(value) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(value);
}

const fields = [
  { name: "amount", label: "Contribution amount", type: "number" },
  { name: "donorName", label: "Partner or donor", type: "text" },
  { name: "purpose", label: "Campaign focus", type: "text" },
  { name: "date", label: "Received on", type: "date" },
];

export default function DonationsPage() {
  const {
    state: { donations },
    donations: donationActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Funding Flow"
        title="Contribution pipeline"
        description="Log incoming support, keep campaign context attached, and maintain a cleaner picture of what is funding current work."
      />
      <EntitySection
        title="Funding entries"
        description="Track every contribution with a source, use case, and receipt date so campaign reporting stays organized."
        fields={fields}
        items={donations}
        onCreate={donationActions.create}
        onUpdate={donationActions.update}
        onDelete={donationActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.donorName}</div>
            <div className="entity-meta">
              {formatCurrency(Number(item.amount || 0))} · {item.purpose}
            </div>
            <div className="entity-subtle">Received {item.date}</div>
          </>
        )}
      />
    </>
  );
}
