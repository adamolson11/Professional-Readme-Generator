import fs from 'fs'
import inquirer from "inquirer"
import {getGitHubReadmemd} from './helpers.js'






inquirer.prompt([



{

    type: 'input', 
    name: 'name', 
    message: 'What is the robot\'s name?', 
},   //name 

{

    type: 'number', 
    name: 'price', 
    message: 'What is the robot\'s price?', 
    
}, // price

{

    type: 'list', 
    name: 'condition', 
    message: 'What is the robot\'s condition?', 
    choices: ['new', 'used'],
}, // condition new or used


{

    type: 'number', 
    name: 'weight', 
    message: 'What is the robot\'s weight?', 
   
}, //weight 


{
    type: 'checkbox', 
    name: 'features', 
    message: 'which features are included?',
    choices: ['can fly', 'can talk', 'can clean']
    

},//features
 

{

    type: 'number', 
    name: 'numCodeViolations', 
    message: 'How many code violations have been reported for this robot?', 
    default: 0,
   
}, // code violations



{
    type: 'list', 
    name: 'image', 
    message: 'choose an image', 
    choices: () => {

   const files = fs.readdirSync('./assets/images/thumbs')
   return files 
    }
}// image

])
.then(answers => {
    const md= getGitHubReadmemd(answers)
   fs.writeFile(`./newFiles/${answers.name}.md`, md, err=>{
    if(err) {
        throw err
    }

    console.log(`${answers.name}.md saved!`)
   })
    })
.catch (error => console.log(error))