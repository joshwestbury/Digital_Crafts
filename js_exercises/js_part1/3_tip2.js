// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. This function may make use of tipAmount as a sub-task.
//
// > totalAmount(100, 'good')
// 120
// > totalAmount(40, 'fair')
// 46

function totalAmount(bill, service) {
    if (service === 'good') {
        var tip = bill * 0.2;
        var total = bill + tip;
    } else if (service === 'fair') {
        var tip = bill * .15;
        var total = bill + tip;
    } else if (service === 'poor') {
        var tip = bill * .1;
        var total = bill + tip;
    }

    console.log(`Your total amount is ${total}.00 dollars`)
};

totalAmount(20.00, 'poor')
