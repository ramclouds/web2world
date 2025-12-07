let serviceDetails = {
    "S1": {
        "title": "Identity Strategy & Roadmap",
        "icon": "../images/icons/web-icon.png",
        "description": `
        <h2>Identity Strategy & Roadmap</h2>
        <p>We assess your current state, define a target operating model, and create a roadmap aligned with business and compliance goals. </p>`
    },
    
    "S2": {
    "title": "Identity Governance & Administration (IGA) ",
    "icon": "../images/icons/backend-icon.png",
    "description": `
      <h2>Identity Governance & Administration (IGA) </h2>
      <p>Automate user provisioning, certification, and de-provisioning to improve audit readiness and reduce risk. </p>`
  },
    
    "S3": {
    "title": "Access Management ",
    "icon": "../images/icons/api-icon.png",
    "description": `
      <h2>Access Management </h2>
      <p>Implement secure authentication, authorization, SSO, and MFA across on-prem and cloud applications. </p>
      `
  },
    
    "S4": {
    "title": "Privileged Access Management (PAM) ",
    "icon": "../images/icons/cyber-icon.png",
    "description": `
      <h2>Privileged Access Management (PAM) </h2>
      <p>Secure privileged accounts and monitor high-risk access with industry-leading tools like CyberArk and Beyond Trust. </p>
      
    `
  },
  "S5": {
    "title": "Cloud Identity Integration",
    "icon": "../images/icons/cyber-icon.png",
    "description": `
      <h2>Cloud Identity Integration </h2>
      <p>Enable unified identity across multi-cloud and hybrid environments. </p>
    `
  },
  "S6": {
    "title": "Managed IAM Services ",
    "icon": "../images/icons/cyber-icon.png",
    "description": `
    <h2>Managed IAM Services</h2>
    <p>Offload day-to-day IAM operations to our expert team with 24x7 monitoring, maintenance, and continuous improvement. </p>
    
    `
  }
};

function showService(service) {
    if (serviceDetails[service]) {
        document.getElementById("service-title").innerHTML = serviceDetails[service].title;
        document.getElementById("service-description").innerHTML = serviceDetails[service].description;

        // Handle the icon
        if (serviceDetails[service].icon) {
            let icon = document.createElement('img');
            icon.src = serviceDetails[service].icon;
            icon.alt = serviceDetails[service].title + " Icon";
            document.getElementById("service-title").prepend(icon); // Adds the icon before the title
        }
    }
}

function getQueryParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

window.onload = function () {
    let selectedService = getQueryParam('service') || 'S1'; // Default to 'S1'
    showService(selectedService);
};
