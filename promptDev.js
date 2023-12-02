const { spawn, execSync } = require('child_process');
// const exec = (commands) => {
//     execSync(commands, { stdio: 'inherit', shell: true });
// };
const spawnProcess = (commands) => {
    spawn(commands, { stdio: 'inherit', shell: true });
};
const readline = require('readline');
const date = new Date();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const defaultDay = date.getDate()+1;
rl.question(`Day (1-25) ? (default: ${defaultDay}) `, (day) => {
    rl.question('Part (1 or 2) (default: 1) ? ', (part) => {
        spawnProcess(`day=${day || defaultDay} part=${part || 1} yarn run-dev`);
        spawnProcess(`code ${date.getFullYear()}/${day || defaultDay}/${part || 1}a.js`);
        rl.close();
    });
});
