import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";


/* =========================
   SERVICE DETAILS (MATCHING SLUGS)
========================= */
const serviceDetails = {
  /* ===== START YOUR CLOUD JOURNEY ===== */

  "Tally-on-Cloud": {
  title: "Tally on Cloud",
  intro:
    "Tally on Cloud means your Tally software and data are hosted on a secure cloud server instead of a local computer. You can access it through internet from any devices like laptop, desktop, or even tablet.",
  introImage: "/images/tallyoncloud.jpg",
  introImageAlt: "Cloud adoption journey illustration",
  about: `
Move your Tally accounting software to cloud and use it just like your office system, but without location restrictions.
  `,
  points: [
    "Access Tally from office, home, or on the go — all you need is internet.",
    "Keep your data safe and secure with automatic backups.",
    "Enjoy fast and smooth performance.",
    "Multiple users can work at the same time.",
    "No manual backups required.",
    "Access latest data anytime.",
  ],

  plans: [
    {
      name: "Starter Plan",
      price: "₹7,999 / Month",
      highlight: false,
      features: [
        "Up to 5 Users",
        "2 vCPU & 8 GB RAM",
        "Secure Hosting",
        "Managed Disk Storage",
        "Daily Backup Included",
        "Access from Anywhere (RDP)",
        "Multi-User Support",
        "Basic Security Setup",
        "Support & Monitoring"
      ]
    },
    {
      name: "Business Plan",
      price: "₹14,999 / Month",
      highlight: true,
      features: [
        "Up to 10 Users",
        "4 vCPU & 16 GB RAM",
        "Secure Hosting",
        "Managed Disk Storage",
        "Daily Backup Included",
        "Access from Anywhere (RDP)",
        "Enhanced Performance",
        "Advanced Security Setup",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise Plan",
      price: "₹24,999 / Month",
      highlight: false,
      features: [
        "Up to 20 Users",
        "8 vCPU & 32 GB RAM",
        "Premium Managed Disk Storage",
        "Daily Backup + DR",
        "Access via RDP / VPN",
        "Advanced Security",
        "Dedicated Support",
        "24/7 Monitoring"
      ]
    }
  ]
},

  /* ===== DIGITAL WORKPLACE ===== */

  "Digital-Workplace-Setup": {
    title: "Digital Workplace Setup",
    intro:
      "Set up your complete business workspace in the cloud — including email, documents, collaboration tools, and security. Everything your company needs to start and operate efficiently from day one.",
      introImage: "/images/digitalworkspace.png",
      introImageAlt: "Digital workplace setup illustration",
      about: `
We help you build a fully functional digital office using cloud tools, so your team can work from anywhere without dependency on physical systems.

From professional email setup to document management, team collaboration, and secure access — we handle everything required to get your business up and running quickly and securely.
    `,
    points: [
      "📧 Email Setup – Business email with custom domain",
  "🤝 Collaboration – Microsoft Teams for chat & meetings",
  "☁️ Storage – OneDrive & SharePoint for file management",
  "📊 Productivity – Word, Excel, PowerPoint access",
  "🔐 Security – MFA & secure identity access",
  "💻 Device Setup – Laptop & mobile configuration",
  "🔄 Migration – Email and file migration to cloud",
  "👥 User Setup – User creation & access control"
      
    ],

    includes: [
      {
        title: "Email & Communication",
        items: [
          "Business email setup",
          "Exchange Online configuration",
          "Outlook setup",
          "Email migration"
        ]
      },
      {
        title: "Collaboration Tools",
        items: [
          "Microsoft Teams setup",
          "SharePoint Online",
          "OneDrive cloud storage",
          "File sharing"
        ]
      },
      {
        title: "Security & Access",
        items: [
          "MFA setup",
          "Identity management",
          "Secure login policies"
        ]
      }
    ], },

  "website-app-hosting":
   {
    title: "Launch and scale your applications on Azure — fast, secure, and hassle-free.",
    intro:
      "We handle deployment, security, scaling, and monitoring — so you can focus on your business.",
    introImage: "/images/hosting.png",
    introImageAlt: "Website and app hosting illustration",
    about: `
We provide fully managed hosting on Microsoft Azure so you can focus on your business while we handle deployment, security, scaling, and monitoring.
  `,

  points: [
    "Deploy your website or app in minutes",
    "Built on Microsoft Azure infrastructure",
    "Auto scaling based on traffic",
    "99.9% uptime and reliability",
    "Built-in monitoring and alerts",
    "Optimized for performance and cost"
  ],

  includes: [
    {
      title: "🚀 Easy Deployment",
      items: [
        "Deploy from GitHub or code upload",
        "Support for Node.js, .NET, PHP, Python",
        "CI/CD pipeline setup",
        "Quick environment configuration"
      ]
    },
    {
      title: "⚡ Scalable Infrastructure",
      items: [
        "Auto scaling",
        "Load balancing",
        "High availability setup",
        "Global Azure regions"
      ]
    },
    {
      title: "🔐 Security",
      items: [
        "SSL certificates",
        "Firewall protection",
        "Secure access control",
        "DDoS protection"
      ]
    },
    {
      title: "📊 Monitoring",
      items: [
        "Application insights",
        "Performance monitoring",
        "Logs & alerts",
        "Optimization support"
      ]
    }
  ],

  steps: [
    {
      title: "Connect Code",
      desc: "Link GitHub or upload your application"
    },
    {
      title: "Deploy",
      desc: "We deploy and configure your app on Azure"
    },
    {
      title: "Scale",
      desc: "Your app scales automatically"
    },
    {
      title: "Monitor",
      desc: "We monitor and optimize performance"
    }
  ],

  plans: [
    {
      name: "Starter",
      price: "₹2,999/month",
      features: [
        "Single app hosting",
        "SSL included",
        "Basic monitoring",
        "Email support"
      ]
    },
    {
      name: "Growth",
      price: "₹6,999/month",
      highlight: true,
      features: [
        "Multiple apps",
        "Auto scaling",
        "Daily backup",
        "Priority support"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "High availability",
        "Load balancing",
        "Advanced security",
        "24/7 support"
      ]
    }
  ]
},

  /* ===== SECURE & RUN YOUR BUSINESS ===== */
 "backup-recovery": {
  title: "Backup & Disaster Recovery",
  intro:
    "Protect your business from data loss and downtime with secure Azure Backup & Disaster Recovery solutions.",
  
  introImage: "/images/backup-dr.png",
  introImageAlt: "Azure backup and disaster recovery illustration",

  about: `
Data loss, ransomware, or system failures can disrupt your business anytime. 
Our Azure Backup & Disaster Recovery solution ensures your critical data and applications are always protected and recoverable.

We design and implement secure backup strategies with fast recovery options, helping your business stay operational with minimal downtime.
  `,

  points: [
    "Protect critical business data from loss or corruption",
    "Fast recovery to minimize downtime",
    "Secure backups stored in Azure",
    "Protection against ransomware",
    "Automated backup scheduling",
    "Scalable solution for growing workloads",
    "Compliance-ready backup policies",
    "Business continuity with disaster recovery"
  ],

  includes: [
    {
      title: "🔧 Backup Setup",
      items: [
        "Azure Backup configuration",
        "VM, database, and file backup",
        "Automated backup policies",
        "Retention management"
      ]
    },
    {
      title: "🌍 Disaster Recovery",
      items: [
        "Azure Site Recovery setup",
        "Failover and failback",
        "Cross-region replication",
        "DR testing"
      ]
    },
    {
      title: "🔐 Security",
      items: [
        "Encrypted backups",
        "Ransomware protection",
        "Secure access control",
        "Backup alerts"
      ]
    },
    {
      title: "📊 Monitoring",
      items: [
        "Backup status monitoring",
        "Failure alerts",
        "Recovery testing",
        "Performance optimization"
      ]
    }
  ],

  steps: [
    {
      title: "Assess",
      desc: "Analyze workloads and define backup strategy"
    },
    {
      title: "Configure",
      desc: "Set up Azure Backup and DR policies"
    },
    {
      title: "Protect",
      desc: "Automated backups run securely"
    },
    {
      title: "Recover",
      desc: "Quick restore or failover during incidents"
    }
  ],

  plans: [
    {
      name: "Basic Backup",
      price: "₹3,999/month",
      features: [
        "VM backup",
        "Daily backup",
        "Basic monitoring",
        "Email support"
      ]
    },
    {
      name: "Business DR",
      price: "₹8,999/month",
      highlight: true,
      features: [
        "Backup + DR",
        "Azure Site Recovery",
        "Priority support",
        "Advanced monitoring"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Multi-region DR",
        "High availability",
        "Compliance setup",
        "24/7 support"
      ]
    }
  ],

  cta: "Don’t risk your business data. Secure your workloads with Azure Backup & Disaster Recovery today."
  },

  "azure-virtual-desktop": {
  title: "Secure Cloud Desktop",
  intro:
    "Access your office from anywhere with Azure Virtual Desktop — secure, scalable, and easy to manage.",

  introImage: "/images/avd.png",

  about: `
Azure Virtual Desktop (AVD) allows your team to securely access desktops and applications from anywhere.

We set up and manage your cloud desktop environment so your team can work safely without dependency on office systems.
  `,

  points: [
    "Work from anywhere",
    "Secure login with MFA",
    "Access apps on any device",
    "No dependency on office PCs",
    "Centralized control",
    "Cost-efficient solution"
  ],

  fslogix: {
    title: "User Profile Experience (FSLogix)",
    desc: "FSLogix ensures your desktop, files, and settings follow you wherever you log in — giving you a consistent experience every time.",
  
    points: [
      "Your personal desktop loads instantly",
      "Files and settings are always available",
      "No data loss even if system changes",
      "Works seamlessly across multiple sessions",
      "Improves login speed and performance"
    ]
  },

  includes: [
    {
      title: "Desktop Setup",
      items: [
        "Azure Virtual Desktop deployment",
        "Windows multi-session setup",
        "Host pool configuration"
      ]
    },
    {
      title: "Security",
      items: [
        "Azure AD integration",
        "MFA setup",
        "Conditional access"
      ]
    },
    {
      title: "Applications",
      items: [
        "Microsoft 365 apps",
        "Business apps",
        "User-based access"
      ]
    }
  ],

  steps: [
    {
      title: "Setup",
      desc: "We deploy your cloud desktop"
    },
    {
      title: "Access",
      desc: "Users log in from anywhere"
    },
    {
      title: "Work",
      desc: "Use apps like office system"
    },
    {
      title: "Manage",
      desc: "We monitor and optimize"
    }
  ],

  cta: "Enable secure remote work with Azure Virtual Desktop today."
},
"cloud-support-maintenance": {
  title: "24x7 Tier Infrastructure Support Services",

  intro:
    "Ensure your infrastructure is always available, secure, and optimized with our 24x7 managed support services.",

  about: `
We provide continuous monitoring, rapid incident resolution, and proactive infrastructure management across Azure, AWS, and on-prem environments.

Our team ensures your business-critical workloads run smoothly with minimal downtime and maximum performance.
  `,

  points: [
    "24x7 monitoring and alerting",
    "Incident and problem management",
    "Patch and change management",
    "Backup and disaster recovery",
    "Cloud infrastructure management (Azure/AWS)",
    "Security monitoring and compliance"
  ],

  includes: [
    {
      title: "🖥 Monitoring & Operations",
      items: [
        "24x7 infrastructure monitoring",
        "Alert management",
        "Performance tracking",
        "Health checks"
      ]
    },
    {
      title: "🚨 Incident Management",
      items: [
        "P1–P4 incident handling",
        "Root cause analysis",
        "Escalation management",
        "On-call support"
      ]
    },
    {
      title: "⚙️ Maintenance",
      items: [
        "Patch management",
        "OS updates",
        "Configuration management",
        "System optimization"
      ]
    },
    {
      title: "🔐 Security",
      items: [
        "Vulnerability checks",
        "Access control",
        "Compliance monitoring",
        "Threat alerts"
      ]
    }
  ],

  steps: [
    {
      title: "Assess",
      desc: "Understand your infrastructure and define support scope"
    },
    {
      title: "Onboard",
      desc: "Set up monitoring tools and access"
    },
    {
      title: "Monitor",
      desc: "Continuous tracking and alerting"
    },
    {
      title: "Optimize",
      desc: "Improve performance and reduce cost"
    }
  ],

  sla: [
    { priority: "P1", desc: "Critical (Outage)", response: "15m", resolution: "2h" },
    { priority: "P2", desc: "High", response: "30m", resolution: "4h" },
    { priority: "P3", desc: "Medium", response: "2h", resolution: "8h" },
    { priority: "P4", desc: "Low", response: "4h", resolution: "24h" }
  ],

  plans: [
    {
      name: "Basic",
      price: "₹25,000/month",
      features: [
        "Monitoring only",
        "Email support",
        "Basic SLA"
      ]
    },
    {
      name: "Standard",
      price: "₹50,000/month",
      highlight: true,
      features: [
        "24x7 monitoring",
        "Incident management",
        "Phone + email support",
        "Advanced SLA"
      ]
    },
    {
      name: "Premium",
      price: "₹1,00,000/month",
      features: [
        "Dedicated engineer",
        "Proactive optimization",
        "Custom SLA",
        "Priority support"
      ]
    }
  ],

  cta: "Get 24x7 expert support for your infrastructure today."
},

  /* ===== OPTIMIZE & GROW ===== */
  "cloud-cost-optimization-assessment": {
  title: "Cloud Cost Optimization Assessment Service",

  intro:
    "Understand exactly where your cloud spending is going and how to reduce it with a detailed, expert-led assessment.",
    introImage: "/images/cost.jpg",
    introImageAlt: "Cloud Cost Assessment Dashboard",
  about: `
Cloud costs often increase due to unused resources, over-provisioning, and lack of visibility.

We perform a deep analysis of your infrastructure and provide clear, actionable recommendations along with detailed reports — helping you optimize cost, improve efficiency, and make better decisions.
  `,

  points: [
    "Identify unused and idle resources",
    "Detect over-provisioned services",
    "Highlight cost leaks and inefficiencies",
    "Improve infrastructure efficiency",
    "Gain full visibility into cloud spending",
    "Receive clear and actionable recommendations"
  ],

  includes: [
    {
      title: "💰 Cost Analysis",
      items: [
        "Detailed cost breakdown",
        "Service-wise spending analysis",
        "High-cost resource identification",
        "Usage vs cost correlation"
      ]
    },
    {
      title: "🖥 Infrastructure Assessment",
      items: [
        "Compute, storage, and network review",
        "Resource utilization analysis",
        "Performance vs cost evaluation",
        "Architecture-level insights"
      ]
    },
    {
      title: "⚙️ Optimization Recommendations",
      items: [
        "Right-sizing recommendations",
        "Unused resource cleanup",
        "Storage optimization",
        "Reserved instance suggestions"
      ]
    },
    {
      title: "🔄 Automation Opportunities",
      items: [
        "VM start/stop scheduling",
        "Backup automation suggestions",
        "Patch automation opportunities",
        "Auto-scaling recommendations"
      ]
    }
  ],

  steps: [
    {
      title: "Discovery",
      desc: "Collect infrastructure and billing data"
    },
    {
      title: "Analysis",
      desc: "Analyze usage patterns, performance, and cost"
    },
    {
      title: "Recommendations",
      desc: "Provide detailed optimization plan with savings"
    },
    {
      title: "Consultation",
      desc: "Walkthrough report and answer questions"
    }
  ],

  deliverables: [
    "Cost Optimization Report",
    "Savings Opportunity Report",
    "Detailed Recommendations Document",
    "Automation Suggestions",
    "Consultation Session"
  ],

  highlight: `
We don’t just give generic advice — we provide exact resource-level recommendations with estimated savings, so you know exactly what to change and how much you can save.
  `,

  plans: [
    {
      name: "One-Time Assessment",
      price: "₹15,000 - ₹50,000",
      highlight: true,
      features: [
        "Full infrastructure analysis",
        "Detailed cost report",
        "Savings recommendations",
        "Consultation session"
      ]
    },
    {
      name: "Advanced Assessment",
      price: "₹75,000+",
      features: [
        "Deep-dive analysis",
        "Architecture-level recommendations",
        "Automation plan",
        "Priority consultation"
      ]
    }
  ],

  cta: "Get a detailed cloud cost optimization report and start saving today."
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

 "cloud-infrastructure-security": {
  title: "Cloud Security & Protection",

  intro:
    "Protect your cloud infrastructure from threats, misconfigurations, and unauthorized access with our structured security plans. We secure your Azure environment with best practices, monitoring, and proactive protection — so your business stays safe without complexity.",

  introImage: "/images/security.png",
  introImageAlt: "Cloud security protection illustration",

  about: `
Cloud environments can be vulnerable if not properly configured and monitored.

Our Cloud Security & Protection service provides a layered approach covering identity, access, network, and continuous monitoring.

Whether you are just starting or running production workloads, we offer flexible security plans to match your business needs.
  `,

  points: [
    "Protect cloud resources from unauthorized access",
    "Reduce risk of data breaches and misconfigurations",
    "Secure identities with MFA and access controls",
    "Monitor threats and suspicious activities",
    "Improve overall cloud security posture",
    "Align with industry best practices and compliance"
  ],

  includes: [
    {
      title: "🔐 Basic Security",
      items: [
        "Identity & access setup (RBAC)",
        "Multi-Factor Authentication (MFA)",
        "Basic network security (NSG rules)",
        "Security recommendations review",
        "Monthly security check"
      ]
    },
    {
      title: "🛡 Standard Security",
      items: [
        "Everything in Basic",
        "Microsoft Defender for Cloud setup",
        "Threat detection & alerts",
        "Vulnerability assessment",
        "Secure access policies",
        "Monthly security report"
      ]
    },
    {
      title: "🚀 Premium Security",
      items: [
        "Everything in Standard",
        "24×7 security monitoring",
        "Incident response support",
        "Advanced threat protection",
        "Compliance & policy enforcement",
        "Continuous security improvement"
      ]
    }
  ],

  steps: [
    {
      title: "Assess",
      desc: "Review your current security posture"
    },
    {
      title: "Secure",
      desc: "Implement identity, network, and access controls"
    },
    {
      title: "Monitor",
      desc: "Track threats and security alerts"
    },
    {
      title: "Improve",
      desc: "Continuously enhance protection"
    }
  ],

  whyMatters: `
Reduced risk of breaches and misconfigurations

Better visibility across cloud resources

Stronger identity and access controls

Compliance-ready cloud environment

Continuous protection and monitoring
  `,

  whoIsThisFor: [
    "Businesses moving to Azure",
    "Organizations handling sensitive data",
    "Companies needing compliance readiness",
    "Teams without dedicated security experts"
  ],

  cta: "Secure your cloud infrastructure before risks turn into incidents."
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
"data-modernization": {
  title: "Data Modernization",

  intro:
    "Move from server-based infrastructure to fully managed cloud services — no servers, no maintenance, just performance and scalability.",

  introImage: "/images/modernization.png",
  introImageAlt: "Application and data modernization illustration",

  about: `
Modernize your IT environment by shifting from traditional server-based setups to fully managed Azure cloud services.

We help you eliminate infrastructure management, reduce operational overhead, and improve performance by leveraging platform-based services.

No need to worry about patching, scaling, backups, or server maintenance — everything is handled by the cloud, so you can focus on your business.
  `,

  points: [
    "No server management or maintenance",
    "Built-in scalability and high availability",
    "Automatic patching and updates",
    "Improved performance and reliability",
    "Reduced operational cost and effort",
    "Secure and compliant cloud environment"
  ],

  /* 🔥 Child Services Instead of Includes */
  childServices: [
    {
      title: "Azure SQL Database (PaaS)",
      desc: "Move from traditional SQL servers to a fully managed database with automated backups, scaling, and built-in security.",
    },
    {
      title: "Azure File Share",
      desc: "Replace on-prem file servers with secure, scalable cloud file storage accessible from anywhere.",
    },
    {
      title: "Azure App Service",
      desc: "Host your applications on a fully managed platform without worrying about servers, patching, or infrastructure management.",
    }
  ],

  steps: [
    {
      title: "Assess",
      desc: "Understand your current infrastructure"
    },
    {
      title: "Plan",
      desc: "Identify workloads for modernization"
    },
    {
      title: "Migrate",
      desc: "Move to managed Azure services"
    },
    {
      title: "Optimize",
      desc: "Improve performance and cost efficiency"
    }
  ],

  whyMatters: `
Reduced infrastructure complexity

Improved scalability and performance

Lower operational overhead

Faster deployment and updates

Better security and reliability
  `,

  whoIsThisFor: [
    "Businesses running applications on virtual machines",
    "Organizations managing on-prem servers",
    "Companies looking to reduce infrastructure overhead",
    "Teams wanting to focus on applications instead of servers"
  ],

  cta: "Modernize your applications and eliminate server management today."
},
  "application-modernization": {
    customLayout: "application-modernization",
    title: "Application Modernization",
    intro:
      "Build once. Run anywhere. Scale effortlessly with a container-first cloud architecture.",
    introImage: "/images/modernization.png",
    introImageAlt: "Application modernization and container deployment illustration",
    simpleWords: [
      "Containerization packs your app so it runs the same way everywhere.",
      "Move faster with automated deployments and repeatable infrastructure.",
      "Scale confidently on cloud-native platforms without server overhead.",
    ],
    quickFlow: [
      "Your Application",
      "Pack in Container",
      "Run Anywhere",
    ],
    points: [
      "Faster deployment with automation",
      "Reliable and consistent releases",
      "Elastic scalability for growth",
      "Security built into each layer",
      "Cost-efficient cloud operations",
    ],
    steps: [
      { title: "Understand", desc: "Review app architecture, workloads, and deployment goals." },
      { title: "Containerize", desc: "Package workloads with Docker and optimized images." },
      { title: "Provision", desc: "Set up cloud infrastructure with Terraform and DevOps pipelines." },
      { title: "Automate", desc: "Enable CI/CD for build, test, and release automation." },
      { title: "Deploy", desc: "Run and scale on Kubernetes with high availability." },
      { title: "Monitor", desc: "Track health, logs, and performance continuously." },
    ],
    plans: [
      {
        name: "Starter",
        includesTitle: "For small apps and POCs",
        price: "₹15,000 - ₹30,000",
        features: [
          "Basic containerization (Docker)",
          "Single app deployment",
          "Basic CI/CD pipeline",
          "Manual Kubernetes setup",
          "1 environment (Dev/Test)",
        ],
      },
      {
        name: "Standard",
        includesTitle: "For growing businesses",
        price: "₹40,000 - ₹80,000",
        highlight: true,
        features: [
          "Full app containerization",
          "Terraform-based infrastructure",
          "CI/CD pipeline (build + deploy)",
          "Kubernetes deployment",
          "Monitoring setup",
        ],
      },
      {
        name: "Enterprise",
        includesTitle: "For large organizations",
        price: "₹1L+",
        features: [
          "Multi-environment setup",
          "Advanced Terraform + networking",
          "Secure CI/CD pipelines",
          "Auto-scaling and high availability",
          "24x7 monitoring and alerts",
        ],
      },
    ],
    whyChoose: [
      "7+ years of cloud delivery experience",
      "Azure, Kubernetes, and DevOps experts",
      "End-to-end ownership from design to support",
      "Reliable support for ongoing operations",
    ],
    technologies: [
      "Docker",
      "Kubernetes (AKS)",
      "Terraform",
      "Azure DevOps",
      "GitHub Actions",
      "Microsoft Azure",
      "Prometheus",
      "Grafana",
    ],
    cta: "Ready to deploy smarter, faster, and safer?",
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

  if (service.customLayout === "application-modernization") {
    return (
      <section className={`service-detail service-${slug} app-modernization-page`}>
        <Breadcrumbs />
        <div className="container-service-page">
          <section className="cs-hero">
            <div>
              <span className="cs-hero-badge">OUR SERVICE</span>
              <h1>Containerized Application Deployment &amp; Automation</h1>
              <p className="cs-hero-tagline">Build Once. Run Anywhere. Scale Effortlessly.</p>
              <p className="cs-hero-description">
                Build once, run anywhere. We help you deploy your applications using
                containers, automation, and cloud platforms.
              </p>
            </div>
            <div>
              <img
                src="/images/container.jpg"
                alt="Containerized application deployment and automation"
                className="cs-hero-image"
              />
            </div>
          </section>

          <section className="cs-what">
            <img
              src="/images/container-howitwork.png"
              alt="Containerization and simple explanation diagram"
              className="cs-how-image"
            />
          </section>

          <section className="cs-keybenefits-block" id="cs-how">
            <img
              src="/images/keybenefitscontainer.png"
              alt="How it works and key benefits for containerized deployment"
              className="cs-keybenefits-image"
            />
          </section>

          <section className="cs-cta">
            <h2>Ready to Deploy Smarter, Faster and Safer?</h2>
            <button className="cs-cta-btn" onClick={onQuoteClick}>
              Contact Us
            </button>
          </section>
        </div>
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

        <h4>Key Benefits</h4>
        <ul className="service-list">
          {service.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        {service.includes && (
  <>
    <h4 style={{ marginTop: "30px" }}>What’s Included</h4>

    <div className="includes-grid">
      {service.includes.map((section, index) => (
        <div key={index} className="includes-card">
          <h5>{section.title}</h5>
          <ul>
            {section.items.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
)}

{service.fslogix && (
  <div className="fslogix-section">
    <h3>{service.fslogix.title}</h3>
    <p>{service.fslogix.desc}</p>

    <ul className="service-list">
      {service.fslogix.points.map((point, index) => (
        <li key={index}>✔ {point}</li>
      ))}
    </ul>
  </div>
)}

{service.steps && (
  <div className="steps-section">
    <h3>How It Works</h3>

    <div className="steps-grid">
      {service.steps.map((step, index) => (
        <div key={index} className="step-card">
          <div className="step-number">{index + 1}</div>
          <h4>{step.title}</h4>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
)}


{slug === "Digital-Workplace-Setup" && (
  <div className="plans-image-section">
    <h4 style={{ marginTop: "30px" }}>
      Microsoft 365 Plans Comparison
    </h4>

    <img
      src="/images/m365-plans.png"
      alt="Microsoft 365 Plans Comparison"
      className="plans-image"
    />
  </div>
)}

        {/* ✅ ADD PRICING HERE */}
{service.plans && (
  <div className="pricing-section">
    <h2 className="pricing-title">Plans & Pricing</h2>

    <div className="pricing-grid">
      {service.plans.map((plan, index) => (
        <div
          key={index}
          className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
        >
          {plan.highlight && (
            <div className="badge">Most Popular</div>
          )}

          <h3>{plan.name}</h3>
          <h2 className="price">{plan.price}</h2>

            {/* ✅ ADD THIS */}
  {plan.includesTitle && (
    <h4 className="includes-title">{plan.includesTitle}</h4>
  )}

          <ul>
            {plan.features.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>

          <button className="btn-primary" onClick={onQuoteClick}>
            Buy Now
          </button>
        </div>
      ))}
    </div>
  </div>
)}

{service.childServices && (
  <>
    <h2 className="section-heading">Modernization Services</h2>

    <div className="modern-grid">
      {service.childServices.map((item, index) => (
        <div key={index} className="modern-card">
          
          <div className="modern-icon">
            {item.title.includes("SQL") && "🗄️"}
            {item.title.includes("File") && "📁"}
            {item.title.includes("App") && "🌐"}
          </div>

          <h3>{item.title}</h3>
          <p>{item.desc}</p>

        </div>
      ))}
    </div>
  </>
)}

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
