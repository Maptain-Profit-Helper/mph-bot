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
    let words = line.split(/ +/);
    let word = "";

    for (let i = 0; i < words.length; i++) {
        let mouse = { name: "", price: 0 };
        
        while (canSkipWord(words[i])) i++;

        word.localeCompare("") == 0 ? word += words[i] : word += " " + words[i];

        if (miceNames.has(word)) {
            mouse.name = miceNames.get(word); // insert the value as the name
            i++;
            if (words[i].localeCompare("-") == 0) i++; // skips "-"
            if (!isNaN(words[i].match(/\d+/g))) { // if the next value is a number or contains a number
                mouse.price = parseInt(words[i].match(/\d+/g), 10); // set the price
            }
        }

        console.log(mouse);
        if (verifyMouse(mouse)) {
            sendToDatabase(mouse);
        }
    }
}

/**
 * Sends a fetch request to the server as a put request.
 * @param mouse The mouse being sent to the server.
 */
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
 * Verifies if mouse is a valid object to send to the server. 
 * Requires a non-empty string, price greater than zero, and price that is valid number.
 * @param mouse The mouse object being verified.
 */
function verifyMouse(mouse) {
    if (mouse.name != "" && mouse.price > 0 && !isNaN(mouse.price)) return true;
    else return false;
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