function Solutions() {
  return (
    <section className="solutions-page">

      {/* HERO */}
      <div className="solutions-hero">
       <h1>Solutions Designed for Scale, Security, and Cost Efficiency</h1>
  <p>
   We help organizations modernize Microsoft Azure and Kubernetes environments with practical, production-ready cloud solutions.
  </p>
      </div>

  {/* SOLUTIONS GRID */}
<div className="solutions-grid">

{/* Migration */}
  <div className="solution-card">
  <span className="solution-tag">Migration</span>

  <h3>Azure Migration (Lift & Shift)</h3>

  <p>
    Move workloads to Microsoft Azure with minimal disruption. We plan and
    execute lift & shift migrations that prioritize stability, security, and
    predictable outcomes.
  </p>

  <ul>
    <li>Application & VM readiness assessment</li>
    <li>Secure on-prem to Azure migrations</li>
    <li>Downtime-minimized cutover planning</li>
  </ul>
</div>

{/* AVD */}
  <div className="solution-card">
  <span className="solution-tag">Virtual Desktop on Cloud</span>

  <h3>Azure Virtual Desktop (AVD)</h3>

  <p>
    Provide secure, scalable virtual desktops and applications using Azure
    Virtual Desktop. We design and deploy AVD environments that support remote
    work, performance, and enterprise security requirements.
  </p>

  <ul>
    <li>Azure Virtual Desktop design & deployment</li>
    <li>Secure user access & identity integration</li>
    <li>Performance optimization & cost control</li>
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

{/* Applications */}
<div className="solution-card">
  <span className="solution-tag">Applications</span>

  <h3>Applications & Websites on Cloud</h3>

  <p>
    Host and run secure, scalable web applications and websites on Microsoft
    Azure. We help teams deploy reliable application platforms designed for
    performance, availability, and growth.
  </p>

  <ul>
    <li>Web application & website hosting on Azure</li>
    <li>App services, VMs, and container-based deployments</li>
    <li>Secure, scalable, and high-availability architectures</li>
  </ul>
</div>


  {/* Cost */}
  <div className="solution-card">
    <span className="solution-tag">Cost</span>
    <h3>Cost Optimization</h3>
    <p>
      Microsoft Azure bills growing faster than usage? We identify waste and
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
    <h3>Secure Cloud Infrastructure</h3>
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
