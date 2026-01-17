import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

/* =========================
   SERVICE DETAILS (MATCHING SLUGS)
========================= */
const serviceDetails = {
  /* ===== START YOUR CLOUD JOURNEY ===== */
  "cloud-setup-basics": {
    title: "Cloud Setup & Basics",
    intro:
      "New to cloud? We help organizations understand what cloud is, how it works, and how to plan a smooth transition from on-premise infrastructure to the cloud.",
    about: `
This service is designed for businesses taking their first step into the cloud.
We set up your Azure environment with best practices from day one, ensuring
security, proper access control, and cost visibility.

You get a clean, safe Azure foundation without complexity or vendor lock-in.
    `,
    points: [
      "Azure account & subscription setup",
      "Identity, RBAC & basic security",
      "Cost management & budgets",
      "Best-practice resource structure",
    ],
  },

  "business-email-m365": {
    title: "Business Email & Microsoft 365",
    intro:
      "Professional email and collaboration tools for modern businesses.",
    about: `
We help you set up Microsoft 365 so your team can collaborate securely from anywhere.
This includes email, Teams, OneDrive, and user access management — all configured
with security best practices.
    `,
    points: [
      "Business email (Exchange Online)",
      "Microsoft Teams & OneDrive setup",
      "User & device access control",
      "Security & compliance baseline",
    ],
  },

  "website-app-hosting": {
    title: "Website & App Hosting",
    intro:
      "Secure and scalable hosting for websites and business applications.",
    about: `
We host your websites and applications on Azure with built-in security,
monitoring, and backups. Whether it’s a business website or a production app,
your workloads are protected and scalable.
    `,
    points: [
      "Azure App Service / VM hosting",
      "SSL & basic security hardening",
      "Monitoring & alerts",
      "Automated backups",
    ],
  },

  /* ===== SECURE & RUN YOUR BUSINESS ===== */
  "backup-recovery": {
    title: "Data Backup & Recovery",
    intro:
      "Protect your business data with automated backups and fast recovery.",
    about: `
Data loss can stop a business instantly. We implement Azure-native backup and
recovery solutions to protect your workloads and ensure quick restoration
when incidents occur.
    `,
    points: [
      "Azure Backup configuration",
      "Disaster recovery planning",
      "Fast restore & testing",
      "Compliance-ready backup strategy",
    ],
  },

  "secure-remote-work": {
    title: "Secure Remote Work",
    intro:
      "Enable safe work-from-home and remote access for your team.",
    about: `
We design secure remote access solutions so your team can work safely from
anywhere without exposing your systems to cyber risks.
    `,
    points: [
      "Secure VPN / Azure Bastion access",
      "Identity & MFA enforcement",
      "Device & access policies",
      "Zero Trust principles",
    ],
  },

  "cloud-support-maintenance": {
    title: "Cloud Support & Maintenance",
    intro:
      "Ongoing monitoring, maintenance, and support for Azure environments.",
    about: `
Your cloud environment needs continuous care. We provide proactive monitoring,
issue resolution, patching, and regular health checks to keep everything running
smoothly.
    `,
    points: [
      "24/7 monitoring & alerts",
      "Incident troubleshooting",
      "Patch & update management",
      "Monthly health reports",
    ],
  },

  /* ===== OPTIMIZE & GROW ===== */
  "cloud-cost-optimization": {
    title: "Cloud Cost Optimization",
    intro:
      "Reduce Azure costs without sacrificing performance or security.",
    about: `
Cloud costs can grow silently. We analyze your Azure usage and implement
rightsizing, budget controls, and governance to reduce waste and optimize spend.
    `,
    points: [
      "Cost analysis & reports",
      "Rightsizing recommendations",
      "Budgets & alerts",
      "Ongoing cost governance",
    ],
  },

  "azure-landing-zone": {
    title: "Azure Architecture & Landing Zone",
    intro:
      "Build a scalable and secure Azure foundation aligned with Microsoft CAF.",
    about: `
For growing and enterprise businesses, we design Azure Landing Zones that support
scale, security, governance, and long-term growth.
    `,
    points: [
      "Enterprise landing zone design",
      "Hub-spoke networking",
      "Identity & governance model",
      "Security baseline & policies",
    ],
  },

  "aks-advanced-services": {
    title: "AKS & Advanced Cloud Services",
    intro:
      "Container platforms and advanced Azure services for modern applications.",
    about: `
We help you adopt Kubernetes and advanced Azure services to modernize applications,
improve scalability, and enable automation.
    `,
    points: [
      "AKS cluster design & setup",
      "Container security & networking",
      "CI/CD & automation",
      "Observability & monitoring",
    ],
  },
};

/* =========================
   COMPONENT
========================= */
function ServiceDetail({ onQuoteClick }) {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <section className="service-detail">
        <Breadcrumbs />
        <h1>Service not found</h1>
        <p>Please check the service URL.</p>
      </section>
    );
  }

  return (
    <section className="service-detail">
      <Breadcrumbs />

      <h1>{service.title}</h1>
      <p className="service-intro">{service.intro}</p>

      <div className="service-box">
        <h3>About this service</h3>
        <p className="service-about">{service.about}</p>

        <h4>What you get</h4>
        <ul className="service-list">
          {service.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="service-cta">
        <p className="cta-text">
          Not sure where to start? Our Azure experts can review your current
          setup and recommend the right solution.
        </p>

        <button className="btn-pill" onClick={onQuoteClick}>
          Talk to a Cloud Expert
        </button>
      </div>
    </section>
  );
}

export default ServiceDetail;
