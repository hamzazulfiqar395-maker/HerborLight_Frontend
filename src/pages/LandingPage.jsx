import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-shell min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-xl-9">
            <div className="eyebrow">HarborLight</div>
            <h1 className="landing-title">
              Coordinate neighborhood support with a workspace built for fast, human-centered response.
            </h1>
            <p className="landing-copy">
              HarborLight brings together funding records, care relationships, outreach sessions,
              and crew coordination in one interface that feels more like an operations studio than
              a generic admin panel.
            </p>
            <div className="landing-points mb-4">
              <span>Funding pulse</span>
              <span>Care mapping</span>
              <span>Field coordination</span>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <Link className="btn btn-lg btn-primary" to="/dashboard">
                Enter Mission Desk
              </Link>
              <Link className="btn btn-lg btn-outline-light" to="/search">
                Open Signal Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
