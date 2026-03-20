function Outcomes() {
  return (
    <section className="light outcomes-section">
      <div className="section-container">
        <h2 className="section-title">Business Outcomes</h2>

        <div className="outcomes-grid">
          <div className="outcome-card">
            <span className="outcome-icon">⚡</span>
            <h3>Faster Deployments</h3>
            <p>
              40–60% faster application release cycles using CI/CD and AKS.
            </p>
          </div>

          <div className="outcome-card">
            <span className="outcome-icon">💰</span>
            <h3>Reduced Cloud Costs</h3>
            <p>
              Up to 30% Azure cost savings through rightsizing and governance.
            </p>
          </div>

          <div className="outcome-card">
            <span className="outcome-icon">🔒</span>
            <h3>Improved Security</h3>
            <p>
              CIS-aligned security, Azure Policy, and Zero Trust architecture.
            </p>
          </div>

          <div className="outcome-card">
            <span className="outcome-icon">📈</span>
            <h3>Scalable Infrastructure</h3>
            <p>
              Highly available, resilient, and future-ready cloud platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outcomes;
