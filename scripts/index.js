import fs from 'fs'
import inquirer from "inquirer"
import { getGitHubReadmemd } from './helpers.js'






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

        type: 'list',
        name: 'license',
        message: 'What License(s) are used?',
        choices: ["MIT", "ISC", "APACHE 2.0", "GPL", "None"],
    },


    {

        type: 'input',
        name: 'description',
        message: 'Enter project description: ',

    },


    {
        type: 'checkbox',
        name: 'installation',
        message: 'How is this project installed?',
        choices: ['git clone', 'npm  i', 'npm start']


    },


    {

        type: 'input',
        name: 'testing',
        message: 'How many code violations have been reported for this robot?',
        default: " Manual testing",

    },



    {
        type: 'input',
        name: 'usage',
        message: 'Enter project usage restrictions: ',
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