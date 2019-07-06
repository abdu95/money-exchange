// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    //50, 25, 10, 5, 1
    var numberOfHalfDollars = 0;
    var numberOfQuarters = 0;
    var numberOfDimes = 0;
    var numberOfNickels = 0;
    var numberOfPennies = 0;
    numberOfHalfDollars = Math.floor(currency / 50);
    if (numberOfHalfDollars >= 1)
        currency - (numberOfHalfDollars * 50);
    numberOfQuarters = Math.floor(currency / 25);
    if (numberOfQuarters >= 1)
        currency - (numberOfQuarters * 25);
    numberOfDimes = Math.floor(currency / 10);
    if (numberOfDimes >= 1)
        currency - (numberOfDimes * 10);
    numberOfNickels = Math.floor(currency / 5);
    if (numberOfNickels >= 1)
        currency - (numberOfNickels * 5);
    numberOfPennies = currency;
    return "in exchange, I'll give " + numberOfHalfDollars + " :HalfDollars" + numberOfQuarters + " :Quarters " + numberOfDimes + ": Dimes " + numberOfNickels + " :Nickels " + numberOfPennies + " :Pennies";
}
