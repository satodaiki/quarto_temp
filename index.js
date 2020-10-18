"use strict";
exports.__esModule = true;
var readline = require("readline");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var _this = this;
        process.stdin.resume();
        process.stdin.setEncoding('utf8');
        var reader = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        reader.on('line', function (line) {
            _this.lines.push(line);
        });
        reader.on('close', function () {
            console.log(_this.lines);
        });
    };
    Main.lines = [];
    return Main;
}());
Main.main();
