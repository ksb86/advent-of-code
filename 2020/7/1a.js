const path = require('path');
const { getInput, newLineString, numArraySum, validateAnswer } = require('../../helpers');

const rules = getInput(path.resolve(__dirname, './input'));

function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

const getParentBagNames = (bagName) => {
    const results = rules
        .filter((rule) => {
            return rule.split('contain')[1].includes(bagName);
        })
        .map((rule) => {
            return rule.split(' bags')[0];
        });

    if (results.length) {
        return results.map(getParentBagNames);
    }
    return bagName;
};

let allParents = flatten(getParentBagNames('shiny gold'));
console.log('allParents: ', allParents.length);
console.log('allParents dedupped: ', [...new Set(allParents)].length);

// NOT 6
// NOT 104
// somwhere here
// NOT 392