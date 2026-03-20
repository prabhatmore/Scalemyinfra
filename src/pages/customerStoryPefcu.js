function CustomerStoryPefcu() {
  return (
    <section className="story-page">
      <div className="story-container">
        <img
          src="/images/customer-story-pefcu.png"
          alt="Publix Employees Federal Credit Union customer story"
          className="story-hero-image"
        />

        <p className="story-eyebrow">Read the story</p>
        <h1>Publix Employees Federal Credit Union</h1>

        <p>
          Publix Employees Federal Credit Union (PEFCU) has always been about empowering hardworking Publix associates with
          better financial options. Founded in 1957 to serve Publix Super Markets associates and their families, PEFCU has
          grown into a $1.54 billion member-owned credit union grounded in a culture of service, trust, and forward-thinking
          leadership.
        </p>

        <p>
          With a flat organizational structure and a deep commitment to empowering its team, PEFCU fosters an environment of
          collaboration and innovation. "Having the freedom to explore and implement change, that&apos;s what makes working
          here special," says Ali Molavi, Infrastructure Solutions Architect at PEFCU. That spirit of innovation was put to
          the test when increasingly erratic hurricane patterns threatened the data storage infrastructure of the
          Florida-based credit union.
        </p>

        <p>
          "We used to assume that having our two data centers on opposite sides of the state would provide enough protection
          from storms," says Molavi. "But in the last three years, hurricanes have hit both sides at once. That changed
          everything. We needed a more resilient solution." The very real threat of hurricane-related outages, and the aging,
          fragmented infrastructure that couldn&apos;t adapt, forced PEFCU to rethink everything about its disaster recovery and
          hybrid architecture.
        </p>

        <h2>The case for change</h2>

        <p>
          The existing setup included servers in Lakeland and Jacksonville. PEFCU&apos;s infrastructure had been built around a
          fully virtualized VMware environment, supported by traditional SAN storage and branch-level servers. But this
          approach created increasing complexity, operational inefficiencies, and rising costs.
        </p>

        <p>
          "Everything was aging out," says Molavi. "We were facing hardware replacements, licensing uncertainty, and the
          limitations of a system that just couldn&apos;t scale or simplify."
        </p>

        <p>
          Adding to the pressure was a pending site relocation in Jacksonville. "We had no choice, we had to vacate the
          site," Molavi recalls. "But rather than relocate the same stack, we took a step back and reimagined what our
          infrastructure could be."
        </p>

        <blockquote>
          "Using Azure Migrate, we were able to move entire subnets in batches without anyone noticing. It was a seamless
          experience for our internal teams and our members."
          <cite>Ali Molavi, Infrastructure Solutions Architect, PEFCU</cite>
        </blockquote>

        <h2>From dual sites to a unified hybrid cloud</h2>

        <p>
          After evaluating multiple options, including refreshing existing hypervisor hardware and exploring other popular
          solutions, PEFCU ultimately selected Azure Local and Azure Arc for hybrid flexibility, simplified management, and
          seamless integration with Azure public cloud.
        </p>

        <p>
          "We weren&apos;t ready for a full cloud migration, some of our legacy apps and vendor tools required on-prem
          infrastructure," explains Molavi. "But Azure Local let us bridge the gap with a hybrid solution that&apos;s simple to
          manage, cost-effective, and future-proof."
        </p>

        <p>
          PEFCU consolidated its data storage footprint into a single location, HostDime, a Tier IV data center in Orlando,
          gaining a more resilient foundation for disaster recovery with higher availability and uptime built into the
          facility&apos;s design. Pairing this with a cloud-optimized strategy allowed the team to eliminate the need for a
          separate physical disaster recovery site, reducing costs while improving scalability and failover capabilities.
        </p>

        <p>
          Azure Site Recovery (ASR) played a pivotal role. "Failover and failback with ASR were smoother than I&apos;ve seen with
          any other platform," says Molavi. "Testing and deploying our disaster recovery plan became faster, easier, and more
          affordable." These changes weren&apos;t just technical, they ensured continuity for members who rely on PEFCU services
          every day, especially in times of crisis.
        </p>

        <h2>Looking forward</h2>

        <p>
          With core infrastructure consolidated and stabilized, PEFCU is turning attention to the future. Molavi envisions
          migrating 20-25% of workloads to Azure public cloud in the near term, with a goal of reversing that ratio within
          five years.
        </p>

        <p>
          "We&apos;d like to have 80% of our environment in the cloud eventually," he says. "Azure Local has made that pathway
          possible."
        </p>

        <p>
          PEFCU is also in the early stages of its AI journey and is actively exploring potential applications, particularly
          around conversational AI and customer service. While any new technology must meet strict regulatory requirements,
          the organization is keeping a close eye on developments in the space.
        </p>

        <h2>Partnership with Lenovo</h2>

        <p>
          To successfully implement Azure Local, PEFCU partnered with Lenovo, whose close collaboration with Microsoft helped
          ensure seamless hardware integration. Lenovo&apos;s ThinkAgile MX for Azure Local provided enterprise-grade performance,
          reliability, and ease of management.
        </p>

        <p>
          "Lenovo was fully integrated with Azure Local, making daily management and updates significantly easier," says
          Molavi.
        </p>

        <p>
          PEFCU leveraged Lenovo hardware to consolidate legacy servers into just four compact 1U nodes, greatly reducing
          physical space, power usage, and maintenance efforts. The nodes provided advanced all-flash storage including NVMe
          technology, matching PEFCU&apos;s performance and scalability requirements.
        </p>

        <p>
          Lenovo&apos;s competitive pricing, coupled with certified, continually updated hardware, provided substantial cost
          efficiencies. "Purchasing Lenovo hardware was actually less expensive than maintaining our existing setup, simply
          because the hardware is more efficient," Molavi notes.
        </p>

        <p>
          The Lenovo-Microsoft partnership enabled PEFCU&apos;s infrastructure transformation, streamlining operations and laying a
          robust foundation for long-term cloud strategy.
        </p>

        <blockquote>
          "Failover and failback with ASR were smoother than I&apos;ve seen with any other platform."
          <cite>Ali Molavi, Infrastructure Solutions Architect, PEFCU</cite>
        </blockquote>

        <h2>A seamless migration, even across the state</h2>

        <p>
          Azure Migrate played a central role in simplifying the process, enabling VM migrations with near-zero disruption,
          even across limited network bandwidth. The credit union migrated 120 virtual machines and 30TB of data from two
          legacy data centers over a wide-area network, while retaining IP addresses and minimizing disruption.
        </p>

        <p>
          "We had limited bandwidth, just 500 Mbps, but we still kept downtime under 10 minutes per VM," Molavi says.
          "Using Azure Migrate, we were able to move entire subnets in batches without anyone noticing. It was a seamless
          experience for our internal teams and our members."
        </p>

        <p>
          In tandem, PEFCU eliminated servers from seven branches by migrating workloads to SaaS platforms like SharePoint
          and Azure Files and establishing a centralized cloud-based VM accessible via a secure SD-WAN network.
        </p>

        <p>
          "We built in redundancy using Azure Virtual WAN," adds Molavi. "It&apos;s fast, reliable, and dramatically simplified
          our branch architecture."
        </p>

        <h2>Operational simplicity, centralized management</h2>

        <p>
          By moving to Azure, PEFCU not only reduced complexity, they unlocked new efficiency and agility. Replacing aging
          servers across two sites with a compact hyperconverged infrastructure significantly reduced maintenance burden.
        </p>

        <p>
          "Everything&apos;s easier now," says Molavi. "No more SANs, fewer physical servers, faster firmware updates, and it all
          runs through the Azure Portal."
        </p>

        <p>
          Centralized management transformed day-to-day operations. "We can train new engineers in a matter of days instead
          of weeks," he notes. "The unified dashboard means faster monitoring, troubleshooting, and provisioning. Our
          engineers can now focus on value-added work instead of constantly fighting fires."
        </p>

        <h2>Immediate and long-term ROI</h2>

        <p>The investment paid off immediately, financially, operationally, and culturally.</p>

        <p>
          Cost savings were immediate. Refreshing hardware instead of maintaining aging infrastructure cut long-term expenses,
          and eliminating legacy virtualization licensing saved over $35,000 annually.
        </p>

        <p>
          "Maintaining the old setup was twice as expensive as buying the new one," Molavi explains.
        </p>

        <p>
          But some of the biggest returns came in reduced administrative overhead. "The time we save maintaining and patching
          this environment is enormous. It&apos;s freed up engineering hours for other priorities. That&apos;s harder to quantify, but
          it&apos;s real," he says.
        </p>

        <blockquote>
          "We&apos;re not just modernizing, but we&apos;re creating an environment that attracts the kind of IT talent we need."
          <cite>Derrick Perry, Vice President of Information Technology, PEFCU</cite>
        </blockquote>

        <h2>The road ahead</h2>

        <p>
          With a solid foundation in place, PEFCU is now looking ahead and focusing on scalability, flexibility, and deeper
          cloud integration. What was once a distant ambition is quickly becoming a practical reality, with the organization
          building toward a more agile, cloud-first future.
        </p>

        <p>
          The team is also exploring deployment of Azure-native tools such as Azure Update Manager and Microsoft Defender for
          Cloud, with an eye toward enhancing automation, patching, and security. AI is also on the horizon.
        </p>

        <p>
          "We&apos;re still early in our AI journey," says Perry. "But we&apos;re exploring options, especially around conversational AI
          in our contact center."
        </p>

        <p>
          "This project has been a game-changer," says Molavi. "And we couldn&apos;t have done it without the support of our
          leadership. Having the freedom to innovate, explore, and implement change: that&apos;s still what makes PEFCU special."
        </p>

        <p>
          From reactive recovery to proactive innovation, PEFCU is building a future-ready infrastructure one strategic step
          at a time.
        </p>

        <p>
          Discover more about Publix Employees Federal Credit Union on Facebook, Instagram, Blog, X/Twitter, and YouTube.
        </p>

        <a href="/solutions" className="story-back-link">
          Back to Solutions
        </a>
      </div>
    </section>
  );
}

export default CustomerStoryPefcu;
