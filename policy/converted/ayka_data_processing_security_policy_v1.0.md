## AYKA CLYVORA PRIVATE LIMITED
CIN: U62099UP2025PTC223390  |  DIPP206218
## DATA PROCESSING AND SECURITY POLICY
All Platforms — AYKA Expert · AYKA Life · AYKA Care · AYKA Alliance
**Effective Date: **8 May 2026
**Last Updated: **8 May 2026
**Version: **1.0
**Applies To: **www.aykaexpert.in  ·  www.aykacare.in  ·  www.aykaalliance.in
**Regulatory Framework: **DPDP Act 2023 · IT (SPDI) Rules 2011 · IT Act 2000 · CERT-In Guidelines · ABDM Health Data Management Policy

# 1. INTRODUCTION AND PURPOSE
**1.1  **AYKA Clyvora Private Limited ("Company", "AYKA", "We", "Us") operates healthtech SaaS platforms that collect, store, and process significant volumes of Personal Data and Sensitive Personal Data or Information (SPDI), including Health Data. Given the sensitive nature of health data and the financial and professional information processed across our platforms, the Company is committed to implementing and maintaining robust data processing practices and information security standards.
**1.2  **This Data Processing and Security Policy ("Policy") sets out: (a) the categories of data processed across our platforms and the applicable legal basis; (b) the roles of the Company as Data Fiduciary and Data Processor; (c) the technical and organisational security measures implemented to protect Personal Data; (d) the obligations of our sub-processors and third-party service providers; (e) our data breach response procedures; and (f) our data retention and deletion schedule.
**1.3  **This Policy is addressed to: (a) business clients (clinics, hospitals, and doctors) who use AYKA Life and AYKA Expert and whose patient data is processed by the Company; (b) franchise partners; and (c) internal stakeholders responsible for data governance and compliance. It is to be read alongside the Privacy Policy and the Terms of Use applicable to each user type, all of which form part of the Company's data protection framework.
**1.4  **This Policy is published in compliance with the Digital Personal Data Protection Act, 2023 ("DPDP Act"), the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), the Information Technology Act, 2000 ("IT Act"), and CERT-In guidelines as applicable.

# 2. KEY DEFINITIONS
**2.1  ****"Data Fiduciary" **means the entity that determines the purpose and means of processing Personal Data. AYKA Clyvora Private Limited acts as a Data Fiduciary in respect of Personal Data collected directly from users through its platforms for its own operational purposes.
**2.2  ****"Data Processor" **means any entity that processes Personal Data on behalf of a Data Fiduciary. AYKA acts as a Data Processor in respect of patient and employee data managed by clinics and hospitals ("Business Clients") through the AYKA Life and AYKA Expert platforms, where the Business Client is the Data Fiduciary.
**2.3  ****"Health Data" **means Sensitive Personal Data or Information as defined under Rule 3 of the SPDI Rules, 2011, relating to an individual's physical or mental health, medical history, diagnosis, prescriptions, investigation reports, and other clinical information.
**2.4  ****"Sub-Processor" **means a third-party service provider engaged by AYKA to process Personal Data on its behalf, including cloud infrastructure providers, payment gateways, and communication service providers.
**2.5  ****"Personal Data Breach" **means any unauthorised processing, accidental disclosure, acquisition, sharing, use, alteration, destruction, or loss of access to Personal Data that compromises its confidentiality, integrity, or availability.
**2.6  ****"Data Protection Board" **means the Data Protection Board of India established under Section 18 of the DPDP Act, 2023.
**2.7  ****"CERT-In" **means the Indian Computer Emergency Response Team, constituted under Section 70B of the IT Act, 2000.

# 3. DATA FIDUCIARY AND DATA PROCESSOR ROLES
## 3.1 When AYKA Acts as Data Fiduciary
AYKA Clyvora Private Limited acts as a Data Fiduciary in the following circumstances:
- when collecting and processing registration, profile, and account data of doctors, patients, clinic administrators, and franchise partners for the purpose of operating and managing the platforms;
- when processing usage, analytics, and behavioural data of all platform users for the purpose of improving our services;
- when processing payment and billing data for subscription and consultation fee management;
- when processing communication data (emails, SMS, push notifications) for transactional and marketing communications; and
- when processing franchise partner data for AYKA Alliance operations.
## 3.2 When AYKA Acts as Data Processor
AYKA Clyvora Private Limited acts as a Data Processor in the following circumstances:
- when storing, organising, and enabling retrieval of patient health records, consultation notes, and prescriptions on behalf of clinics and hospitals using AYKA Life — in this scenario, the clinic or hospital is the Data Fiduciary and AYKA processes data solely on its instructions;
- when facilitating doctor-patient consultations on AYKA Expert, where the RMP's patient data records are managed by AYKA's infrastructure on behalf of the RMP; and
- when processing employee or staff data entered by clinic administrators into the AYKA Life HR or payroll module, on behalf of the clinic as employer-Data Fiduciary.
*Business Clients (clinics and hospitals) who require a formal Data Processing Agreement (DPA) governing AYKA's role as Data Processor should contact support@aykacare.in. A standard DPA template is available upon request. This Policy serves as the baseline data processing framework in the absence of a separately executed DPA.*

# 4. CATEGORIES OF DATA PROCESSED
The following table summarises the categories of Personal Data and SPDI processed across AYKA platforms, along with the applicable legal basis and retention period:



# 5. TECHNICAL SECURITY MEASURES
## 5.1 Encryption
**5.1.1  ****Encryption at Rest: **All Personal Data and Health Data stored on AYKA's servers and databases is encrypted at rest using AES-256 (Advanced Encryption Standard with 256-bit key length), which is the current industry standard for data-at-rest encryption.
**5.1.2  ****Encryption in Transit: **All data transmitted between users' devices and AYKA's servers, and between AYKA's internal systems, is encrypted in transit using TLS 1.2 or higher (Transport Layer Security). Connections using TLS versions below 1.2 are rejected. HTTPS is enforced across all platform endpoints.
**5.1.3  ****Database Encryption: **Database-level encryption is implemented for all tables containing Health Data and financial information. Encryption keys are managed through a dedicated key management system with role-based access controls.
## 5.2 Access Controls
**5.2.1  ****Role-Based Access Control (RBAC): **Access to Personal Data and system resources is granted on a strict need-to-know, least-privilege basis through a role-based access control framework. Each role has defined permissions, and access is reviewed quarterly.
**5.2.2  ****Multi-Factor Authentication (MFA): **MFA is mandatory for all administrative access to systems, databases, and infrastructure containing Personal Data. MFA is enforced via TOTP (Time-based One-Time Password) or equivalent mechanism.
**5.2.3  ****Privileged Access Management: **Privileged accounts (system administrators, database administrators, and DevOps engineers) are subject to enhanced access controls, session recording, and periodic access reviews. Privileged access is time-limited and requires justification.
**5.2.4  **All employee and contractor access to production systems is logged, monitored, and subject to automated alerting for anomalous access patterns.
## 5.3 Network Security
- Firewalls and intrusion detection/prevention systems (IDS/IPS) are deployed at all network perimeters;
- Network segmentation separates production, staging, and development environments — no Personal Data is present in development or staging environments unless anonymised;
- DDoS (Distributed Denial of Service) protection is implemented through our cloud infrastructure provider;
- VPN (Virtual Private Network) access is required for all remote administrative access to production infrastructure; and
- All external-facing APIs are protected by rate limiting, authentication, and input validation.
## 5.4 Vulnerability Management
**5.4.1  ****Penetration Testing: **AYKA conducts penetration testing of its platforms and infrastructure at least once per year, conducted by an independent third-party security firm. Critical and high-severity findings are remediated within thirty (30) and sixty (60) days respectively.
**5.4.2  ****Vulnerability Scanning: **Automated vulnerability scans of application code, dependencies, and infrastructure are conducted on a continuous basis through integration into the CI/CD pipeline.
**5.4.3  ****Patch Management: **Security patches for operating systems, application frameworks, and third-party libraries are applied within seventy-two (72) hours of release for critical vulnerabilities, and within thirty (30) days for non-critical patches.
**5.4.4  ****Responsible Disclosure: **AYKA maintains a responsible disclosure policy for security researchers. Confirmed vulnerabilities reported in good faith will be acknowledged within forty-eight (48) hours and addressed within the applicable patch management timeline.
## 5.5 Audit Logging and Monitoring
- Comprehensive audit logs are maintained for all access to, and operations performed on, Personal Data and SPDI — including read, write, modify, delete, and export operations;
- Audit logs are stored in a tamper-evident, write-once logging system and are retained for a minimum of twelve (12) months in hot storage and three (3) years in cold archive storage;
- Automated monitoring and alerting is configured for anomalous access patterns, including bulk data exports, access outside business hours, and repeated authentication failures; and
- Audit logs are accessible to regulatory authorities (including CERT-In) upon lawful request, within the timelines required by applicable law.
## 5.6 Business Continuity and Disaster Recovery
**5.6.1  ****Data Backups: **Full backups of all production databases are performed daily, with incremental backups every four (4) hours. Backups are encrypted, stored in a geographically separate location within India, and tested for restorability monthly.
**5.6.2  ****Recovery Objectives: **AYKA targets a Recovery Time Objective (RTO) of four (4) hours and a Recovery Point Objective (RPO) of one (1) hour for critical platform services. These targets are tested through disaster recovery simulations at least annually.
**5.6.3  ****High Availability: **Production infrastructure is deployed across multiple availability zones to minimise single points of failure and ensure platform resilience.

# 6. ORGANISATIONAL SECURITY MEASURES
## 6.1 Employee and Contractor Obligations
- All employees, contractors, and consultants with access to Personal Data are required to execute confidentiality and non-disclosure agreements before commencing work;
- Background verification is conducted for all employees in roles with access to sensitive data or production systems;
- All personnel with access to Personal Data undergo mandatory data protection and information security training at onboarding and annually thereafter; and
- Access to Personal Data is revoked immediately upon termination of employment or contract engagement.
## 6.2 Information Security Policy
**6.2.1  **AYKA maintains a comprehensive Information Security Policy (ISP) that governs the handling, transmission, storage, and disposal of Personal Data and confidential information. The ISP is reviewed and updated at least annually.
**6.2.2  **The ISP is aligned with the security standards recommended under the CERT-In guidelines and is designed to meet the requirements of "reasonable security practices and procedures" under Section 43A of the IT Act and the SPDI Rules.
## 6.3 Vendor and Third-Party Risk Management
**6.3.1  **All Sub-Processors and third-party service providers engaged by AYKA that have access to, or process, Personal Data are required to: (a) execute a data processing agreement or equivalent contractual obligation; (b) demonstrate security standards equivalent to or exceeding those required under this Policy; and (c) notify AYKA immediately of any security incident or breach affecting AYKA's data.
**6.3.2  **Vendor security assessments are conducted at onboarding and periodically thereafter (at least annually for high-risk vendors). AYKA reserves the right to audit its Sub-Processors' security practices or require third-party audit certifications.
## 6.4 Physical Security
- AYKA's cloud infrastructure is hosted in data centres that maintain physical security controls including biometric access, CCTV monitoring, and security personnel;
- AYKA does not operate its own data centres. All physical security obligations are governed by the cloud provider's security framework and applicable ISO 27001 or equivalent certifications; and
- All physical devices (laptops, mobile phones) used by employees to access production systems must be encrypted, password-protected, and enrolled in AYKA's device management system.

# 7. APPROVED SUB-PROCESSORS
AYKA engages the following categories of Sub-Processors to support the operation of its platforms. All Sub-Processors are bound by contractual data protection obligations equivalent to the standards in this Policy:


*AYKA will provide notice of any intended addition or replacement of Sub-Processors to Business Clients who have executed a Data Processing Agreement, at least fourteen (14) days before the change takes effect. Business Clients may object to new Sub-Processors within this period.*

# 8. DATA LOCALISATION AND CROSS-BORDER TRANSFERS
**8.1  ****India-First Storage: **AYKA stores all Personal Data — and in particular all Health Data and financial data — on servers located within the territory of India, in the Mumbai AWS/cloud region. AYKA does not store Personal Data outside India as primary storage.
**8.2  **Where the use of a third-party service provider (such as an email service or analytics tool) involves the incidental processing of data on servers located outside India, such processing is subject to: (a) a Data Processing Agreement with the provider; (b) the provider maintaining security standards equivalent to or exceeding those in this Policy; and (c) compliance with the cross-border transfer provisions of the DPDP Act, 2023, including restriction to countries permitted by the Central Government notification.
**8.3  **AYKA does not transfer Health Data or financial data outside India for any purpose, except where mandated by law or as expressly required by the ABDM ecosystem for interoperability with government health infrastructure.
**8.4  **As and when the Central Government of India issues its notification under the DPDP Act specifying permitted and restricted destinations for cross-border data transfers, AYKA will review and update its data transfer practices accordingly and will amend this Policy to reflect any changes.

# 9. ABDM AND DIGITAL HEALTH ECOSYSTEM COMPLIANCE
**9.1  **AYKA Clyvora Private Limited has obtained Sandbox approval from the Ayushman Bharat Digital Mission (ABDM) covering SSO (Single Sign-On), Requestor API, and Entity Locker integrations. AYKA is committed to full compliance with the ABDM Health Data Management Policy issued by the National Health Authority (NHA).
**9.2  ****ABHA Integration: **Where users choose to link their Ayushman Bharat Health Account (ABHA ID) to their AYKA Care profile, health data is shared within the ABDM ecosystem solely in accordance with the user's consent artefact issued through the ABDM consent manager. No ABDM-linked health data is shared, accessed, or processed by AYKA without a valid, current consent artefact.
**9.3  **Users may modify or revoke their ABDM consent artefact at any time through the ABDM consent manager. Revocation of consent will immediately restrict AYKA's access to data under that artefact. Data already fetched and stored on AYKA's platform prior to revocation will be subject to AYKA's standard retention policy and user deletion rights under the Privacy Policy.
**9.4  **AYKA maintains FHIR (Fast Healthcare Interoperability Resources) R4 compatible health record formats for data shared within the ABDM ecosystem, in accordance with NHA technical standards.

# 10. PERSONAL DATA BREACH RESPONSE PROCEDURE
## 10.1 Detection and Initial Response
- Upon detection or suspicion of a Personal Data Breach, the security incident is immediately escalated to the Company's designated Incident Response Team;
- Initial containment measures are implemented within one (1) hour of detection to limit the scope and impact of the breach;
- A forensic investigation is initiated to determine the nature, cause, scope, and affected data categories; and
- All actions taken are documented in an incident log from the point of detection.
## 10.2 CERT-In Notification
**10.2.1  **In accordance with the CERT-In Directions of April 2022, AYKA will report cybersecurity incidents (including data breaches) to CERT-In within **six (6) hours** of becoming aware of the incident, in the prescribed format and through the prescribed channel (incident@cert-in.org.in or the CERT-In portal).
**10.2.2  **AYKA maintains six (6) months of ICT system logs (including network, application, and security logs) in a tamper-evident format and in Indian Standard Time (IST), as required by CERT-In Directions.
## 10.3 Data Protection Board Notification
**10.3.1  **In accordance with Section 8(6) of the DPDP Act, 2023, AYKA will notify the Data Protection Board of India of any Personal Data Breach in the form, manner, and within the timeline prescribed by the Board under applicable rules. AYKA will provide the Board with: (a) a description of the nature of the breach; (b) the categories and approximate number of Data Principals affected; (c) the likely consequences of the breach; and (d) the measures taken or proposed to address the breach.
## 10.4 Notification to Affected Data Principals
**10.4.1  **AYKA will notify each affected Data Principal of the breach in clear and plain language as soon as reasonably practicable following notification to the Data Protection Board, and within the timeline prescribed by applicable rules. The notification will include: (a) a description of the Personal Data compromised; (b) the likely impact on the Data Principal; (c) the steps AYKA is taking to address the breach; and (d) steps the Data Principal may take to protect themselves.
**10.4.2  **Notifications to affected Data Principals will be delivered through the registered email address and/or registered mobile number on file.
## 10.5 Post-Incident Review
- A root cause analysis will be completed within fourteen (14) days of containment;
- Remediation measures to address identified vulnerabilities will be implemented within thirty (30) days; and
- A post-incident report will be prepared and retained for regulatory inspection purposes.

# 11. DATA RETENTION AND SECURE DELETION
**11.1  **Data is retained only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law. The retention schedule in Section 4 of this Policy sets out the applicable retention periods for each data category.
**11.2  ****Secure Deletion: **Upon expiry of the applicable retention period, Personal Data is securely deleted using methods that render recovery impossible. For structured database data, this involves cryptographic erasure (deletion of encryption keys) and overwrite. For unstructured data and backups, industry-standard secure deletion tools are used.
**11.3  **Deletion certificates are generated and retained for major deletion events (such as account closure, subscription termination, and end-of-retention-period bulk deletion) for audit purposes.
**11.4  ****Legal Hold: **Where Personal Data is subject to a legal hold due to ongoing litigation, regulatory investigation, or dispute, retention of the affected data will be extended until the matter is fully resolved, notwithstanding the applicable retention period. Legal holds are documented and tracked by the Company's legal team.
**11.5  **Business Clients using AYKA Life as a Data Processor may instruct AYKA to delete specific datasets within the platform (subject to AYKA's legal retention obligations). Such instructions must be submitted in writing to support@aykacare.in and will be processed within thirty (30) days.

# 12. AUDIT RIGHTS
**12.1  **Business Clients who have executed a Data Processing Agreement with AYKA have the right to audit AYKA's data processing practices, subject to the following conditions:
- a minimum of thirty (30) days' written notice must be provided;
- audits may be conducted by the Business Client or an independent third-party auditor appointed by the Business Client, at the Business Client's cost;
- audits are limited to AYKA's data processing activities relating to the Business Client's data and must not access data belonging to other clients;
- audits may be conducted no more than once per year, unless a specific breach or compliance concern warrants additional review; and
- audit findings must be shared with AYKA, and AYKA will respond with a remediation plan within thirty (30) days of receiving the audit report.
**12.2  **In lieu of a direct audit, AYKA may provide Business Clients with third-party audit certifications, penetration test reports, or security assessment summaries as evidence of compliance with applicable security standards.

# 13. COMPLIANCE STANDARDS AND CERTIFICATIONS
**13.1  **AYKA's security and data processing practices are designed to meet or exceed the following standards and requirements:
- Section 43A of the Information Technology Act, 2000 — "reasonable security practices and procedures" for body corporates handling SPDI;
- Information Technology (SPDI) Rules, 2011 — security practices, consent requirements, and disclosure restrictions for SPDI;
- Digital Personal Data Protection Act, 2023 — obligations of Data Fiduciary and Data Processor;
- CERT-In Directions, 2022 — incident reporting, log retention, and synchronisation requirements;
- ABDM Health Data Management Policy — health data governance for ABDM-connected entities;
- ISO/IEC 27001:2022 (Information Security Management) — as a reference framework for AYKA's security controls; and
- PCI-DSS (Payment Card Industry Data Security Standard) — applicable to payment data processing through our payment gateway partners.
**13.2  **AYKA intends to pursue formal ISO 27001 certification as part of its ongoing security maturity roadmap. [CLIENT TO CONFIRM: Please update this clause once ISO 27001 certification is obtained or if a target date is set.]

# 14. MODIFICATIONS TO THIS POLICY
**14.1  **This Policy will be reviewed at least annually and updated to reflect changes in applicable law, regulatory guidance, security best practices, and AYKA's data processing activities.
**14.2  **Material changes will be communicated to Business Clients and registered users at least thirty (30) days before they take effect, via registered email and Platform notice. Changes required by regulatory mandate may take effect with shorter notice where necessary.
**14.3  **The version history of this Policy is maintained in the document footer. The current version supersedes all prior versions.

# 15. CONTACT — DATA PROTECTION OFFICER AND GRIEVANCE OFFICER
For all data processing, security, or privacy queries, audit requests, or data breach notifications, please contact:

**Name: **Aakash Yadav
**Designation: **Grievance Officer & Data Protection Officer
**Company: **AYKA Clyvora Private Limited
**Email: **support@aykacare.in
**Phone: **+91 92207 82066
**Address: **5/1115, Khalapar Mohalla, Memaran, Saharanpur, Uttar Pradesh — 247001
**Working Hours: **Monday to Saturday, 10:00 AM to 6:00 PM IST

Data breach notifications and security incident reports may also be sent to the same email address with the subject line: "SECURITY INCIDENT — URGENT". The Company's Incident Response Team will respond within six (6) hours of receipt during business hours.


*AYKA Clyvora Private Limited — Data Processing and Security Policy — Version 1.0 — Effective: 8 May 2026*
*CIN: U62099UP2025PTC223390 | www.aykacare.in | www.aykaexpert.in | support@aykacare.in*

| Data Category | Examples | Platform(s) | Legal Basis (DPDP Act) | Retention |
| --- | --- | --- | --- | --- |
| Identity & Registration Data | Name, DOB, gender, photo, email, mobile | All | Consent (S.6) | 3 years post account closure |
| Professional Credentials (Doctors) | NMC/State Council Reg. No., qualification, speciality | AYKA Expert, AYKA Life | Consent + Legitimate Use (S.7) | Duration of subscription + 3 years |
| Health Data / SPDI (Patients) | Medical history, diagnosis, prescriptions, investigation reports, vitals | AYKA Expert, AYKA Care | Explicit Consent (S.6) + SPDI Rules | 7 years from last consultation |
| Financial & Payment Data | Bank details, UPI ID, card tokenisation reference, transaction ID | All | Consent + Legal Obligation | 8 years (GST/Income Tax compliance) |
| ABHA & ABDM Data | ABHA ID, linked health records via ABDM consent manager | AYKA Expert, AYKA Care | Explicit Consent + ABDM Policy | Per ABDM consent artefact |
| Usage & Analytics Data | Pages visited, features used, session duration, device info, IP address | All | Legitimate Interest / Consent for cookies | 5 years (anonymised) |
| Communication Data | Email content, SMS logs, push notification logs | All | Consent + Legitimate Interest | 2 years |
| Franchise & Business Data | Business entity name, GSTIN, PAN, bank details, territory data | AYKA Alliance | Consent + Contract | 8 years post franchise termination |
| Support & Grievance Data | Complaint details, resolution records | All | Legal Obligation | 3 years from resolution |
| Employee / Staff Data (Clinic) | Staff names, roles, login credentials entered by clinic admin | AYKA Life | Contract (B2B Data Processing) | Per clinic's instructions; deleted on termination |

| Category | Role | Data Accessed | Location |
| --- | --- | --- | --- |
| Cloud Infrastructure Provider | Server hosting, database storage, CDN | All categories of Personal Data | India (Mumbai region) |
| Payment Gateway | Payment processing, transaction management | Financial data, transaction identifiers | India |
| SMS / OTP Provider | Transactional SMS, OTP delivery | Mobile number, OTP | India |
| Email Service Provider | Transactional and marketing emails | Email address, communication content | India / International (with DPA) |
| Video Infrastructure Provider | Real-time video consultation streaming | Video and audio streams (not recorded) | India / International (with DPA) |
| Analytics Provider (Google Analytics) | Anonymised usage analytics | Anonymised usage data, IP (anonymised) | International (DPA executed) |
| CRM / Helpdesk Software | Customer support ticket management | Name, email, mobile, support queries | India / International (with DPA) |
| ABDM / NHA Integration | ABHA ID verification, health record exchange | ABHA ID, health records (consent-gated) | India (Government Infrastructure) |