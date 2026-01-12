function Solutions() {
  return (
    <section className="solutions-page">

      {/* HERO */}
      <div className="solutions-hero">
       <h1>Cloud Solutions Built for Scale, Security & Cost Control</h1>
  <p>
    We help teams modernize Azure and Kubernetes environments with
    practical, production-ready solutions.
  </p>
      </div>

  {/* SOLUTIONS GRID */}
<div className="solutions-grid">

  {/* Cost */}
  <div className="solution-card">
    <span className="solution-tag">Cost</span>
    <h3>Azure Cost Optimization</h3>
    <p>
      Azure bills growing faster than usage? We identify waste and
      optimize AKS, logs, and infrastructure spend.
    </p>
    <ul>
      <li>AKS & Log Analytics optimization</li>
      <li>Retention & rightsizing</li>
      <li>Cost governance setup</li>
    </ul>
  </div>

  {/* Security */}
  <div className="solution-card">
    <span className="solution-tag">Security</span>
    <h3>Secure Azure Foundation</h3>
    <p>
      Build a secure, compliant Azure environment aligned with Microsoft
      best practices.
    </p>
    <ul>
      <li>Landing Zones</li>
      <li>RBAC & identity</li>
      <li>Policy & governance</li>
    </ul>
  </div>

  {/* Kubernetes */}
  <div className="solution-card">
    <span className="solution-tag">Modernization</span>
    <h3>Kubernetes Modernization</h3>
    <p>
      Move confidently to AKS with scalable, observable, and
      production-ready architectures.
    </p>
    <ul>
      <li>AKS design & scaling</li>
      <li>CI/CD pipelines</li>
      <li>Monitoring & reliability</li>
    </ul>
  </div>

  {/* Backup */}
  <div className="solution-card">
    <span className="solution-tag">Resilience</span>
    <h3>Azure Backup & Disaster Recovery</h3>
    <p>
      Protect critical workloads and data with reliable backup and
      recovery strategies.
    </p>
    <ul>
      <li>Azure Backup & Recovery Vaults</li>
      <li>VM & database backups</li>
      <li>Disaster recovery planning</li>
    </ul>
  </div>

  {/* Storage */}
  <div className="solution-card">
    <span className="solution-tag">Data</span>
    <h3>Azure Storage Solutions</h3>
    <p>
      Design secure, scalable, and cost-efficient storage architectures
      on Azure.
    </p>
    <ul>
      <li>Blob, File & Disk storage</li>
      <li>Lifecycle & retention policies</li>
      <li>Performance & cost tuning</li>
    </ul>
  </div>

  {/* Tally on Cloud */}
  <div className="solution-card">
    <span className="solution-tag">SMB</span>
    <h3>Tally on Azure Cloud</h3>
    <p>
      Run Tally securely on Azure with high availability, backup, and
      remote access.
    </p>
    <ul>
      <li>Secure VM-based Tally setup</li>
      <li>Remote & multi-user access</li>
      <li>Backup & monitoring</li>
    </ul>
  </div>

</div>


      {/* DELIVERY APPROACH */}
      <div className="solutions-approach">
        <h2>How We Deliver Solutions</h2>
        <ul>
          <li>Engineer-led consultation (no sales pitch)</li>
          <li>Architecture-first approach</li>
          <li>Production-ready designs</li>
          <li>Clear documentation & handover</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="solutions-cta">
        <h2>Not Sure Which Solution Fits You?</h2>
        <p>
          Let’s review your environment and recommend the right approach.
        </p>
        <a href="/contact" className="btn-primary">
          Book a Free Cloud Consultation
        </a>
      </div>

    </section>
  );
}

export default Solutions;
