import { Link } from "react-router-dom";
import ProgressCard from "../component/ProgressCard";
import progressData from "../data/progressData";

export default function ProgressSection() {
  return (
    <section id="progress" className="section progress-section">
      <h2>My Progress</h2>
      <p className="progress-subtitle">
        Track what I’ve been learning and building
      </p>

      <div className="progress-grid">
        {progressData.map((item, i) => (
          <ProgressCard key={i} {...item} />
        ))}
      </div>

      <Link to="/progress" className="see-all">
        See All →
      </Link>
    </section>
  );
}
