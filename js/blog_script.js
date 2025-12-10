// Blog content data with images
const blogs = {
    1: {
        "title": "The IAM Process/Lifecycle",
        "image": "../images/The IAM Process Lifecycle.png",
        "description": `
            <br>
            <h5>Introduction</h5>
            <p>The goal is to ensure the <b>right people</b> have the <b>right access</b> to the <b>right resources</b> at the <b>right time</b> for the <b>right reasons</b>.</p>

            <h5>1. Identity Creation (Onboarding & Provisioning) </h5>
            <p>This is the beginning of a digital identity's journey.
                <ul>
                    <li><b>Identification:</b> A unique identity is established for a new user (employee, contractor, partner, or machine/system).</li>
                    <li><b>Provisioning:</b> The new account is created across all necessary systems (e.g., Active Directory, HR system, core applications). </li>
                    <li><b>Initial Access:</b> Basic access rights, credentials (like a username and temporary password), and multi-factor authentication (MFA) are assigned based on the user's role. </li>
                </ul>
            </p>

            <h5>2. Authentication </h5>
            <p>This phase verifies that the user is who they claim to be.
                <ul>
                    <li><b>Claim Identity:</b>The user provides an identifier (e.g., username).</li>
                    <li><b>Proof of Identity:</b> The user provides credentials (e.g., password, biometric scan, or one-time code from an MFA token). </li>
                    <li><b>Verification:</b>The IAM system verifies the credentials against the stored identity data. This often involves <b>Single Sign-On (SSO)</b> so the user only authenticates once to access multiple applications</li>
                </ul>
            </p>
         
            <h5>3. Authentication</h5>
            <p>Once authenticated, this phase determines what the user is allowed to do. 
                <ul>
                    <li><b>Policy Check:</b> The system checks the user's role, attributes, or groups against predefined access control policies (like <b>Role-Based Access Control - RBAC</b>).</li>
                    <li><b>Grant/Deny Access:</b> Access is granted only to the specific resources and functions required for their job (<b>Principle of Least Privilege</b>). </li>
                    <li><b>Elevated Access:</b> For specific, high-risk tasks, a <b>Privileged Access Management (PAM)</b> system may temporarily grant and tightly monitor elevated administrative rights. </li>
                </ul>
            </p>
            <h5>4. Management & Recertification</h5>
                <p>This is the ongoing maintenance of the identity and its access rights over time. 
                    <ul>
                        <li><b>Update Access:</b> Access is modified as the user's role or responsibilities change (e.g., promotion, departmental transfer). This process is known as <b>Identity Governance and Administration (IGA)</b>.</li>
                        <li><b>Password/Credential Management:</b> Secure and automated processes for password reset, rotation, and lifecycle.</li>
                        <li><b>Access Reviews (Certification):</b> Periodic auditing to confirm that the user's current access is still necessary and appropriate, eliminating unused or excessive privileges (also called "privilege creep"). 
                    </ul>
                </p>

            <h5>5. Identity Retirement (Offboarding & Deprovisioning) </h5>
            <p>When a user leaves the organization or no longer requires access, their identity must be securely retired.
            <ul>
                <li><b>Trigger:</b> A change in the HR system (e.g., termination date) triggers the deprovisioning workflow. </li>
                <li><b>Revoke Access:</b> All accounts and access privileges are immediately suspended or deleted across all connected systems.</li>
                <li><b>Audit Trail:</b> A record of the deprovisioning is kept for compliance and auditing purposes.</li>
            </ul>
            </p>
            `
    },
    2: {
        "title": "Multi-Factor Authentication (MFA)",
        "image": "../images/Multi-Factor Authentication (MFA).png",
        "description": `
            <br>
            <h5>Introduction</h5>
            <p>Multi-Factor Authentication is an authentication method that requires a user to provide two or more <b>verification factors</b>
            to gain access to a resource. It significantly enhances security by making it much harder for an unauthorized person to log in, as compromising one factor is not enough. 
            <br>MFA relies on requiring credentials from at least two of the following independent categories: </p>

            <ul>
                <li><b>Something you know</b> (Knowledge Factor): A password, PIN, or secret question.</li>
                <li><b>Versatile Applications:</b> Used for writing, brainstorming, and automation.</li>
                <li><b>Something you have</b> (Possession Factor): A smartphone (for a one-time code), a hardware token (e.g., YubiKey), or a smart card.</li>
                <li><b>Something you are</b> (Inherence Factor):</b>A biometric trait, such as a fingerprint, face scan, or voice pattern. </li>
            </ul>
            <p><b>Example:</b> A user logs into an application by entering their <b>password</b> (something they know) and then approving a notification sent to their <b>smartphone</b> (something they have).</p>


        `
    },
    3: {
        title: "Role-Based Access Control (RBAC)",
        image: "../images/Role-Based Access Control (RBAC).png",
        description: `    
            <h5>Introduction</h5>
            <p>Role-Based Access Control is an authorization method that restricts system access based on the role of a 
                user within an organization, not the individual user's identity. It is the most common model for managing access in 
                large environments because it simplifies the management process and enforces the Principle of Least Privilege.
            </p>
    
            <h5>How RBAC Works: </h5>
            <ul>
                <li><b>Define Roles:</b> Create roles that align with job functions (e.g., 'Financial Analyst,' 'HR Manager,' 'Database Administrator'). </li>
                <li><b>Assign Permissions to Roles:</b> Each role is granted a specific, minimum set of permissions (actions like 'read,' 'write,' 'delete') required for that job. </li>
                <li><b>Assign Users to Roles:</b> Users are assigned to one or more roles based on their current position. </li>
                <li><b>Access Granted:</b> When a user tries to access a resource, the system checks the permissions associated with their assigned role(s). </li>
            </ul>
            <b>Analogy:</b> Think of the keys on a cruise ship. Instead of giving every crew member a customized set of individual keys, they are given a <b>Master Key</b> specific to their job title 
            (their role). The <b>Captain's Key</b> opens all decks, while the <b>Housekeeper's Key</b> only opens guest cabins and linen closets.
            `
    },

    4: {
        title: "Identity Governance and Administration (IGA)",
        image: "../images/IGA.png",
        description: `
            <h2><b>🧑‍⚖️ Identity Governance and Administration (IGA) </b></h2>
    
            <h5>Introduction</h5>
            <p>Identity Governance and Administration (IGA) refers to the framework and technology used to manage digital identities, control access provisioning, 
            enforce policy across all enterprise systems, and ensure compliance with regulatory mandates. While the core IAM system handles the "how" (authentication and authorization), 
            IGA handles the <b>"who, what, where, and why"</b> of access, providing necessary visibility and control.</p>
        
            <h5>1. <b>Key Functions of IGA:</b></h5>
            <table border="1" cellspacing="0" cellpadding="5">
                <tr>
                    <th>Function </th>
                    <th>Description </th>
                    <th>IAM Process Phase</th>
                </tr>
                <tr>
                    <td>Identity Lifecycle Management </td>
                    <td>Automating the entire joiner, mover, and leaver process (onboarding, role changes, and offboarding).</td>
                    <td>Provisioning & Deprovisioning </td>
                </tr>
                <tr>
                    <td>Access Certifications (Recertification) </td>
                    <td>Periodically reviewing and validating that users' access rights are still appropriate and necessary for their current role. This eliminates "privilege creep." </td>
                    <td>Management & Recertification </td>
                </tr>
                <tr>
                    <td>Policy & Compliance Enforcement </td>
                    <td>Defining access policies and ensuring they are consistently applied across all applications to meet industry regulations (e.g., GDPR, HIPAA, SOX). </td>
                    <td>Authorization & Management </td>
                </tr>
                <tr>
                    <td>Role Management </td>
                    <td>Defining, modeling, and managing the roles used for RBAC to ensure they align with the Principle of Least Privilege. </td>
                    <td>Authorization</td>
                </tr>
                <tr>
                    <td>Access Request Management </td>
                    <td>Providing a self-service portal for users to request new access, which then triggers an automated approval workflow. </td>
                    <td>Authorization </td>
                </tr>
                <tr>
                    <td>Segregation of Duties (SoD)</td>
                    <td>Identifying and preventing conflicts of interest by ensuring no single user has incompatible access privileges (e.g., a user can't approve a payment and execute the payment). </td>
                    <td>Authorization & Compliance </td>
                </tr>
            </table>
            <p>IGA essentially takes the complex, manual tasks of auditing, compliance, and access review and automates them, providing a single pane of glass for administrators to govern who has access to what, and why. </p>
            `
    },
    5: {
        title: "Core IAM Architectural Components",
        image: "../images/Core IAM Architectural Components.png",
        description: `          
        <h2><b>Core IAM Architectural Components </b></h2>
        <h5>1. Identity Management and Directory Services</h5>
        <p>This is the <b>central repository</b> and <b>source of truth</b> for all digital identities and their attributes. 
            <ul>
                <li><b>Identity Store/Directory:</b> A database (often LDAP-based like Active Directory or a cloud-native identity provider) that securely stores user profiles, groups, roles, credentials, and attributes. </li>
                <li><b>Provisioning Engine:</b> The tool that automates the creation, updating, and disabling <b>(de-provisioning)</b> of user accounts across all connected applications and systems based on lifecycle events (e.g., a new employee is added to the HR system). </li>
            </ul>
        </p>
        <h5>2. Authentication Services</h5>
        <p>
        This component <b>verifies</b> that a user is who they claim to be. 
            <ul>
                <li><b>Authentication Engine:</b> The service that validates a user's credentials against the Identity Store. </li>
                <li><b>Multi-Factor Authentication (MFA):</b> Adds a layer of security by requiring two or more verification factors (e.g., password and a one-time code). </li>
                <li><b>Single Sign-On (SSO) / Federation:</b> Protocols (like SAML or OAuth/OIDC) that allow a user to authenticate once to a central Identity Provider and gain access to multiple linked applications without re-entering credentials. </li>
            </ul>     
        </p>
        <h5>3. Authorization and Access Control </h5>
        <p>
            This component determines what an authenticated user is allowed to do. 
            <ul>
                <li><b>Policy Engine:</b> Enforces access policies, often using models like <b>Role-Based Access Control (RBAC)</b> or <b>Attribute-Based Access Control (ABAC).</b> </li>
                <li><b>Access Gateway/Enforcement Point:</b> The mechanism (often an API gateway or application module) that checks the Policy Engine's decision before granting access to the requested resource. </li>
                <li><b>Privileged Access Management (PAM):</b> A dedicated system for securing, managing, and monitoring highly sensitive administrative accounts, often granting access only on a <b>Just-in-Time (JIT)</b> basis. </li>
            </ul>
        </p>
        <h5>4. Governance, Auditing, and Monitoring </h5>
        <p>This ensures the system is compliant and access remains appropriate over time. 
            <ul>
                <li><b>Identity Governance & Administration (IGA):</b> Tools that oversee and automate policy enforcement, managing roles, and running access <b>certification campaigns</b> (periodic reviews to validate existing permissions). </li>
                <li><b>Audit and Reporting:</b> Centralized logging of all authentication attempts, access decisions (grant/deny), and user activities for compliance and forensic analysis. </li>
                <li><b>User Behavior Analytics (UBA):</b> Uses machine learning to detect anomalous or suspicious activity that could indicate a compromised account. </li>
            </ul>
        </p>
        <h5>🔁 How the Components Interact </h5>
        <p>The process typically follows a clear sequence: 
            <ul>
                <li><b>1. Identity Creation:</b> The <b>Provisioning Engine</b> creates and links the new user profile in the Identity Store. </li>
                <li><b>2. Access Request:</b> A user attempts to log into an application. </li>
                <li><b>3. Authentication:</b> The application redirects the user to the <b>Authentication Service</b> (often via SSO), which verifies the user's credentials against the <b>Identity Store</b> (potentially using <b>MFA</b>). </li>
                <li><b>4. Authorization:</b> Once authenticated, the application or <b>Access Gateway</b> sends the user's identity details to the <b>Policy Engine</b> to determine their permissions (based on <b>RBAC/ABAC</b>). </li>
                <li><b>5. Access Granted/Denied:</b> The user is granted access to the specific function or data determined by the policy. </li>
                <li><b>6. Continuous Audit:</b> The <b>Audit and Reporting</b> component logs every step, providing data to the <b>IGA</b> system for compliance checks. </li>
            </ul>
        </p>
        `
    }
};
// Function to update blog details when clicked
function showBlog(blogId) {
    document.getElementById("blog-title").innerHTML = blogs[blogId].title;
    document.getElementById("blog-description").innerHTML = blogs[blogId].description;

    let blogImage = document.getElementById("blog-image");
    blogImage.src = blogs[blogId].image;
    blogImage.style.width = "40%";
    blogImage.style.maxWidth = "600px";
    blogImage.style.display = "block";
    blogImage.style.margin = "20px auto";
}

function loadBlogContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('blogId');

    if (blogId && blogs[blogId]) {
        showBlog(blogId);
    } else {
        showBlog(1);  // load default blog #1
    }
}


// Load blog content on page load
window.onload = loadBlogContent;

// Display the first blog when the website loads
// window.onload = function () {
//     showBlog(1);
// };
