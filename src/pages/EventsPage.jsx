import EntitySection from "../components/EntitySection";
import PageHeader from "../components/PageHeader";
import { useAppContext } from "../state/AppContext";

const fields = [
  { name: "title", label: "Session or activation", type: "text" },
  { name: "date", label: "Scheduled date", type: "date" },
  { name: "location", label: "Site or venue", type: "text" },
  { name: "description", label: "Run-of-show notes", type: "textarea" },
];

export default function EventsPage() {
  const {
    state: { events },
    events: eventActions,
  } = useAppContext();

  return (
    <>
      <PageHeader
        eyebrow="Field Calendar"
        title="Activations and sessions"
        description="Plan outreach days, onboarding labs, and service touchpoints with editable notes that keep the team aligned."
      />
      <EntitySection
        title="Calendar entries"
        description="Document what is happening, where it happens, and what the team needs to remember before launch."
        fields={fields}
        items={events}
        onCreate={eventActions.create}
        onUpdate={eventActions.update}
        onDelete={eventActions.remove}
        renderSummary={(item) => (
          <>
            <div className="entity-title">{item.title}</div>
            <div className="entity-meta">
              {item.date} · {item.location}
            </div>
            <div className="entity-subtle">{item.description}</div>
          </>
        )}
      />
    </>
  );
}
