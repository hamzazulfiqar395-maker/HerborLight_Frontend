import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

const fields = [
  { name: "name", label: "Crew member", type: "text" },
  { name: "role", label: "Primary assignment", type: "text" },
  { name: "availability", label: "Availability window", type: "text" },
  { name: "contact", label: "Contact line", type: "text" },
];

export default function VolunteersPage() {
  const {
    state: { volunteers },
    volunteers: volunteerActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Crew Board"
        title="People and coverage"
        description="See who is available, what they handle best, and how to reach them when field plans shift quickly."
      />
      <EntitySection
        title="Crew entries"
        description="Keep roles, contact details, and availability current so staffing decisions stay easy during busy weeks."
        fields={fields}
        items={volunteers}
        onCreate={volunteerActions.create}
        onUpdate={volunteerActions.update}
        onDelete={volunteerActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.name}</div>
            <div className="entity-meta">
              {item.role} · {item.availability}
            </div>
            <div className="entity-subtle">{item.contact}</div>
          </>
        )}
      />
    </>
  );
}
