import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Ayka Alliance',
  description: 'Privacy Policy of AYKA CLYVORA PRIVATE LIMITED',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 border-b border-outline-variant/30 pb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-sm text-on-surface-variant uppercase tracking-widest font-bold">AYKA CLYVORA PRIVATE LIMITED</p>
            <div className="mt-6 flex flex-col sm:flex-row sm:gap-8 gap-2 text-sm text-on-surface-variant">
              <p><strong>Effective Date:</strong> 8 May 2026</p>
              <p><strong>Last Updated:</strong> 8 May 2026</p>
              <p><strong>Governed by:</strong> Laws of India</p>
            </div>
            <p className="mt-2 text-sm text-on-surface-variant"><strong>Contact:</strong> support@aykacare.in</p>
          </div>

          <div className="prose prose-primary max-w-none text-on-surface space-y-8">
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">AYKA CLYVORA PRIVATE LIMITED</h3>
<p className="leading-relaxed mb-4">CIN: U62099UP2025PTC223390  |  DIPP206218</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">DATA PROCESSING AND SECURITY POLICY</h3>
<p className="leading-relaxed mb-4">All Platforms — AYKA Expert · AYKA Life · AYKA Care · AYKA Alliance</p>
<p className="leading-relaxed mb-4"><strong>Effective Date: </strong>8 May 2026</p>
<p className="leading-relaxed mb-4"><strong>Last Updated: </strong>8 May 2026</p>
<p className="leading-relaxed mb-4"><strong>Version: </strong>1.0</p>
<p className="leading-relaxed mb-4"><strong>Applies To: </strong>www.aykaexpert.in  ·  www.aykacare.in  ·  www.aykaalliance.in</p>
<p className="leading-relaxed mb-4"><strong>Regulatory Framework: </strong>DPDP Act 2023 · IT (SPDI) Rules 2011 · IT Act 2000 · CERT-In Guidelines · ABDM Health Data Management Policy</p>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">1. INTRODUCTION AND PURPOSE</h2>
<p className="leading-relaxed mb-4"><strong>1.1  </strong>AYKA Clyvora Private Limited (&quot;Company&quot;, &quot;AYKA&quot;, &quot;We&quot;, &quot;Us&quot;) operates healthtech SaaS platforms that collect, store, and process significant volumes of Personal Data and Sensitive Personal Data or Information (SPDI), including Health Data. Given the sensitive nature of health data and the financial and professional information processed across our platforms, the Company is committed to implementing and maintaining robust data processing practices and information security standards.</p>
<p className="leading-relaxed mb-4"><strong>1.2  </strong>This Data Processing and Security Policy (&quot;Policy&quot;) sets out: (a) the categories of data processed across our platforms and the applicable legal basis; (b) the roles of the Company as Data Fiduciary and Data Processor; (c) the technical and organisational security measures implemented to protect Personal Data; (d) the obligations of our sub-processors and third-party service providers; (e) our data breach response procedures; and (f) our data retention and deletion schedule.</p>
<p className="leading-relaxed mb-4"><strong>1.3  </strong>This Policy is addressed to: (a) business clients (clinics, hospitals, and doctors) who use AYKA Life and AYKA Expert and whose patient data is processed by the Company; (b) franchise partners; and (c) internal stakeholders responsible for data governance and compliance. It is to be read alongside the Privacy Policy and the Terms of Use applicable to each user type, all of which form part of the Company&apos;s data protection framework.</p>
<p className="leading-relaxed mb-4"><strong>1.4  </strong>This Policy is published in compliance with the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;), the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (&quot;SPDI Rules&quot;), the Information Technology Act, 2000 (&quot;IT Act&quot;), and CERT-In guidelines as applicable.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">2. KEY DEFINITIONS</h2>
<p className="leading-relaxed mb-4"><strong>2.1  </strong><strong>&quot;Data Fiduciary&quot; </strong>means the entity that determines the purpose and means of processing Personal Data. AYKA Clyvora Private Limited acts as a Data Fiduciary in respect of Personal Data collected directly from users through its platforms for its own operational purposes.</p>
<p className="leading-relaxed mb-4"><strong>2.2  </strong><strong>&quot;Data Processor&quot; </strong>means any entity that processes Personal Data on behalf of a Data Fiduciary. AYKA acts as a Data Processor in respect of patient and employee data managed by clinics and hospitals (&quot;Business Clients&quot;) through the AYKA Life and AYKA Expert platforms, where the Business Client is the Data Fiduciary.</p>
<p className="leading-relaxed mb-4"><strong>2.3  </strong><strong>&quot;Health Data&quot; </strong>means Sensitive Personal Data or Information as defined under Rule 3 of the SPDI Rules, 2011, relating to an individual&apos;s physical or mental health, medical history, diagnosis, prescriptions, investigation reports, and other clinical information.</p>
<p className="leading-relaxed mb-4"><strong>2.4  </strong><strong>&quot;Sub-Processor&quot; </strong>means a third-party service provider engaged by AYKA to process Personal Data on its behalf, including cloud infrastructure providers, payment gateways, and communication service providers.</p>
<p className="leading-relaxed mb-4"><strong>2.5  </strong><strong>&quot;Personal Data Breach&quot; </strong>means any unauthorised processing, accidental disclosure, acquisition, sharing, use, alteration, destruction, or loss of access to Personal Data that compromises its confidentiality, integrity, or availability.</p>
<p className="leading-relaxed mb-4"><strong>2.6  </strong><strong>&quot;Data Protection Board&quot; </strong>means the Data Protection Board of India established under Section 18 of the DPDP Act, 2023.</p>
<p className="leading-relaxed mb-4"><strong>2.7  </strong><strong>&quot;CERT-In&quot; </strong>means the Indian Computer Emergency Response Team, constituted under Section 70B of the IT Act, 2000.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">3. DATA FIDUCIARY AND DATA PROCESSOR ROLES</h2>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">3.1 When AYKA Acts as Data Fiduciary</h3>
<p className="leading-relaxed mb-4">AYKA Clyvora Private Limited acts as a Data Fiduciary in the following circumstances:</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>when collecting and processing registration, profile, and account data of doctors, patients, clinic administrators, and franchise partners for the purpose of operating and managing the platforms;</li>
  <li>when processing usage, analytics, and behavioural data of all platform users for the purpose of improving our services;</li>
  <li>when processing payment and billing data for subscription and consultation fee management;</li>
  <li>when processing communication data (emails, SMS, push notifications) for transactional and marketing communications; and</li>
  <li>when processing franchise partner data for AYKA Alliance operations.</li>
</ul>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">3.2 When AYKA Acts as Data Processor</h3>
<p className="leading-relaxed mb-4">AYKA Clyvora Private Limited acts as a Data Processor in the following circumstances:</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>when storing, organising, and enabling retrieval of patient health records, consultation notes, and prescriptions on behalf of clinics and hospitals using AYKA Life — in this scenario, the clinic or hospital is the Data Fiduciary and AYKA processes data solely on its instructions;</li>
  <li>when facilitating doctor-patient consultations on AYKA Expert, where the RMP&apos;s patient data records are managed by AYKA&apos;s infrastructure on behalf of the RMP; and</li>
  <li>when processing employee or staff data entered by clinic administrators into the AYKA Life HR or payroll module, on behalf of the clinic as employer-Data Fiduciary.</li>
</ul>
<p className="leading-relaxed mb-4"><em>Business Clients (clinics and hospitals) who require a formal Data Processing Agreement (DPA) governing AYKA&apos;s role as Data Processor should contact support@aykacare.in. A standard DPA template is available upon request. This Policy serves as the baseline data processing framework in the absence of a separately executed DPA.</em></p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">4. CATEGORIES OF DATA PROCESSED</h2>
<p className="leading-relaxed mb-4">The following table summarises the categories of Personal Data and SPDI processed across AYKA platforms, along with the applicable legal basis and retention period:</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">5. TECHNICAL SECURITY MEASURES</h2>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">5.1 Encryption</h3>
<p className="leading-relaxed mb-4"><strong>5.1.1  </strong><strong>Encryption at Rest: </strong>All Personal Data and Health Data stored on AYKA&apos;s servers and databases is encrypted at rest using AES-256 (Advanced Encryption Standard with 256-bit key length), which is the current industry standard for data-at-rest encryption.</p>
<p className="leading-relaxed mb-4"><strong>5.1.2  </strong><strong>Encryption in Transit: </strong>All data transmitted between users&apos; devices and AYKA&apos;s servers, and between AYKA&apos;s internal systems, is encrypted in transit using TLS 1.2 or higher (Transport Layer Security). Connections using TLS versions below 1.2 are rejected. HTTPS is enforced across all platform endpoints.</p>
<p className="leading-relaxed mb-4"><strong>5.1.3  </strong><strong>Database Encryption: </strong>Database-level encryption is implemented for all tables containing Health Data and financial information. Encryption keys are managed through a dedicated key management system with role-based access controls.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">5.2 Access Controls</h3>
<p className="leading-relaxed mb-4"><strong>5.2.1  </strong><strong>Role-Based Access Control (RBAC): </strong>Access to Personal Data and system resources is granted on a strict need-to-know, least-privilege basis through a role-based access control framework. Each role has defined permissions, and access is reviewed quarterly.</p>
<p className="leading-relaxed mb-4"><strong>5.2.2  </strong><strong>Multi-Factor Authentication (MFA): </strong>MFA is mandatory for all administrative access to systems, databases, and infrastructure containing Personal Data. MFA is enforced via TOTP (Time-based One-Time Password) or equivalent mechanism.</p>
<p className="leading-relaxed mb-4"><strong>5.2.3  </strong><strong>Privileged Access Management: </strong>Privileged accounts (system administrators, database administrators, and DevOps engineers) are subject to enhanced access controls, session recording, and periodic access reviews. Privileged access is time-limited and requires justification.</p>
<p className="leading-relaxed mb-4"><strong>5.2.4  </strong>All employee and contractor access to production systems is logged, monitored, and subject to automated alerting for anomalous access patterns.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">5.3 Network Security</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Firewalls and intrusion detection/prevention systems (IDS/IPS) are deployed at all network perimeters;</li>
  <li>Network segmentation separates production, staging, and development environments — no Personal Data is present in development or staging environments unless anonymised;</li>
  <li>DDoS (Distributed Denial of Service) protection is implemented through our cloud infrastructure provider;</li>
  <li>VPN (Virtual Private Network) access is required for all remote administrative access to production infrastructure; and</li>
  <li>All external-facing APIs are protected by rate limiting, authentication, and input validation.</li>
</ul>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">5.4 Vulnerability Management</h3>
<p className="leading-relaxed mb-4"><strong>5.4.1  </strong><strong>Penetration Testing: </strong>AYKA conducts penetration testing of its platforms and infrastructure at least once per year, conducted by an independent third-party security firm. Critical and high-severity findings are remediated within thirty (30) and sixty (60) days respectively.</p>
<p className="leading-relaxed mb-4"><strong>5.4.2  </strong><strong>Vulnerability Scanning: </strong>Automated vulnerability scans of application code, dependencies, and infrastructure are conducted on a continuous basis through integration into the CI/CD pipeline.</p>
<p className="leading-relaxed mb-4"><strong>5.4.3  </strong><strong>Patch Management: </strong>Security patches for operating systems, application frameworks, and third-party libraries are applied within seventy-two (72) hours of release for critical vulnerabilities, and within thirty (30) days for non-critical patches.</p>
<p className="leading-relaxed mb-4"><strong>5.4.4  </strong><strong>Responsible Disclosure: </strong>AYKA maintains a responsible disclosure policy for security researchers. Confirmed vulnerabilities reported in good faith will be acknowledged within forty-eight (48) hours and addressed within the applicable patch management timeline.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">5.5 Audit Logging and Monitoring</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Comprehensive audit logs are maintained for all access to, and operations performed on, Personal Data and SPDI — including read, write, modify, delete, and export operations;</li>
  <li>Audit logs are stored in a tamper-evident, write-once logging system and are retained for a minimum of twelve (12) months in hot storage and three (3) years in cold archive storage;</li>
  <li>Automated monitoring and alerting is configured for anomalous access patterns, including bulk data exports, access outside business hours, and repeated authentication failures; and</li>
  <li>Audit logs are accessible to regulatory authorities (including CERT-In) upon lawful request, within the timelines required by applicable law.</li>
</ul>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">5.6 Business Continuity and Disaster Recovery</h3>
<p className="leading-relaxed mb-4"><strong>5.6.1  </strong><strong>Data Backups: </strong>Full backups of all production databases are performed daily, with incremental backups every four (4) hours. Backups are encrypted, stored in a geographically separate location within India, and tested for restorability monthly.</p>
<p className="leading-relaxed mb-4"><strong>5.6.2  </strong><strong>Recovery Objectives: </strong>AYKA targets a Recovery Time Objective (RTO) of four (4) hours and a Recovery Point Objective (RPO) of one (1) hour for critical platform services. These targets are tested through disaster recovery simulations at least annually.</p>
<p className="leading-relaxed mb-4"><strong>5.6.3  </strong><strong>High Availability: </strong>Production infrastructure is deployed across multiple availability zones to minimise single points of failure and ensure platform resilience.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">6. ORGANISATIONAL SECURITY MEASURES</h2>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">6.1 Employee and Contractor Obligations</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>All employees, contractors, and consultants with access to Personal Data are required to execute confidentiality and non-disclosure agreements before commencing work;</li>
  <li>Background verification is conducted for all employees in roles with access to sensitive data or production systems;</li>
  <li>All personnel with access to Personal Data undergo mandatory data protection and information security training at onboarding and annually thereafter; and</li>
  <li>Access to Personal Data is revoked immediately upon termination of employment or contract engagement.</li>
</ul>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">6.2 Information Security Policy</h3>
<p className="leading-relaxed mb-4"><strong>6.2.1  </strong>AYKA maintains a comprehensive Information Security Policy (ISP) that governs the handling, transmission, storage, and disposal of Personal Data and confidential information. The ISP is reviewed and updated at least annually.</p>
<p className="leading-relaxed mb-4"><strong>6.2.2  </strong>The ISP is aligned with the security standards recommended under the CERT-In guidelines and is designed to meet the requirements of &quot;reasonable security practices and procedures&quot; under Section 43A of the IT Act and the SPDI Rules.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">6.3 Vendor and Third-Party Risk Management</h3>
<p className="leading-relaxed mb-4"><strong>6.3.1  </strong>All Sub-Processors and third-party service providers engaged by AYKA that have access to, or process, Personal Data are required to: (a) execute a data processing agreement or equivalent contractual obligation; (b) demonstrate security standards equivalent to or exceeding those required under this Policy; and (c) notify AYKA immediately of any security incident or breach affecting AYKA&apos;s data.</p>
<p className="leading-relaxed mb-4"><strong>6.3.2  </strong>Vendor security assessments are conducted at onboarding and periodically thereafter (at least annually for high-risk vendors). AYKA reserves the right to audit its Sub-Processors&apos; security practices or require third-party audit certifications.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">6.4 Physical Security</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>AYKA&apos;s cloud infrastructure is hosted in data centres that maintain physical security controls including biometric access, CCTV monitoring, and security personnel;</li>
  <li>AYKA does not operate its own data centres. All physical security obligations are governed by the cloud provider&apos;s security framework and applicable ISO 27001 or equivalent certifications; and</li>
  <li>All physical devices (laptops, mobile phones) used by employees to access production systems must be encrypted, password-protected, and enrolled in AYKA&apos;s device management system.</li>
</ul>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">7. APPROVED SUB-PROCESSORS</h2>
<p className="leading-relaxed mb-4">AYKA engages the following categories of Sub-Processors to support the operation of its platforms. All Sub-Processors are bound by contractual data protection obligations equivalent to the standards in this Policy:</p>
<p className="leading-relaxed mb-4"><em>AYKA will provide notice of any intended addition or replacement of Sub-Processors to Business Clients who have executed a Data Processing Agreement, at least fourteen (14) days before the change takes effect. Business Clients may object to new Sub-Processors within this period.</em></p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">8. DATA LOCALISATION AND CROSS-BORDER TRANSFERS</h2>
<p className="leading-relaxed mb-4"><strong>8.1  </strong><strong>India-First Storage: </strong>AYKA stores all Personal Data — and in particular all Health Data and financial data — on servers located within the territory of India, in the Mumbai AWS/cloud region. AYKA does not store Personal Data outside India as primary storage.</p>
<p className="leading-relaxed mb-4"><strong>8.2  </strong>Where the use of a third-party service provider (such as an email service or analytics tool) involves the incidental processing of data on servers located outside India, such processing is subject to: (a) a Data Processing Agreement with the provider; (b) the provider maintaining security standards equivalent to or exceeding those in this Policy; and (c) compliance with the cross-border transfer provisions of the DPDP Act, 2023, including restriction to countries permitted by the Central Government notification.</p>
<p className="leading-relaxed mb-4"><strong>8.3  </strong>AYKA does not transfer Health Data or financial data outside India for any purpose, except where mandated by law or as expressly required by the ABDM ecosystem for interoperability with government health infrastructure.</p>
<p className="leading-relaxed mb-4"><strong>8.4  </strong>As and when the Central Government of India issues its notification under the DPDP Act specifying permitted and restricted destinations for cross-border data transfers, AYKA will review and update its data transfer practices accordingly and will amend this Policy to reflect any changes.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">9. ABDM AND DIGITAL HEALTH ECOSYSTEM COMPLIANCE</h2>
<p className="leading-relaxed mb-4"><strong>9.1  </strong>AYKA Clyvora Private Limited has obtained Sandbox approval from the Ayushman Bharat Digital Mission (ABDM) covering SSO (Single Sign-On), Requestor API, and Entity Locker integrations. AYKA is committed to full compliance with the ABDM Health Data Management Policy issued by the National Health Authority (NHA).</p>
<p className="leading-relaxed mb-4"><strong>9.2  </strong><strong>ABHA Integration: </strong>Where users choose to link their Ayushman Bharat Health Account (ABHA ID) to their AYKA Care profile, health data is shared within the ABDM ecosystem solely in accordance with the user&apos;s consent artefact issued through the ABDM consent manager. No ABDM-linked health data is shared, accessed, or processed by AYKA without a valid, current consent artefact.</p>
<p className="leading-relaxed mb-4"><strong>9.3  </strong>Users may modify or revoke their ABDM consent artefact at any time through the ABDM consent manager. Revocation of consent will immediately restrict AYKA&apos;s access to data under that artefact. Data already fetched and stored on AYKA&apos;s platform prior to revocation will be subject to AYKA&apos;s standard retention policy and user deletion rights under the Privacy Policy.</p>
<p className="leading-relaxed mb-4"><strong>9.4  </strong>AYKA maintains FHIR (Fast Healthcare Interoperability Resources) R4 compatible health record formats for data shared within the ABDM ecosystem, in accordance with NHA technical standards.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">10. PERSONAL DATA BREACH RESPONSE PROCEDURE</h2>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">10.1 Detection and Initial Response</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Upon detection or suspicion of a Personal Data Breach, the security incident is immediately escalated to the Company&apos;s designated Incident Response Team;</li>
  <li>Initial containment measures are implemented within one (1) hour of detection to limit the scope and impact of the breach;</li>
  <li>A forensic investigation is initiated to determine the nature, cause, scope, and affected data categories; and</li>
  <li>All actions taken are documented in an incident log from the point of detection.</li>
</ul>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">10.2 CERT-In Notification</h3>
<p className="leading-relaxed mb-4"><strong>10.2.1  </strong>In accordance with the CERT-In Directions of April 2022, AYKA will report cybersecurity incidents (including data breaches) to CERT-In within <strong>six (6) hours</strong> of becoming aware of the incident, in the prescribed format and through the prescribed channel (incident@cert-in.org.in or the CERT-In portal).</p>
<p className="leading-relaxed mb-4"><strong>10.2.2  </strong>AYKA maintains six (6) months of ICT system logs (including network, application, and security logs) in a tamper-evident format and in Indian Standard Time (IST), as required by CERT-In Directions.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">10.3 Data Protection Board Notification</h3>
<p className="leading-relaxed mb-4"><strong>10.3.1  </strong>In accordance with Section 8(6) of the DPDP Act, 2023, AYKA will notify the Data Protection Board of India of any Personal Data Breach in the form, manner, and within the timeline prescribed by the Board under applicable rules. AYKA will provide the Board with: (a) a description of the nature of the breach; (b) the categories and approximate number of Data Principals affected; (c) the likely consequences of the breach; and (d) the measures taken or proposed to address the breach.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">10.4 Notification to Affected Data Principals</h3>
<p className="leading-relaxed mb-4"><strong>10.4.1  </strong>AYKA will notify each affected Data Principal of the breach in clear and plain language as soon as reasonably practicable following notification to the Data Protection Board, and within the timeline prescribed by applicable rules. The notification will include: (a) a description of the Personal Data compromised; (b) the likely impact on the Data Principal; (c) the steps AYKA is taking to address the breach; and (d) steps the Data Principal may take to protect themselves.</p>
<p className="leading-relaxed mb-4"><strong>10.4.2  </strong>Notifications to affected Data Principals will be delivered through the registered email address and/or registered mobile number on file.</p>
  <h3 className="text-xl font-bold text-primary mt-6 mb-3">10.5 Post-Incident Review</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>A root cause analysis will be completed within fourteen (14) days of containment;</li>
  <li>Remediation measures to address identified vulnerabilities will be implemented within thirty (30) days; and</li>
  <li>A post-incident report will be prepared and retained for regulatory inspection purposes.</li>
</ul>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">11. DATA RETENTION AND SECURE DELETION</h2>
<p className="leading-relaxed mb-4"><strong>11.1  </strong>Data is retained only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. The retention schedule in Section 4 of this Policy sets out the applicable retention periods for each data category.</p>
<p className="leading-relaxed mb-4"><strong>11.2  </strong><strong>Secure Deletion: </strong>Upon expiry of the applicable retention period, Personal Data is securely deleted using methods that render recovery impossible. For structured database data, this involves cryptographic erasure (deletion of encryption keys) and overwrite. For unstructured data and backups, industry-standard secure deletion tools are used.</p>
<p className="leading-relaxed mb-4"><strong>11.3  </strong>Deletion certificates are generated and retained for major deletion events (such as account closure, subscription termination, and end-of-retention-period bulk deletion) for audit purposes.</p>
<p className="leading-relaxed mb-4"><strong>11.4  </strong><strong>Legal Hold: </strong>Where Personal Data is subject to a legal hold due to ongoing litigation, regulatory investigation, or dispute, retention of the affected data will be extended until the matter is fully resolved, notwithstanding the applicable retention period. Legal holds are documented and tracked by the Company&apos;s legal team.</p>
<p className="leading-relaxed mb-4"><strong>11.5  </strong>Business Clients using AYKA Life as a Data Processor may instruct AYKA to delete specific datasets within the platform (subject to AYKA&apos;s legal retention obligations). Such instructions must be submitted in writing to support@aykacare.in and will be processed within thirty (30) days.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">12. AUDIT RIGHTS</h2>
<p className="leading-relaxed mb-4"><strong>12.1  </strong>Business Clients who have executed a Data Processing Agreement with AYKA have the right to audit AYKA&apos;s data processing practices, subject to the following conditions:</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>a minimum of thirty (30) days&apos; written notice must be provided;</li>
  <li>audits may be conducted by the Business Client or an independent third-party auditor appointed by the Business Client, at the Business Client&apos;s cost;</li>
  <li>audits are limited to AYKA&apos;s data processing activities relating to the Business Client&apos;s data and must not access data belonging to other clients;</li>
  <li>audits may be conducted no more than once per year, unless a specific breach or compliance concern warrants additional review; and</li>
  <li>audit findings must be shared with AYKA, and AYKA will respond with a remediation plan within thirty (30) days of receiving the audit report.</li>
</ul>
<p className="leading-relaxed mb-4"><strong>12.2  </strong>In lieu of a direct audit, AYKA may provide Business Clients with third-party audit certifications, penetration test reports, or security assessment summaries as evidence of compliance with applicable security standards.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">13. COMPLIANCE STANDARDS AND CERTIFICATIONS</h2>
<p className="leading-relaxed mb-4"><strong>13.1  </strong>AYKA&apos;s security and data processing practices are designed to meet or exceed the following standards and requirements:</p>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Section 43A of the Information Technology Act, 2000 — &quot;reasonable security practices and procedures&quot; for body corporates handling SPDI;</li>
  <li>Information Technology (SPDI) Rules, 2011 — security practices, consent requirements, and disclosure restrictions for SPDI;</li>
  <li>Digital Personal Data Protection Act, 2023 — obligations of Data Fiduciary and Data Processor;</li>
  <li>CERT-In Directions, 2022 — incident reporting, log retention, and synchronisation requirements;</li>
  <li>ABDM Health Data Management Policy — health data governance for ABDM-connected entities;</li>
  <li>ISO/IEC 27001:2022 (Information Security Management) — as a reference framework for AYKA&apos;s security controls; and</li>
  <li>PCI-DSS (Payment Card Industry Data Security Standard) — applicable to payment data processing through our payment gateway partners.</li>
</ul>
<p className="leading-relaxed mb-4"><strong>13.2  </strong>AYKA intends to pursue formal ISO 27001 certification as part of its ongoing security maturity roadmap. [CLIENT TO CONFIRM: Please update this clause once ISO 27001 certification is obtained or if a target date is set.]</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">14. MODIFICATIONS TO THIS POLICY</h2>
<p className="leading-relaxed mb-4"><strong>14.1  </strong>This Policy will be reviewed at least annually and updated to reflect changes in applicable law, regulatory guidance, security best practices, and AYKA&apos;s data processing activities.</p>
<p className="leading-relaxed mb-4"><strong>14.2  </strong>Material changes will be communicated to Business Clients and registered users at least thirty (30) days before they take effect, via registered email and Platform notice. Changes required by regulatory mandate may take effect with shorter notice where necessary.</p>
<p className="leading-relaxed mb-4"><strong>14.3  </strong>The version history of this Policy is maintained in the document footer. The current version supersedes all prior versions.</p>
</section>
<section className="space-y-4">
  <h2 className="text-2xl font-bold text-primary mb-4">15. CONTACT — DATA PROTECTION OFFICER AND GRIEVANCE OFFICER</h2>
<p className="leading-relaxed mb-4">For all data processing, security, or privacy queries, audit requests, or data breach notifications, please contact:</p>
<p className="leading-relaxed mb-4"><strong>Name: </strong>Aakash Yadav</p>
<p className="leading-relaxed mb-4"><strong>Designation: </strong>Grievance Officer &amp; Data Protection Officer</p>
<p className="leading-relaxed mb-4"><strong>Company: </strong>AYKA Clyvora Private Limited</p>
<p className="leading-relaxed mb-4"><strong>Email: </strong>support@aykacare.in</p>
<p className="leading-relaxed mb-4"><strong>Phone: </strong>+91 92207 82066</p>
<p className="leading-relaxed mb-4"><strong>Address: </strong>5/1115, Khalapar Mohalla, Memaran, Saharanpur, Uttar Pradesh — 247001</p>
<p className="leading-relaxed mb-4"><strong>Working Hours: </strong>Monday to Saturday, 10:00 AM to 6:00 PM IST</p>
<p className="leading-relaxed mb-4">Data breach notifications and security incident reports may also be sent to the same email address with the subject line: &quot;SECURITY INCIDENT — URGENT&quot;. The Company&apos;s Incident Response Team will respond within six (6) hours of receipt during business hours.</p>
<p className="leading-relaxed mb-4"><em>AYKA Clyvora Private Limited — Data Processing and Security Policy — Version 1.0 — Effective: 8 May 2026</em></p>
<p className="leading-relaxed mb-4"><em>CIN: U62099UP2025PTC223390 | www.aykacare.in | www.aykaexpert.in | support@aykacare.in</em></p>
<div className="overflow-x-auto my-6 border border-outline-variant/30 rounded-xl">
<table className="min-w-full divide-y divide-outline-variant/30 text-sm">
<thead className="bg-surface-container-low">
<tr>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Data Category</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Examples</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Platform(s)</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Legal Basis (DPDP Act)</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Retention</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 bg-surface">
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Identity &amp; Registration Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Name, DOB, gender, photo, email, mobile</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">All</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Consent (S.6)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">3 years post account closure</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Professional Credentials (Doctors)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">NMC/State Council Reg. No., qualification, speciality</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">AYKA Expert, AYKA Life</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Consent + Legitimate Use (S.7)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Duration of subscription + 3 years</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Health Data / SPDI (Patients)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Medical history, diagnosis, prescriptions, investigation reports, vitals</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">AYKA Expert, AYKA Care</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Explicit Consent (S.6) + SPDI Rules</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">7 years from last consultation</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Financial &amp; Payment Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Bank details, UPI ID, card tokenisation reference, transaction ID</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">All</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Consent + Legal Obligation</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">8 years (GST/Income Tax compliance)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">ABHA &amp; ABDM Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">ABHA ID, linked health records via ABDM consent manager</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">AYKA Expert, AYKA Care</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Explicit Consent + ABDM Policy</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Per ABDM consent artefact</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Usage &amp; Analytics Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Pages visited, features used, session duration, device info, IP address</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">All</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Legitimate Interest / Consent for cookies</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">5 years (anonymised)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Communication Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Email content, SMS logs, push notification logs</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">All</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Consent + Legitimate Interest</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">2 years</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Franchise &amp; Business Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Business entity name, GSTIN, PAN, bank details, territory data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">AYKA Alliance</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Consent + Contract</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">8 years post franchise termination</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Support &amp; Grievance Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Complaint details, resolution records</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">All</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Legal Obligation</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">3 years from resolution</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Employee / Staff Data (Clinic)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Staff names, roles, login credentials entered by clinic admin</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">AYKA Life</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Contract (B2B Data Processing)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Per clinic&apos;s instructions; deleted on termination</td>
</tr>
</tbody>
</table>
</div>
<div className="overflow-x-auto my-6 border border-outline-variant/30 rounded-xl">
<table className="min-w-full divide-y divide-outline-variant/30 text-sm">
<thead className="bg-surface-container-low">
<tr>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Category</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Role</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Data Accessed</th>
<th className="bg-surface-container font-bold text-left px-4 py-3 text-primary border-b border-outline-variant/30">Location</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30 bg-surface">
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Cloud Infrastructure Provider</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Server hosting, database storage, CDN</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">All categories of Personal Data</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India (Mumbai region)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Payment Gateway</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Payment processing, transaction management</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Financial data, transaction identifiers</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">SMS / OTP Provider</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Transactional SMS, OTP delivery</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Mobile number, OTP</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Email Service Provider</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Transactional and marketing emails</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Email address, communication content</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India / International (with DPA)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Video Infrastructure Provider</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Real-time video consultation streaming</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Video and audio streams (not recorded)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India / International (with DPA)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Analytics Provider (Google Analytics)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Anonymised usage analytics</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Anonymised usage data, IP (anonymised)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">International (DPA executed)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">CRM / Helpdesk Software</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Customer support ticket management</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">Name, email, mobile, support queries</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India / International (with DPA)</td>
</tr>
<tr className="hover:bg-surface-container-lowest/50 transition-colors">
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">ABDM / NHA Integration</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">ABHA ID verification, health record exchange</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">ABHA ID, health records (consent-gated)</td>
<td className="px-4 py-3 text-on-surface border-b border-outline-variant/30">India (Government Infrastructure)</td>
</tr>
</tbody>
</table>
</div>
</section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
