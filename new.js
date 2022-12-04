const colors = require('colors');
const { mkdirSync, copyFileSync, constants, writeFileSync } = require('fs');
const [a, b, day] = process.argv;
if (!day) {
    console.error(`What day?`.bold.red);
    process.exit();
}
const year = (new Date()).getFullYear();
const newDir = `${__dirname}/${year}/${day}`;
mkdirSync(newDir, {recursive: true});
try {
    copyFileSync(`${__dirname}/template_solution.js`, `${newDir}/1a.js`, constants.COPYFILE_EXCL);
    copyFileSync(`${__dirname}/template_solution.js`, `${newDir}/2a.js`, constants.COPYFILE_EXCL);
    copyFileSync(`${__dirname}/template_input.txt`, `${newDir}/input.txt`, constants.COPYFILE_EXCL);
    console.error(`Files created in ${`'${year}/${day}'`.bold}!`.green)
} catch (error) {
    if (error.code === 'EEXIST') {
        console.error(`Files already exists in ${`'${year}/${day}'`.bold}`.red)
    }
}