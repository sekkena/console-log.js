//index.js
//Dev by Sekkena2#5709

//rest color (turn console color back to normal)
const resetColor = "\x1b[0m";

///function that send the color in console
function colorizeText(text, color) {
    return `${color}${text}${resetColor}`;
}

/*
function colorTheText(text, color) {
    return `${color}${text}${resetColor}`;
}
*/


//colors
const colors = {
    red: (text) => colorizeText(text, "\x1b[31m"),
    yellow: (text) => colorizeText(text, "\x1b[33m"),
    blue: (text) => colorizeText(text, "\x1b[34m"),
    green: (text) => colorizeText(text, "\x1b[32m"),
    magenta: (text) => colorizeText(text, "\x1b[35m"),
    cyan: (text) => colorizeText(text, "\x1b[36m"),
    brightBlack: (text) => colorizeText(text, "\x1b[90m"),
    brightRed: (text) => colorizeText(text, "\x1b[91m"),
    brightGreen: (text) => colorizeText(text, "\x1b[92m"),
    brightYellow: (text) => colorizeText(text, "\x1b[93m"),
    brightBlue: (text) => colorizeText(text, "\x1b[94m"),
    brightMagenta: (text) => colorizeText(text, "\x1b[95m"),
    brightCyan: (text) => colorizeText(text, "\x1b[96m"),
    brightWhite: (text) => colorizeText(text, "\x1b[97m"),
    orange: (text) => colorizeText(text, "\x1b[38;5;208m"),
    lime: (text) => colorizeText(text, "\x1b[92m"),
    teal: (text) => colorizeText(text, "\x1b[36m"),
    pink: (text) => colorizeText(text, "\x1b[38;5;206m"),
    lavender: (text) => colorizeText(text, "\x1b[38;5;183m"),
    peach: (text) => colorizeText(text, "\x1b[38;5;203m"),
    turquoise: (text) => colorizeText(text, "\x1b[38;5;48m"),
    indigo: (text) => colorizeText(text, "\x1b[38;5;54m"),
    olive: (text) => colorizeText(text, "\x1b[38;5;58m"),
    maroon: (text) => colorizeText(text, "\x1b[38;5;88m"),
    navy: (text) => colorizeText(text, "\x1b[38;5;17m"),
    coral: (text) => colorizeText(text, "\x1b[38;5;209m"),
    slate: (text) => colorizeText(text, "\x1b[38;5;104m"),
    crimson: (text) => colorizeText(text, "\x1b[38;5;196m"),
    chocolate: (text) => colorizeText(text, "\x1b[38;5;94m"),
    plum: (text) => colorizeText(text, "\x1b[38;5;182m"),
    beige: (text) => colorizeText(text, "\x1b[38;5;187m"),
    sepia: (text) => colorizeText(text, "\x1b[38;5;130m"),
    bold: (text) => colorizeText(text, "\x1b[1m"),
    underline: (text) => colorizeText(text, "\x1b[4m"),
    strikethrough: (text) => colorizeText(text, "\x1b[9m"),
    randomRainbow: (text) => rainbowText(text),
    random: (text) => {
        const randomColorCode = "\x1b[38;5;" + Math.floor(Math.random() * 256) + "m";
        return colorizeText(text, randomColorCode);
    },
};

const backcolors = {
    black: (text) => colorizeText(text, "\x1b[40m"),
    red: (text) => colorizeText(text, "\x1b[41m"),
    green: (text) => colorizeText(text, "\x1b[42m"),
    yellow: (text) => colorizeText(text, "\x1b[43m"),
    blue: (text) => colorizeText(text, "\x1b[44m"),
    magenta: (text) => colorizeText(text, "\x1b[45m"),
    cyan: (text) => colorizeText(text, "\x1b[46m"),
    white: (text) => colorizeText(text, "\x1b[47m"),
};

const format = {
    bold: (text) => colorizeText(text, "\x1b[1m"),
    underline: (text) => colorizeText(text, "\x1b[4m"),
    strikethrough: (text) => colorizeText(text, "\x1b[9m"),
};

// Random color per letter
function rainbowText(text) {
    let rainbowText = '';
    for (let i = 0; i < text.length; i++) {
        const randomColorCode = "\x1b[38;5;" + Math.floor(Math.random() * 256) + "m";
        rainbowText += colorizeText(text[i], randomColorCode);
    }
    return rainbowText;
}

module.exports = { colors, backcolors, format };
