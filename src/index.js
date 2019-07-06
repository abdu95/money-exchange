// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Return an object containing the minimum number of coins needed to make change
    //50, 25, 10, 5, 1
    var numberOfHalfDollars = 0;
    var numberOfQuarters = 0;
    var numberOfDimes = 0;
    var numberOfNickels = 0;
    var numberOfPennies = 0;
    var resultObject = {};
    if (currency <= 0)
        return {};
    else if (currency >= 10000)
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    numberOfHalfDollars = Math.floor(currency / 50);
    if (numberOfHalfDollars >= 1)
        currency = currency - (numberOfHalfDollars * 50);
    numberOfQuarters = Math.floor(currency / 25);
    if (numberOfQuarters >= 1)
        currency = currency - (numberOfQuarters * 25);
    numberOfDimes = Math.floor(currency / 10);
    if (numberOfDimes >= 1)
        currency = currency - (numberOfDimes * 10);
    numberOfNickels = Math.floor(currency / 5);
    if (numberOfNickels >= 1)
        currency = currency - (numberOfNickels * 5);
    numberOfPennies = currency;
    //return "in exchange, I'll give " + numberOfHalfDollars + " :HalfDollars " + numberOfQuarters + " :Quarters " + numberOfDimes + " : Dimes " + numberOfNickels + " :Nickels " + numberOfPennies + " :Pennies ";
    resultObject = {
        "H": numberOfHalfDollars, "Q": numberOfQuarters, "D": numberOfDimes, "N": numberOfNickels, "P": numberOfPennies
    };
    return resultObject;
}
