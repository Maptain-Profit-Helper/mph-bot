const { URL } = require('./config.json');
const fetch = require("node-fetch");
const mouseNameMap = require('./mouse-name-map');
const miceNames = mouseNameMap.Map;

/**
 * Entry point funtion for the parser. It will attempt to send the 
 * inputted line to the server.
 */
module.exports = {
    addMouseToDatabase: function (line) {
        parseLine(line);
    }
}

/**
 * Separates line into words then attempts to create a mouse object 
 * to send to the database.
 */
function parseLine(line) {
    let words = line.split(/ +/); // split line into words

    for (let i = 0; i < words.length; i++) { // do each word
        let names = [ "" ];
        let mouse = { name: "", price: 0 };

        while (canSkipWord(words[i])) i++; // if it's the typical starter words, skip
        if (miceNames.has(words[i])) { // if it's in the map
            mouse.name = miceNames.get(words[i++]); // insert the value as the name
            // if (!isNaN(words[i])) { // if the word is a number
            if (!isNaN(words[i].match(/\d+/g))) {
                mouse.price = parseInt(words[i].match(/\d+/g), 10); // set the price
            }
        }
        console.log(mouse);
        // insert to db
        if (mouse.name != "" && mouse.price != 0 && !isNaN(mouse.price)) {
            sendToDatabase(mouse);
        }
    }
}

async function sendToDatabase(mouse) {
    await fetch(URL + "mouse", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(mouse)
    });
}



/**
 * Checks for common words to skip.
 * @param word The word should have been split from the line (no empty spaces).
 */
function canSkipWord(word) {
    switch (word) {
        case "lf": return true;
        case "sniper": return true;
        case "snipers": return true;
        case "sniping": return true;
        default: return false;
    }
}