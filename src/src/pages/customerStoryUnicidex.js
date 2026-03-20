function CustomerStoryUnicidex() {
  return (
    <section className="story-page">
      <div className="story-container">
        <img
          src="/images/customer-story-unicidex-hero.png"
          alt="UNICIDEX hybrid work customer story"
          className="story-hero-image"
        />

        <p className="story-eyebrow">Customer Story</p>
        <h1>Combining security and convenience to build hybrid work infrastructure</h1>

        <p>
          Remote work, which rapidly gained traction during the COVID-19 pandemic, has since evolved into a hybrid work
          model that combines in-office and remote work, and is now firmly established as one of the diverse ways of
          working. At UNICIDEX, a company that has contributed to advancing businesses and society by supporting the core
          of various industries as an expert in IT infrastructure, the development of a robust hybrid work foundation has
          been positioned as a key strategic focus.
        </p>

        <p>
          One of the greatest challenges in developing infrastructure is balancing convenience with security. A zero-trust
          security model is an effective solution integrating comprehensive management of entire IT work environments,
          constantly verifying access rights required by users, devices, networks, and applications.
        </p>

        <p>
          Compared to reference best practices adopted in the past, actual implementation in business operations requires
          different thinking for security and management. The methodology employed to deal with these hurdles is GASSAI, a
          service incorporating the extensive wealth of knowledge and expertise from the entire BIPROGY Group.
        </p>

        <p>
          GASSAI is the culmination of experience, technical capabilities, and knowledge developed over the past 60 years
          supporting approximately 5,000 clients in Japan. UNICIDEX, a member of the BIPROGY Group, provides services from
          consulting, design, development, security, operation, to maintenance for total corporate transformation services
          using GASSAI.
        </p>

        <p>
          One of the offered services is a managed virtual desktop called "Raku DaaS" provided by BIPROGY. "Raku DaaS" is
          built on Microsoft Azure delivering a secure and convenient virtual desktop environment as a fully managed one-stop
          solution that includes operation and maintenance. It enables organizations to implement a virtual desktop
          environment while minimizing initial costs and reducing the burden on human resources.
        </p>

        <p>
          UNICIDEX itself recognized the challenge of balancing security and convenience in hybrid work situations. They
          decided to link three key elements: a zero-trust security model to secure the IT environment, allocations to
          employees of virtual desktops (VDI), and cloud management of devices and IDs.
        </p>

        <p>
          This solution was based on the company&apos;s own experience when seeking answers to the questions, "What are the
          problems and difficulties faced by our customers? What are the key points to break through?"
        </p>

        <p>
          The project began while keeping in mind those two considerations: building internal hybrid work environments as a
          specialist of IT infrastructure, and reflecting that process in proposals as a partner close to their customers.
        </p>

        <blockquote>
          "On-premise systems are fixed assets purchased with specifications to last five years. We decided that is
          something difficult to forecast in this era of rapid change. We also decided to choose the cloud and switch our
          thinking to using rather than owning a system, giving us flexibility when responding to increases or decreases in
          resources."
          <cite>Nobuyuki Uchigashima, Director DWP Office Information Systems Dept, UNICIDEX, Ltd.</cite>
        </blockquote>

        <h2>A zero trust security infrastructure with Azure Virtual Desktop on Microsoft 365</h2>

        <p>
          Company engineers routinely work at locations outside the office, visiting sites to configure network equipment.
        </p>

        <p>
          "On-premise VDI was introduced about three years ago for only specific staff members. That was to avoid risks of
          information leaks when conducting business on PCs taken outside the company," says Nobuyuki Uchigashima, Director,
          Digital Workplace Promotion Division, Information Systems Department.
        </p>

        <p>
          "As time went by, we became aware of noticeable drops in performance due to increased resource requirements on the
          client side, with an increase in various employee activities, managing updates to Windows OS, and expanded use of
          Microsoft Teams. Specifically, we received many complaints about the difficulty with PCs as employees all started
          their work simultaneously at the beginning of the workday from 9:00 a.m. Since hardware was also aging, we began
          to consider a new VDI infrastructure towards the end of the Corona epidemic."
        </p>

        <p>
          In choosing a next-generation VDI, the first question was whether it should be on-premise or in the cloud.
        </p>

        <p>
          "On-premise systems are fixed assets purchased with specifications to last five years. We decided that is
          something difficult to forecast in this era of rapid change. We also decided to choose the cloud and switch our
          thinking to using rather than owning a system, giving us flexibility when responding to increases or decreases in
          resources," says Uchigashima.
        </p>

        <p>The company began considering implementation in May 2024.</p>

        <p>
          "One of the reasons we chose Azure Virtual Desktop (AVD) over the other three available options was the fact that
          we could reduce deployment costs by leveraging existing licenses for Microsoft 365 E3. AVD can utilize the included
          editions of Windows Enterprise, meaning the only cost required is the fee for Azure," says Tomo Matsuda, Service
          Development Group, Cloud Solution Department 2, Cloud Service Division.
        </p>

        <p>
          "We had already implemented a zero-trust security infrastructure using Microsoft 365 E3. It would mean a full
          redesign of the security architecture if we went with another company&apos;s VDI. AVD let us build a highly secure
          system with security policies applied to the existing security infrastructure for a straightforward implementation.
          An environment that allows employees to work from home is necessary, so we allow BYOD (Bring Your Own Device). The
          ability to work from a PC at home via AVD was also a key point."
        </p>

        <p>Matsuda adds the following about the advanced features of this system:</p>

        <blockquote>
          "We covered cloud-native endpoints using cloud-based identity and access management, Microsoft Entra ID, and device
          management, Microsoft Intune, for mobile devices and physical PCs. AVD also used this management approach.
          <br />
          <br />
          In general, when building a VDI environment, it is operated by domain log-in with AD (Active Directory). In this
          case, direct log-in was possible through Entra ID without access to AD. This takes advantage of SSO, multi-factor
          authentication, and administrative load reduction via the merits of cloud computing. Shifting from on-premise
          identity and access to cloud-based management matches our zero-trust security infrastructure.
          <br />
          <br />
          In addition, consolidating device management into Intune means that compliance policies, applications, and Windows
          updates can now be delivered with both manageability and flexibility from the cloud. We consider this advanced
          cloud-native management and operation as DaaS."
          <cite>Tomo Matsuda, Service Dev Group Cloud Solution Dept 2 Cloud Service Div, UNICIDEX, Ltd.</cite>
        </blockquote>

        <h2>SSO for improved user convenience</h2>

        <p>
          In August 2024, the company used AVD to start testing a PoC (Proof of Concept). "We found no major problems when
          confirming features such as operation of applications used internally for business and connectivity via LAN. We
          also saw good performance with Microsoft Teams on AVD which is optimized for the virtual environment," says Matsuda.
        </p>

        <p>
          In April 2025, AVD was implemented companywide and operation began for a next-generation hybrid work platform
          handling approximately 4,000 units. Hiroshi Takayama, Group Manager, Service Development Group, Cloud Solution
          Department 2, Cloud Service Division comments regarding improved convenience to employees:
        </p>

        <blockquote>
          "Password entry was necessary each time when using existing on-premise VDI. Entra ID configuration now enables SSO
          and allows multiple applications to be used with a single login. That is a benefit found highly convenient in daily
          work."
          <cite>Hiroshi Takayama, Group Manager, UNICIDEX, Ltd.</cite>
        </blockquote>

        <p>
          As the company has many system engineers, those users have been granted administrator privileges as part of the
          deployment for AVD.
        </p>

        <p>
          Uchigashima explains the response to user requests that administrator privileges not previously granted in the
          on-premise VDI environment be aligned for physical PCs.
        </p>

        <p>
          "Engineers increase their productivity and competitiveness with a range of tools. However, many tools are only
          usable with administrative privileges. In consideration of convenience to our employees, we decided to grant
          administrator privileges. Even for ordinary companies, there are advantages in flexible operations, such as
          enabling administrator privileges only to engineering and sales departments."
        </p>

        <p>
          Transitioning VDI from on-premise to the cloud has changed thinking about costs, explains Uchigashima.
        </p>

        <p>
          "The key difference is in fixed versus variable costs. On-premise has fixed costs which cannot be reduced after
          implementation. In contrast, cloud services are variable costs fluctuating based on usage. This allows cost
          optimization adjustment of services. Another benefit is the ability to gauge cost-effectiveness when leveraging the
          latest technologies."
        </p>

        <p>
          Given that AVD is cloud-based VDI, it also requires a change in the thinking of operations managers.
        </p>

        <p>
          "On-premise VDI requires our company to handle hardware maintenance and troubleshooting. This is unnecessary in the
          cloud. We can redirect previously required resources to other tasks, which reduces operational burdens. On the other
          hand, it is essential to gain expertise operating cloud-based infrastructure, and we are applying that knowledge to
          enhancing provided services," says Uchigashima.
        </p>

        <h2>Verification starts with Windows 365 and Windows 365 Link</h2>

        <p>
          After deploying AVD at UNICIDEX, validation started for Windows 365 and its dedicated device, Windows 365 Link.
          AVD and Windows 365 are Microsoft desktop virtualization services, but while AVD is an IaaS (Infrastructure as a
          Service), Windows 365 is a SaaS (Software as a Service).
        </p>

        <p>
          As a SaaS, it can be used immediately by simply selecting memory, storage, and CPU, with costs easy to calculate by
          monthly billing, but it is not suited for customized requirements.
        </p>

        <p>
          "Windows 365 Link, which can be called a thin client exclusively for Windows 365, was introduced this spring and
          has broadened both the scope of our internal use of, and our proposals to, our customers for Windows 365. As an
          example, by leaving devices in the office many employees who often work remotely from home do not need to bring
          their company-paid devices with them when coming to work. This allows employees to come to work empty-handed and
          reduces the risk of theft or loss of devices. Once employees are fully familiar with usage, we would like to verify
          how working styles change," says Matsuda.
        </p>

        <p>
          Takayama, who travels frequently, explains that he has already sent Windows 365 Link to the Kansai branch office:
        </p>

        <p>
          "If I leave Windows 365 Link at the Kansai branch office and connect a keyboard and monitor, it gives me the exact
          same environment as if I were at the headquarters. AVD and Windows 365 have different characteristics, so we will
          need to use them differently for different purposes."
        </p>

        <p>
          In this migration project, from the beginning, the team was aware of the need to reflect experience and knowledge
          gained from developing infrastructure for their own company into customer proposals through "Raku DaaS".
        </p>

        <blockquote>
          "Experience we have gained in designing, building, and operating zero-trust security, managing endpoints and virtual
          desktop environments in the cloud is also reflected in Raku DaaS. Moving ahead, as we become more adept with AVD,
          those enhancements will be reflected in the service menu for Raku DaaS. We would like to show our customers who are
          implementing Microsoft 365 E3 that we ourselves have already realized optimal infrastructure for hybrid work."
          <cite>Hiroshi Takayama, Group Manager, UNICIDEX, Ltd.</cite>
        </blockquote>

        <p>
          UNICIDEX aims to fully optimize next-generation IT infrastructure. As an end-user and partner, Microsoft will
          continue to propose services built with zero-trust security in mind, such as Windows 365 and Azure Virtual Desktop.
        </p>

        <a href="/solutions" className="story-back-link">
          Back to Solutions
        </a>
      </div>
    </section>
  );
}

export default CustomerStoryUnicidex;
