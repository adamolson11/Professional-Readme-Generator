const buildFeaturesList = features => features
.map(string => `<li>${string}</li>`)
.join('')
 



export const getGitHubReadmemd = ({name,price, condition,features, weight, numCodeViolations, image}) => {
    return `
    # Robot Name

## Price: $1000
## Condition: New
## Weight: 10 kg
## Num Code Violations: 0

## Features
- Feature 1
- Feature 2
- Feature 3
    
    `// you need to put inside the backticks the md file contentsyet and also, swap out the type names with the correct title names of the md object file. 
    
    //he creates a template literal from the file using a function.  
    }