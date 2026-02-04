import TopNav from "./TopNav";
import Hero from "./Hero";
import ProgressSection from "./ProgressSection";

export default function Dashboard({ onLogout }) {
  return (
    <div className="page-wrapper">
      <section className="section dashboard-section">
        <TopNav onLogout={onLogout} />
        <Hero />
      </section>

      <ProgressSection />
    </div>
  );
}
