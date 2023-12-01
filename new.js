require('dotenv').config();
const axios = require('axios');
const colors = require('colors');
const { mkdirSync, copyFileSync, constants, writeFileSync } = require('fs');
const [a, b, day] = process.argv;

async function run() {
    if (!day) {
        console.error(`What day?`.bold.red);
        process.exit();
    }
    const year = (new Date()).getFullYear();
    // const year = 2022;
    const newDir = `${__dirname}/${year}/${day}`;
    mkdirSync(newDir, {recursive: true})

    // get and write input file
    try {
        const { data } = await axios(`https://adventofcode.com/${year}/day/${day}/input`, {
            headers: {
                // copy session cookie from browser
                Cookie: `session=${process.env.SESSION_COOKIE}`,
            },
        });
        writeFileSync(`${newDir}/input.txt`, data.trim());
        console.log(`✅ Input retrieved and written to ${`'${year}/${day}/input.txt'`.bold}`.green);
    } catch (error) {
        try {
            copyFileSync(`${__dirname}/template_input.txt`, `${newDir}/input.txt`, constants.COPYFILE_EXCL);
            console.error(`❕ Unable to retrieve and write input, copied blank input template instead.`.yellow);
        } catch (error2) {
            if (error2.code === 'EEXIST') {
                console.error(`❌ Input file already exists in ${`'${year}/${day}'`.bold}`.red);
            } else {
                console.error({error: error2});
            }
        }
    }

    // write solution files
    try {
        copyFileSync(`${__dirname}/template_solution.js`, `${newDir}/1a.js`, constants.COPYFILE_EXCL);
        copyFileSync(`${__dirname}/template_solution.js`, `${newDir}/2a.js`, constants.COPYFILE_EXCL);
        console.log(`✅ Solution files created in ${`'${year}/${day}'`.bold}`.green);
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.error(`❌ Solution files already exist in ${`'${year}/${day}'`.bold}`.red);
        } else {
            console.error({error});
        }
    }
    console.log('\n');
}
console.log('\n');
run();