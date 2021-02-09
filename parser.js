const mouseNameMap = require('./mouse-name-map');
const miceNames = mouseNameMap.Map;

module.exports = {
    addMouseToDatabase: function (line) {
        parseLine(line);
    }
}

function parseLine(line) {
    Mouse = { name: "", price: 0 }; // Mouse object
    let words = line.split(" "); // split line into words

    for (let i = 0; i < words.length; i++) { // do each word
        while (canSkipWord(words[i])) i++; // if it's the typical starter words, skip
        if (miceNames.has(words[i])) { // if it's in the map
            Mouse.name = miceNames.get(words[i++]); // insert the value as the name
            if (!isNaN(words[i])) { // if the word is a number
                Mouse.price = words[i]; // set the price
            }
        }
        console.log(Mouse);
    }


    // insert to db
}

function canSkipWord(word) {
    switch (word) {
        case "lf": return true;
        case "sniper": return true;
        case "snipers": return true;
        case "sniping": return true;
        default: return false;
    }
}