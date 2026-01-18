import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCloud,
  FaProjectDiagram,
  FaRocket,
  FaDatabase,
  FaShieldAlt,
  FaMoneyBillWave,
  FaGift,
} from "react-icons/fa";

/* =========================
   SERVICES DATA
========================= */
const servicesData = {
  start: [
    {
      title: "Explore free Azure services",
      desc: "Bring your vision to life with free services. These services are free up to the specified monthly amounts. Some are always free to all Azure customers, and some are free for 12 months to new customers only.",
      slug: "explore-free-azure-services",
      icon: <FaGift />,
    },
    {
      title: "Cloud Setup & Basics",
      desc: "Azure account setup with secure identity, access controls, and cost-friendly configuration.",
      slug: "cloud-setup-basics",
      icon: <FaCloud />,
    },
    {
      title: "Business Email & Microsoft 365",
      desc: "Professional email, Teams, OneDrive, and secure user setup.",
      slug: "business-email-m365",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Website & App Hosting",
      desc: "Secure Azure hosting with monitoring, backups, and scalability.",
      slug: "website-app-hosting",
      icon: <FaRocket />,
    },
  ],

  secure: [
    {
      title: "Data Backup & Recovery",
      desc: "Automated backups and fast recovery for Azure workloads.",
      slug: "backup-recovery",
      icon: <FaDatabase />,
    },
    {
      title: "Secure Remote Work",
      desc: "Safe work-from-home access using Azure security best practices.",
      slug: "secure-remote-work",
      icon: <FaShieldAlt />,
    },
    {
      title: "Cloud Support & Maintenance",
      desc: "Monitoring, troubleshooting, patching, and health checks.",
      slug: "cloud-support-maintenance",
      icon: <FaShieldAlt />,
    },
  ],

  grow: [
    {
      title: "Cloud Cost Optimization",
      desc: "Cost monitoring, rightsizing, and budget controls.",
      slug: "cloud-cost-optimization",
      icon: <FaMoneyBillWave />,
    },

    {
      title: "Cloud Security Posture Improvement ",
      desc: "Track score improvements monthly.",
      slug: "Cloud-Security-Posture-Improvement",
      icon: <FaRocket />,
    },
    {
      title: "Azure Health & Performance Optimization",
      desc: "We make your Azure run faster and more stable without increasing cost.",
      slug: "Azure-Health-Performance-Optimization",
      icon: <FaProjectDiagram />,
    },
  ],
  modernization : [
    {
      title: "Azure Devops",
      desc: "Cost monitoring, rightsizing, and budget controls.",
      slug: "cloud-cost-optimization",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Infrasturcutre as a code ",
      desc: "We make your Azure run faster and more stable without increasing cost.",
      slug: "Azure-Health-Performance-Optimization",
      icon: <FaProjectDiagram />,
    },
    {
      title: "AKS ",
      desc: "Track score improvements monthly.",
      slug: "Cloud-Security-Posture-Improvement",
      icon: <FaRocket />,
    },
  ],
};

/* =========================
   COMPONENT
========================= */
function Services() {
  const [activeTab, setActiveTab] = useState("start");
  const navigate = useNavigate();

  return (
    <section className="services-section">
      <div className="services-container">

        {/* HEADER */}
        <div className="services-header">
          <h2>Empower Your Business with Managed Cloud Services</h2>
          <p>
            Simple, secure, and scalable Microsoft Azure services —
            from first setup to enterprise growth.
          </p>
        </div>

        {/* TABS */}
        <div className="services-tabs">
          <button
            className={activeTab === "start" ? "active" : ""}
            onClick={() => setActiveTab("start")}
          >
            START YOUR CLOUD JOURNEY
          </button>

          <button
            className={activeTab === "secure" ? "active" : ""}
            onClick={() => setActiveTab("secure")}
          >
            SECURE & MANAGE
          </button>

          <button
            className={activeTab === "grow" ? "active" : ""}
            onClick={() => setActiveTab("grow")}
          >
            OPTIMIZE & GROW
          </button>
           <button
            className={activeTab === "modernization" ? "active" : ""}
            onClick={() => setActiveTab("modernization")}
          >
            CLOUD MODERNIZATION
          </button>
        </div>

        {/* SERVICE CARDS */}
        <div className="services-grid">
          {servicesData[activeTab]?.map((item, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => navigate(`/services/${item.slug}`)}
            >
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="service-link">Learn more →</span>
            </div>
          ))}
        </div>

      </div>
      <div className="section-spacer"></div>
    </section>
  );
}

export default Services;
