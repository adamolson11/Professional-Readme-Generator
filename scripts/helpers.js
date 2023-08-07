const buildFeaturesList = features => features
    .map(string => `<li>${string}</li>`)
    .join('')

function renderLicenseLink(license) {
    return `[License Info](https://choosealicense.com/licenses/)`
}

function renderLicenseBadge(license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

function renderLicenseSection(license) {
    return `${renderLicenseBadge(license)}

    #### License Details
    ${renderLicenseLink(license)}`
}

export const getGitHubReadmemd = ({ 
    name, projectName, license, description, 
    installation, testing, usage, GithubUserName, 
    Contributing, email, AuthorName, Roadmap, features,badgeURL }) => {
    return `
# Project Name ${projectName}


![Badge](${badgeURL})


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Testing Requirements](#testing-requirements)
- [Roadmap](#roadmap)
    
## Description
   

${description}

    
## Installation  ${installation} 
    
## Usage
    

${usage} 


## Features ${features}
    
Highlight the key features and functionalities of the project.
    
## Contributing
${Contributing}
    
## License
    
This project is licensed under the ${license}
${renderLicenseSection(license)}
    
## Contact
    
- Author: [${AuthorName}](https://github.com/${GithubUserName})
- Email: ${email} 
    
    
## Testing Requirements
   
Project testing needs: ${testing}
    

    
## Roadmap 
${Roadmap}
    
` 
}