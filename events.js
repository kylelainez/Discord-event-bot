const xslx = require('xlsx');

const file = xslx.readFile('Colony Action.xlsx');

const sheet = file.Sheets['Sheet1'];

const data = xslx.utils.sheet_to_json(sheet);

function getEvents() {
    console.log(data);
}

module.exports = { getEvents };
