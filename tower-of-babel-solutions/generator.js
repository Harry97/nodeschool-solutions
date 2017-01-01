const max = process.argv[2];

let FizzBuzz = function* () {
    let num = 0,
        value;

    while (num++ < max) {

        if (num % 15 == 0) {
            value = "FizzBuzz"
        } else if (num % 3 == 0) {
            value = "Fizz"
        } else if (num % 5 == 0) {
            value = "Buzz"
        } else {
            value = num;
        }

        yield value;
    }

}()

for (let n of FizzBuzz) {
    console.log(n);
}