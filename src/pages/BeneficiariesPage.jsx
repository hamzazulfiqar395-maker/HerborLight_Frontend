import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

const fields = [
  { name: "name", label: "Partner or household", type: "text" },
  { name: "category", label: "Support lane", type: "text" },
  { name: "supportType", label: "Service provided", type: "text" },
];

export default function BeneficiariesPage() {
  const {
    state: { beneficiaries },
    beneficiaries: beneficiaryActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Care Network"
        title="Support relationships"
        description="Keep a living map of who your team supports, what kind of help is active, and which needs require follow-through."
      />
      <EntitySection
        title="Care entries"
        description="Use this list for households, partner groups, and programs that receive direct resources or ongoing coordination."
        fields={fields}
        items={beneficiaries}
        onCreate={beneficiaryActions.create}
        onUpdate={beneficiaryActions.update}
        onDelete={beneficiaryActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.name}</div>
            <div className="entity-meta">
              {item.category} · {item.supportType}
            </div>
          </>
        )}
      />
    </>
  );
}
