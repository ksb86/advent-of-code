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
        const actualDay = day || defaultDay;
        const actualPart = part || 1;
        const year = date.getFullYear();
        const filePath = `${year}/${actualDay}/${actualPart}a.js`;
        
        // Run nodemon directly instead of through yarn
        spawnProcess(`npx nodemon -e txt,js ${filePath}`);
        spawnProcess(`code ${filePath}`);
        rl.close();
    });
});
