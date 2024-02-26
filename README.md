# console-log.js
console-log.js, is a simple Node.js package that allows you to customize console colors for better visual representation of logs.

## Install Package
```bash
npm install console-log.js
```

## Features
> Supports various text colors.
> Provides options for background colors.
> Allows for text formatting.

## Example
```javascript
const { colors, backcolor } = require('console-log.js');

console.log(colors.yellow('Test with yellow'));
console.log(colors.bold("Bold Text"));
console.log(colors.underline("Underlined Text"));
console.log(colors.strikethrough("Strikethrough Text"));
console.log(colors.randomRainbow("Random Rainbow Text"));
console.log(backcolor.green('This is a green message with background color'));
```
