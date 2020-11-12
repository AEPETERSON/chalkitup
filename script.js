const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
const log = console.log;
 
// Combine styled and normal strings
log(chalk.green('Hello my name is ') + chalk.blue('Alex Peterson!') + chalk.red(" The current class I am in is Web Dev II!"));

const rainbow = chalkAnimation.rainbow('Welcome to the wonderful world of computers and programming! Have a wonderful day everyone!'); // Animation starts
 
setTimeout(() => {
    rainbow.stop(); // Animation stops
}, 1000);
 
setTimeout(() => {
    rainbow.start(); // Animation resumes
}, 2000);