function oddEvenNumbersInArra(x) {

    let numberOfOdd = 0;
    let numberOfEven = 0;
    let numberOfZero = 0;
    let numberOfNotNumber = 0;

    for (const item of x) {
        if(typeof item === "number") {
            if(item === 0) {
                numberOfZero++;
            } else if (item % 2 === 0) {
                numberOfEven++;
            } else {
                numberOfOdd++;
            }
        } else {
            numberOfNotNumber++;
        }
    }

    console.log(x);
    console.log("Zero: " + numberOfZero);
    console.log("Even: " + numberOfEven);
    console.log("Odd: " + numberOfOdd);
    console.log("NaN: " + numberOfNotNumber);
}

    
let x = [1, 2, 3, 4, 5];
oddEvenNumbersInArra(x);