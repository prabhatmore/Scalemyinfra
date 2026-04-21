import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
      title: "Tally on Cloud",
      desc: "Access your Tally anytime, from anywhere securely on the cloud.",
      slug: "Tally-on-Cloud",
      icon: <FaGift />,
    },
    {
      title: "Digital Workplace Setup ",
      desc: "Professional email, Teams, OneDrive, and secure user setup.",
      slug: "Digital-Workplace-Setup",
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
      title: "Secure Cloud Desktop",
      desc: "Safe work-from-home access using Azure security best practices.",
      slug: "azure-virtual-desktop",
      icon: <FaShieldAlt />,
    },
    {
      title: "Cloud Security & Protection",
      desc: "Track score improvements monthly.",
      slug: "cloud-infrastructure-security",
      icon: <FaRocket />,
    },
  ],

  grow: [
    {
      title: "Cloud Cost Assessment & Optimization",
      desc: "Identify waste, reduce costs, and gain full visibility into your cloud spending.",
      slug: "cloud-cost-optimization-assessment",
      icon: <FaMoneyBillWave />,
    },

    {
      title: "24×7 Cloud Support & Maintenance",
      desc: "Monitoring, troubleshooting, patching, and health checks.",
      slug: "cloud-support-maintenance",
      icon: <FaShieldAlt />,
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
      title: "Application & Data Modernization",
      desc: "Move from server-based infrastructure to fully managed cloud services.",
      slug: "application-data-modernization",
      icon: <FaMoneyBillWave />,
    },
    {
      title: "Infrastructure as a Code",
      desc: "We make your Azure run faster and more stable without increasing cost.",
      slug: "infrastructure-as-code",
      icon: <FaProjectDiagram />,
    },
    {
      title: "AKS",
      desc: "Track score improvements monthly.",
      slug: "aks",
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
