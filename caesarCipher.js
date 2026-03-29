// Get phrase and shift number from command line
const phrase = process.argv[2];
const shift = parseInt(process.argv[3]);

// Validation: check if phrase and shift are provided
if (!phrase || isNaN(shift)) {
    console.log("Usage: node caesarCipher.js <phrase> <shift_number>");
    process.exit();
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (let i = 0; i < phrase.length; i++) {
    let char = phrase[i].toLowerCase();

    // Check if character is in the alphabet
    if (alphabet.includes(char)) {
        let oldIndex = alphabet.indexOf(char);

        // Calculate new index with modulo to handle wrap-around
        let newIndex = (oldIndex + shift) % 26;

        // Adjust for negative shifts
        if (newIndex < 0) {
            newIndex += 26;
        }

        result += alphabet[newIndex];
    } else {
        // Keep spaces and symbols as they are
        result += char;
    }
}

console.log(`Encrypted phrase: ${result}`);