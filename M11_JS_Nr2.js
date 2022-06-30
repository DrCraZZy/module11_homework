function isPrime(x) {
    if (x > 1000) {
        console.log("Input is to large, enter a number to 1000");
    } else if(x <= 1) {
        return;
    }

    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return;
        }
    }
    console.log(x);   
}
