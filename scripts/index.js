import fs from 'fs'
import inquirer from "inquirer"
import {getGitHubReadmemd} from './helpers.js'


inquirer.prompt([

    {

        type: 'input',
        name: 'name',
        message: 'What do you want to call the file?',
    },

    {

        type: 'input',
        name: 'projectName',
        message: 'What is the project name?',

    },

    {
        type: 'input',
        name: 'badgeURL',
        message: 'Enter the badge URL:',
        default: 'https://img.shields.io/badge/my-badge-blue',
    },


    {

        type: 'list',
        name: 'license',
        message: 'What License(s) are used?',
        choices: ["MIT", "ISC", "APACHE 2.0", "GPL", "None"],
    },


    {

        type: 'input',
        name: 'description',
        message: 'Please enter a  brief description of what the project does and its main features: ',

    },


    {
        type: 'checkbox',
        name: 'installation',
        message: 'How is this project installed? This should be Step-by-step instructions on how to install and set up the project.',
        choices: ['git clone', 'npm  i', 'npm start']


    },


    {

        type: 'input',
        name: 'testing',
        message: 'What Project testing needs are there if any?',
        default: " Manual testing",

    },



 


    {
        type: 'input',
        name: 'features',
        message: 'Enter project usage restrictions: Thisd should include nstructions on how to use the project.',
        default: "Open Source Project"
    },



    {
        type: 'input',
        name: 'GithubUserName',
        message: 'What is the GitHub Username? ',

    },


    {
        type: 'input',
        name: 'Contributing',
        message: 'What contributions this project can accept? ',
        default: "This project currently does not accept any contribution"
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is the email address used?  ',

    },

    {
        type: 'input',
        name: 'AuthorName',
        message: 'What is the name of the author for this project? ',

    }, 

    {
        type: 'checkbox',
        name: 'Roadmap',
        message: 'What future developments or implementations will there be for this project? ',
        choices: ['Generate HTML files','Generate MArkdown with Images', 'asdfdsfdsd', 'xxxxxxx']
        

    } 

])
    .then(answers => {
        const md = getGitHubReadmemd(answers)
        fs.writeFile(`./newFiles/${answers.name}.md`, md, err => {
            if (err) {
                throw err
            }

            console.log(`${answers.name}.md saved!`)
        })
    })
    .catch(error => console.log(error))