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
    let day = date.getUTCDay();
    let hour = date.getUTCHours();

    let current = data.find((obj, idx) => obj.UTC === hour);
    const next = [];

    current = current[days[day]];

    for (let i = 1; i <= 3; i++) {
        if (hour === 24 || hour + i === 24) {
            hour = 0 - i;
            day = day === 6 ? 0 : day + 1;
        }
        next.push(data[hour + i][days[day]]);
    }

    let returnValue = `Current Event: ${current} \n\nNext Events: ${next.map(
        (evt) => `\n${evt}`
    )}`;

    return returnValue;
}

module.exports = { getEvents };
