function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  const formattedLicense = license.replace(/ /g, "%20");
  return `![License](https://img.shields.io/badge/license-${formattedLicense}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `[License](#license)`;
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License

This project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
