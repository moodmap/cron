const fs = require('fs');

const output = "Working gherkin 2";

let value = JSON.stringify(output);

fs.writeFileSync('student-2.json', value);

