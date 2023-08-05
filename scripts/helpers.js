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
    Contributing, email, AuthorName, Roadmap, features }) => {
    return `
    # Project Name ${projectName}

    [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/${license})
    
    ## Description
    
    A brief description of what the project does and its main features.
    ${description}
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Features](#features)
    - [Contributing](#contributing)
    - [License](#license)
    - [Contact](#contact)
    
    ## Installation
    
    Step-by-step instructions on how to install and set up the project.
    ${installation} 
    
    ## Usage
    
    Instructions on how to use the project, including examples and screenshots.
    ${usage} 
    ## Features
    
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
    
    
    
    `// you need to put inside the backticks the md file contentsyet and also, swap out the type names with the correct title names of the md object file. 

    //he creates a template literal from the file using a function.  
}