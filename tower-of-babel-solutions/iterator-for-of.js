const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let number = 1,
            output = "";
        return {
            next() {

                if (number <= max) {
                    output = "";
                    output += (number % 3 === 0) ? "Fizz" : "";
                    output += (number % 5 === 0) ? "Buzz" : "";
                    output = (output === "") ? number : output;
                    number = number + 1;
                    return {
                        done: false,
                        value: output
                    }
                } else {
                    return {
                        done: true
                    };
                }



            }
        }
    }
}

for (let n of FizzBuzz) {
    console.log(n);
}