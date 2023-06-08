// 输出repos的函数
const chalk = require("chalk");


// 每个字符长度
const MAXLENGTH = 20

exports.findOneRepoByPath = function (target, lists) {
    for (let index = 0; index < lists.length; index++) {
        const element = lists[index];
        if (element.path === target) {
            return element
        }
    }
    return null;
}

const complete14 = function (str) {
    const l = str.length
    let result
    const residue = parseInt((MAXLENGTH - l) / 2)
    if (l < MAXLENGTH) {
        result = " ".repeat(residue) + str + " ".repeat(MAXLENGTH - l - residue)
    } else {
        result = str.slice(0, MAXLENGTH - 3) + "..."
    }
    return result
}

exports.logRepos = function (repos) {
    console.log(`${chalk.green("|") + complete14("path") + chalk.green("|") + complete14("name") + chalk.green("|") + complete14("description") + chalk.green("|")}`);
    console.log(`${chalk.green("|") + "-".repeat(MAXLENGTH) + chalk.green("|") + "-".repeat(MAXLENGTH) + chalk.green("|") + "-".repeat(MAXLENGTH) + chalk.green("|")}`);
    for (let i of repos) {
        const m = `${chalk.green("|") + complete14(i.path) + chalk.green("|") + complete14(i.name) + chalk.green("|") + complete14(i.description) + chalk.green("|")}`
        console.log(m);
    }
}
