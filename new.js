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
    const yearDayDir = `${year}/${day}`;
    const newDir = `${__dirname}/${yearDayDir}`;
    mkdirSync(newDir, {recursive: true})

    // write sample input file
    try {
        copyFileSync(`${__dirname}/template_blank.txt`, `${newDir}/example.txt`, constants.COPYFILE_EXCL);
        console.log(`✅ Created: ${`'${yearDayDir}/example.txt'`.bold} (BLANK)`.green);
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.error(`❌ Exists: ${`'${yearDayDir}/example.txt'`.bold}`.red);
        } else {
            console.error({ error });
        }
    }

    // get and write input file
    try {
        const { data } = await axios(`https://adventofcode.com/${year}/day/${day}/input`, {
            headers: {
                // copy session cookie from browser
                Cookie: `session=${process.env.SESSION_COOKIE}`,
            },
        });
        writeFileSync(`${newDir}/input.txt`, data.trim());
        console.log(`✅ Created: ${`'${yearDayDir}/input.txt'`.bold} (POPULATED)`.green);
    } catch (error) {
        try {
            copyFileSync(`${__dirname}/template_blank.txt`, `${newDir}/input.txt`, constants.COPYFILE_EXCL);
            console.warn(`❕ Created: ${`'${yearDayDir}/input.txt'`.bold} (BLANK)`.green);

            // console.error(`❕ Unable to retrieve input, wrote blank input file at ${yearDayDir}/input.txt`.yellow);
        } catch (error2) {
            if (error2.code === 'EEXIST') {
                console.error(`❕ ❌ Exists: ${`'${yearDayDir}/input.txt'`.bold}`.red);
            } else {
                console.error({error: error2});
            }
        }
    }

    // write solution file part 1
    try {
        copyFileSync(`${__dirname}/template_solution.js`, `${newDir}/1a.js`, constants.COPYFILE_EXCL);
        console.log(`✅ Created: ${`'${yearDayDir}/1a.js'`.bold}`.green);
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.error(`❌ Exists: ${`'${yearDayDir}/1a.js'`.bold}`.red);
        } else {
            console.error({error});
        }
    }

    // write solution file part 2
    try {
        copyFileSync(`${__dirname}/template_solution.js`, `${newDir}/2a.js`, constants.COPYFILE_EXCL);
        console.log(`✅ Created: ${`'${yearDayDir}/2a.js'`.bold}`.green);
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.error(`❌ Exists: ${`'${yearDayDir}/2a.js'`.bold}`.red);
        } else {
            console.error({error});
        }
    }
    console.log('\n');
}
console.log('\n');
run();