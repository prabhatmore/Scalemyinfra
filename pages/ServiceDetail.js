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
    introImage: "/images/new2cloud.png",
    introImageAlt: "Cloud adoption journey illustration showing business professionals moving towards cloud",
    about: `
This service is created for businesses that are starting their cloud journey for the first time. We help you set up Microsoft Azure the right way from day one, so you don't have to worry about confusion, security gaps, or unexpected costs later.

Instead of jumping straight into servers and applications, we first build a strong and clean cloud foundation. This ensures your Azure environment is secure, well-organized, easy to manage, and ready to scale as your business grows.

You get a simple, safe, and future-ready Azure setup—without unnecessary complexity or long-term vendor lock-in.
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
    introImage: "/images/hosting.png",
    introImageAlt: "Website and app hosting illustration",
    about: `
We host your websites and applications on Azure with built-in security,
monitoring, and backups. Whether it's a business website or a production app,
your workloads are protected and scalable.
    `,
    points: [
      "Azure App Service / VM hosting",
      "SSL & basic security hardening",
      "Monitoring & alerts",
      "Automated backups",
    ],
  },

  "explore-free-azure-services": {
    title: "Explore free Azure services",
    intro:
      "Try the Cloud — Free, Simple, and Risk-Free",
    about: `
Not sure how cloud really works for your business? We make it easy to experience Microsoft Azure before making any commitment.

We offer a free cloud trial service where you can move a small or non-critical application to Azure and see the results for yourself. This allows you to understand performance, reliability, security, and cost—without risk or disruption.
    `,
    points: [
      "See how your application performs on the cloud",
      "Understand real-world speed, availability, and reliability",
      "Learn how cloud security and backups work",
      "Get clarity on costs and scalability",
      "Gain confidence before migrating critical systems",
    ],
    whyMatters: "Cloud adoption doesn't have to be complex or risky. By testing with a less critical application, you get hands-on experience and clear insights—making future cloud decisions simple and informed.",
    whoIsThisFor: [
      "Businesses new to cloud",
      "Teams exploring Azure for the first time",
      "Organizations planning a future cloud migration",
    ],
    cta: "📩 Start your free cloud test today and experience how Microsoft Azure can support your business—before you move fully to the cloud.",
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

  "Cloud-Security-Posture-Improvement": {
    title: "Cloud Security Posture Improvement",
    intro:
      "As organizations move workloads to the cloud, security risks increase due to misconfigurations, excessive permissions, and lack of visibility. Our Cloud Security Posture Improvement service helps you continuously assess, strengthen, and maintain a secure Azure cloud environment.",
    about: `
We identify security gaps, reduce attack surfaces, and align your cloud infrastructure with industry best practices and compliance standards—without impacting performance or business continuity.
    `,
    points: [
      "Security Assessment & Baseline - Evaluate your Azure environment against Microsoft security benchmarks and best practices to identify misconfigurations, vulnerabilities, and policy gaps.",
      "Identity & Access Hardening - Implement least-privilege access, role-based access control (RBAC), multi-factor authentication (MFA), and conditional access policies.",
      "Network Security Optimization - Secure virtual networks using NSGs, firewalls, private endpoints, and zero-trust network principles.",
      "Threat Detection & Monitoring - Enable and fine-tune Microsoft Defender for Cloud, security alerts, and centralized logging for real-time threat visibility.",
      "Compliance & Governance - Enforce security policies using Azure Policy and governance controls to meet compliance requirements such as ISO, SOC, HIPAA, or internal standards.",
      "Continuous Improvement - Ongoing monitoring and recommendations to keep your cloud security posture strong as your environment evolves.",
    ],
    whyMatters: `
Reduced risk of breaches and misconfigurations

Improved visibility across cloud resources

Strong identity and access controls

Compliance-ready cloud environment

Continuous security posture monitoring

Alignment with Azure security best practices
    `,
    whoIsThisFor: [
      "Businesses migrating from on-prem to Azure",
      "Organizations with growing Azure environments",
      "Companies facing compliance or audit requirements",
      "Teams lacking in-house cloud security expertise",
    ],
  },

  "Azure-Health-Performance-Optimization": {
    title: "Azure Health & Performance Optimization",
    intro:
      "As Azure environments grow, performance issues, resource inefficiencies, and hidden bottlenecks can impact application reliability and user experience. Our Azure Health & Performance Optimization service ensures your cloud workloads run efficiently, reliably, and at peak performance.",
    about: `
We proactively monitor, analyze, and optimize your Azure infrastructure to improve availability, performance, and operational stability—while controlling costs and aligning with Azure best practices.
    `,
    points: [
      "Azure Environment Health Assessment - Evaluate the overall health of compute, storage, networking, and platform services to identify performance gaps and risks.",
      "Performance Bottleneck Analysis - Identify CPU, memory, disk I/O, network latency, and application-level issues affecting workload performance.",
      "Resource Right-Sizing - Optimize VM sizes, storage tiers, and service configurations to ensure optimal performance without over-provisioning.",
      "Monitoring & Alerting Optimization - Configure Azure Monitor, Log Analytics, and alerts for proactive issue detection and faster resolution.",
      "Availability & Resilience Improvements - Enhance reliability using availability zones, backup strategies, and failover mechanisms.",
      "Continuous Optimization - Ongoing reviews and recommendations to maintain performance as workloads and usage patterns evolve.",
    ],
    whyMatters: `
Improved application performance and responsiveness

Higher availability and reduced downtime

Optimized resource utilization

Faster issue detection and resolution

Better user experience

Stable and scalable Azure environment
    `,
    whoIsThisFor: [
      "Production workloads running on Azure",
      "Applications facing performance or reliability issues",
      "Businesses scaling Azure environments",
      "Teams needing proactive Azure monitoring and tuning",
    ],
    cta: "A high-performing, reliable, and optimized Azure environment that supports business growth while minimizing operational risk and performance disruptions.",
  },

  /* ===== CLOUD MODERNIZATION ===== */
  "azure-devops": {
    title: "Azure DevOps",
    intro:
      "Streamline your development and deployment processes with Azure DevOps.",
    about: `
Azure DevOps provides a comprehensive set of tools for planning, building, testing, and deploying applications. We help you set up and optimize your DevOps pipeline for faster, more reliable software delivery.
    `,
    points: [
      "Azure DevOps organization and project setup",
      "CI/CD pipeline configuration",
      "Source control and code management",
      "Automated testing and deployment",
      "Release management and monitoring",
    ],
  },

  "infrastructure-as-code": {
    title: "Infrastructure as Code",
    intro:
      "Manage your Azure infrastructure through code for consistency, repeatability, and version control.",
    about: `
We help you implement Infrastructure as Code (IaC) practices using tools like ARM templates, Terraform, or Bicep to automate and manage your Azure resources efficiently.
    `,
    points: [
      "IaC tool selection and setup",
      "Infrastructure templates and modules",
      "Version control and collaboration",
      "Automated provisioning and updates",
      "Infrastructure testing and validation",
    ],
  },

  "aks": {
    title: "Azure Kubernetes Service (AKS)",
    intro:
      "Deploy and manage containerized applications at scale with Azure Kubernetes Service.",
    about: `
We help you design, deploy, and manage AKS clusters for running containerized applications with high availability, scalability, and security.
    `,
    points: [
      "AKS cluster design and deployment",
      "Container orchestration and management",
      "Networking and security configuration",
      "CI/CD integration for containers",
      "Monitoring and scaling strategies",
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
    <section className={`service-detail service-${slug}`}>
      <Breadcrumbs />

      <h1>{service.title}</h1>
      <p className="service-intro">{service.intro}</p>

      {service.introImage && (
        <div className="service-intro-image">
          <img 
            src={service.introImage} 
            alt={service.introImageAlt || service.title}
            className="service-image"
          />
        </div>
      )}

      <div className="service-box">
        <h3>About this service</h3>
        <p className="service-about">{service.about}</p>

        <h4>What You Can Expect</h4>
        <ul className="service-list">
          {service.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {service.whyMatters && (
          <>
            <h3>Why This Matters</h3>
            <p className="service-about">{service.whyMatters}</p>
          </>
        )}

        {service.whoIsThisFor && (
          <>
            <h3>Who Is This For?</h3>
            <ul className="service-list">
              {service.whoIsThisFor.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}

        {service.cta && (
          <p className="service-cta-text" style={{ marginTop: '24px', fontWeight: '600', fontSize: '16px' }}>
            {service.cta}
          </p>
        )}
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
