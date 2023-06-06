const chalk = require("chalk")


const log = console.log;


exports.error = function (str) {
    log(chalk.red(str))
}

exports.success = function (str) {
    log(chalk.green(str))
}


exports.warning = function (str) {
    log(chalk.yellow(str))
}