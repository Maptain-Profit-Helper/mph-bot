const mouseNameMap = require('./mouse-name-map');
const miceNames = mouseNameMap.Map;

module.exports = {
    addMouseToDatabase: function(line) {
        parseLine(line);
    }
}

function parseLine(line) {
    Mouse = { name: "", price: 0 };
    // console.log(miceNames);
    let test = miceNames.get("white"); // should print White
    console.log(test);
}