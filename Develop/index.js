// TODO: Include packages needed for this application

import inquirer from 'inquirer'



// TODO: Create an array of questions for user input
//const questions 

inquirer.prompt([{
type: 'input',
name:'favFood',
message: 'what is your favorite food?'
},

{
type: 'confirm', 
name: 'likesVideoGames',
message: 'Do you like VideoGames?'
},

])

.then((answers) => {
    console.log(answers)
})

.catch((err) => {console.log(err)
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
