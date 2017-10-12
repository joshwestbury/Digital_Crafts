// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.
//
// > printBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
//

// for i in range(len(x)):
//     if i in[0]:
//         print("*" * len(x))
//     elif i in[1]:
//         print("*" + x + "*")
//     elif i in [2]:
//         print("*" * len(x))


function printBanner (text) {
    x = []
    for (var i=0; i <= text.length; i++) {
        x.push("*")
    }
    console.log(" ")
    console.log(x.join(""))
    console.log(" ")
    console.log(text)
    console.log(" ")
    console.log(x.join(""))
    console.log(" ")
}

printBanner('Welcome to DigitalCrafts')
