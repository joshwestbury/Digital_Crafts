// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:
//
// good -> 20%
// fair -> 15%
// bad -> 10%
// > tipAmount(100, 'good')
// 20
// > tipAmount(40, 'fair')
// 6

function tipAmount(bill, service) {
    if (service === 'good') {
        var tip = bill * 0.2;
    } else if (service === 'fair') {
        var tip = bill * .15;
    } else if (service === 'poor') {
        var tip = bill * .1;
    }

    console.log(`Your tip amount is ${tip}.00 dollars`)
};

tipAmount(20.00, 'poor')
