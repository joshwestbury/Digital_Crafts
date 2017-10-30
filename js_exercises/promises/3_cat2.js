// Write a function that takes two input filenames and one output filename. Read the files and combine the file contents. Write the combined contents to the output file. Use a promise style to chain the reading and writing together.
//

var rp = require("request-promise");
var fs = require("fs-extra-promise");

function main(input1, input2, out) {
    var read1 = new Promise (function(resolve, reject) {
        try {
            fs.readFile(input1, (error, buffer) => {
            if (error) throw error;
            var content = buffer.toString();
            console.log(content);
            });
        }
        catch (error) {
            console.log("Error", error)
        }
    });
    var read2 = new Promise (function(resolve, reject) {
        try {
            fs.readFile(input2, (error, buffer) => {
            if (error) throw error;
            var content = buffer.toString();
            console.log(content);
            });
        }
        catch (error) {
            console.log("Error", error)
        }
    });
}

main('in_1.txt', 'in_2.txt', 'out.txt')
