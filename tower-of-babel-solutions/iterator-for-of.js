const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {

        return {
            next() {
                
            }
        }
    }
}

for (let n of FizzBuzz) {
    console.log(n);
}