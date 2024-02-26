//index.ts
//Dev by Sekkena2#5709

//rest color (turn console color back to normal)
const resetColor = "\x1b[0m";

//function that send the color in console
function colorizeText(text: string, color: string): string {
    return `${color}${text}${resetColor}`;
}

// Formatting options
const format = {
    bold: (text: string): string => colorizeText(text, "\x1b[1m"),
    underline: (text: string): string => colorizeText(text, "\x1b[4m"),
    strikethrough: (text: string): string => colorizeText(text, "\x1b[9m"),
};

// Random color per letter
function rainbowText(text: string): string {
    let rainbowText = '';
    for (let i = 0; i < text.length; i++) {
        const randomColorCode = "\x1b[38;5;" + Math.floor(Math.random() * 256) + "m";
        rainbowText += colorizeText(text[i], randomColorCode);
    }
    return rainbowText;
}

//colors
interface ColorFunctions {
    [key: string]: (text: string) => string;
}

const colors: ColorFunctions = {
    red: (text: string): string => colorizeText(text, "\x1b[31m"),
    yellow: (text: string): string => colorizeText(text, "\x1b[33m"),
    blue: (text: string): string => colorizeText(text, "\x1b[34m"),
    green: (text: string): string => colorizeText(text, "\x1b[32m"),
    magenta: (text: string): string => colorizeText(text, "\x1b[35m"),
    cyan: (text: string): string => colorizeText(text, "\x1b[36m"),
    brightBlack: (text: string): string => colorizeText(text, "\x1b[90m"),
    brightRed: (text: string): string => colorizeText(text, "\x1b[91m"),
    brightGreen: (text: string): string => colorizeText(text, "\x1b[92m"),
    brightYellow: (text: string): string => colorizeText(text, "\x1b[93m"),
    brightBlue: (text: string): string => colorizeText(text, "\x1b[94m"),
    brightMagenta: (text: string): string => colorizeText(text, "\x1b[95m"),
    brightCyan: (text: string): string => colorizeText(text, "\x1b[96m"),
    brightWhite: (text: string): string => colorizeText(text, "\x1b[97m"),
    orange: (text: string): string => colorizeText(text, "\x1b[38;5;208m"),
    lime: (text: string): string => colorizeText(text, "\x1b[92m"),
    teal: (text: string): string => colorizeText(text, "\x1b[36m"),
    pink: (text: string): string => colorizeText(text, "\x1b[38;5;206m"),
    lavender: (text: string): string => colorizeText(text, "\x1b[38;5;183m"),
    peach: (text: string): string => colorizeText(text, "\x1b[38;5;203m"),
    turquoise: (text: string): string => colorizeText(text, "\x1b[38;5;48m"),
    indigo: (text: string): string => colorizeText(text, "\x1b[38;5;54m"),
    olive: (text: string): string => colorizeText(text, "\x1b[38;5;58m"),
    maroon: (text: string): string => colorizeText(text, "\x1b[38;5;88m"),
    navy: (text: string): string => colorizeText(text, "\x1b[38;5;17m"),
    coral: (text: string): string => colorizeText(text, "\x1b[38;5;209m"),
    slate: (text: string): string => colorizeText(text, "\x1b[38;5;104m"),
    crimson: (text: string): string => colorizeText(text, "\x1b[38;5;196m"),
    chocolate: (text: string): string => colorizeText(text, "\x1b[38;5;94m"),
    plum: (text: string): string => colorizeText(text, "\x1b[38;5;182m"),
    beige: (text: string): string => colorizeText(text, "\x1b[38;5;187m"),
    sepia: (text: string): string => colorizeText(text, "\x1b[38;5;130m"),

    random: (text: string): string => {
        const randomColorCode = "\x1b[38;5;" + Math.floor(Math.random() * 256) + "m";
        return colorizeText(text, randomColorCode);
    },
};

const backcolors = {
    black: (text: string): string => colorizeText(text, "\x1b[40m"),
    red: (text: string): string => colorizeText(text, "\x1b[41m"),
    green: (text: string): string => colorizeText(text, "\x1b[42m"),
    yellow: (text: string): string => colorizeText(text, "\x1b[43m"),
    blue: (text: string): string => colorizeText(text, "\x1b[44m"),
    magenta: (text: string): string => colorizeText(text, "\x1b[45m"),
    cyan: (text: string): string => colorizeText(text, "\x1b[46m"),
    white: (text: string): string => colorizeText(text, "\x1b[47m"),
};

// Add the new options to the colors object
colors.bold = (text: string): string => format.bold(text);
colors.underline = (text: string): string => format.underline(text);
colors.strikethrough = (text: string): string => format.strikethrough(text);
colors.randomRainbow = (text: string): string => rainbowText(text);

export { colors, backcolors, format };
