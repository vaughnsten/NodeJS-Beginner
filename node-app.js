// const chalk = require('chalk');

// const validator = require('validator');

// console.log(chalk.green('Success!'));

// const fs = require('fs');

// const bite = 7;

// const bat = 5;

// fs.writeFileSync('notes.txt', (bat + bite));

// fs.appendFileSync('notes.txt', " " + (bat * bite));

// -----------------------------------------

// const name = require('./web.js');

// console.log(name);

// -----------------------------------------

const chalk = require('chalk');
const validator = require('validator');
const add = require('./web.js');
const yargs = require('yargs');

// const sum = chalk.red.bold(add(6, 3));
// console.log(sum);

// console.log(validator.isEmail('wahata@email.com'));

 const command = process.argv[2];

// console.log(process.argv);

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ', argv.title);
        console.log('Body: ' + argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removing a new note',
    handler: function(){
        console.log('Removing a new note!');
    }
});

yargs.command({
    command: 'list',
    describe: 'Listing a new note',
    handler: function(){
        console.log('Listing a new note!');
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a new note',
    handler: function(){
        console.log('Reading a new note!');
    }
});

console.log(yargs.argv);

// if (command === 'add'){
//     console.log('Adding note!');
// } else if (command === 'remove'){
//     console.log('Removing note!');
// }