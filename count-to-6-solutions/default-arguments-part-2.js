module.exports = (greeting, number = greeting.length) => 
    greeting += "!".repeat(number);
     