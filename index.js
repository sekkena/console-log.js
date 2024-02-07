//index.js
//dev by Sekkena2#5709
const resetColor = "\x1b[0m";
const brightBlackColor = "\x1b[90m";
const brightRedColor = "\x1b[91m";
const brightGreenColor = "\x1b[92m";
const brightYellowColor = "\x1b[93m";
const brightBlueColor = "\x1b[94m";
const brightMagentaColor = "\x1b[95m";
const brightCyanColor = "\x1b[96m";
const brightWhiteColor = "\x1b[97m";
const blackBackgroundColor = "\x1b[40m";
const redBackgroundColor = "\x1b[41m";
const greenBackgroundColor = "\x1b[42m";
const yellowBackgroundColor = "\x1b[43m";
const blueBackgroundColor = "\x1b[44m";
const magentaBackgroundColor = "\x1b[45m";
const cyanBackgroundColor = "\x1b[46m";
const whiteBackgroundColor = "\x1b[47m";
const orangeColor = "\x1b[38;5;208m";
const limeColor = "\x1b[92m";
const tealColor = "\x1b[36m";

function colorizeText(text, color) {
    return `${color}${text}${resetColor}`;
}

const colors = {
    red: (text) => colorizeText(text, "\x1b[31m"),
    yellow: (text) => colorizeText(text, "\x1b[33m"),
    blue: (text) => colorizeText(text, "\x1b[34m"),
    green: (text) => colorizeText(text, "\x1b[32m"),
    magenta: (text) => colorizeText(text, "\x1b[35m"),
    cyan: (text) => colorizeText(text, "\x1b[36m"),
    brightBlack: (text) => colorizeText(text, brightBlackColor),
    brightRed: (text) => colorizeText(text, brightRedColor),
    brightGreen: (text) => colorizeText(text, brightGreenColor),
    brightYellow: (text) => colorizeText(text, brightYellowColor),
    brightBlue: (text) => colorizeText(text, brightBlueColor),
    brightMagenta: (text) => colorizeText(text, brightMagentaColor),
    brightCyan: (text) => colorizeText(text, brightCyanColor),
    brightWhite: (text) => colorizeText(text, brightWhiteColor),
    blackBackground: (text) => colorizeText(text, blackBackgroundColor),
    redBackground: (text) => colorizeText(text, redBackgroundColor),
    greenBackground: (text) => colorizeText(text, greenBackgroundColor),
    yellowBackground: (text) => colorizeText(text, yellowBackgroundColor),
    blueBackground: (text) => colorizeText(text, blueBackgroundColor),
    magentaBackground: (text) => colorizeText(text, magentaBackgroundColor),
    cyanBackground: (text) => colorizeText(text, cyanBackgroundColor),
    whiteBackground: (text) => colorizeText(text, whiteBackgroundColor),
    orange: (text) => colorizeText(text, orangeColor),
    lime: (text) => colorizeText(text, limeColor),
    teal: (text) => colorizeText(text, tealColor),
    random: (text) => {
        const randomColorCode = "\x1b[38;5;" + Math.floor(Math.random() * 256) + "m";
        return colorizeText(text, randomColorCode);
    },
};


module.exports = colors;
