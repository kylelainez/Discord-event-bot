const xslx = require('xlsx');

const file = xslx.readFile('Colony Action.xlsx');

const sheet = file.Sheets['Sheet1'];

const data = xslx.utils.sheet_to_json(sheet);

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

function getEvents(timestamp) {
    const date = new Date(timestamp);
    const day = date.getUTCDay();
    const hour = date.getUTCHours();

    let current = '';
    data.forEach((obj) => {
        if (obj.UTC === hour) {
            current = obj[days[day]];
        }
    });
    return current;
}

module.exports = { getEvents };
