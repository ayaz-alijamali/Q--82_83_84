"use strict";
// Question ____________ 82
Object.defineProperty(exports, "__esModule", { value: true });
function calculateStringLength(str) {
    return str.length;
}
// Question ______________ 83
function convertCase(str) {
    const uppercaseStr = str.toUpperCase();
    const lowercaseStr = str.toLowerCase();
    console.log("Uppercase:", uppercaseStr);
    console.log("Lowercase:", lowercaseStr);
}
// Example usage:
convertCase("Hello, World!");
// Question ___________ 84
function replaceWord(sentence) {
    const replacedSentence = sentence.replace(/JavaScript/g, "TypeScript");
    return replacedSentence;
}
// Example usage:
const originalSentence = "JavaScript is a popular programming language. JavaScript can be used for web development.";
const modifiedSentence = replaceWord(originalSentence);
console.log(modifiedSentence);
