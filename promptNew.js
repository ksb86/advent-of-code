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
    spawnProcess(`day=${day || defaultDay} yarn run-new`);
    rl.close();
});
