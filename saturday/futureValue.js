/*
public static double calculateFutureValue(double monthlyInvestment, double monthlyInterestRate, int months) {
    System.out.println("IncalculateFutureValue");
    double futureValue = 0.0;

    for (int i = 1; i <= months; i++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + monthlyInterestRate);
    }
    return futureValue;
}
*/

function calculateFutureValue(monthlyInv, monthlyInterestRate, months) {
    // Calculate future value ...
    let futureVal = 0.0;

    for (let i = 1; i <= months; i++) {
        futureVal = (futureVal + monthlyInv) * (1 + monthlyInterestRate);
    }
    return futureVal.toFixed(2) ;
}

let futvalue = calculateFutureValue(100, 0.01, 120);
console.log(futvalue);