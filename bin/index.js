#!/usr/bin/env node

const download = require("download-git-repo")
const { program } = require('commander');
const config = require("../config/index.json")
const path = require("path")
const dir = process.cwd()
const { error, success, warning } = require("../utils/log")


program
    .name('down')
    .description('a CLI to get github code')
    .version('0.1.0');



program.command('init')
    .description('获得模板代码')
    .argument('<name>', '模板的名字')
    .option('-n, --name <char>', '重新定义文件名', 'fast-vue3')
    .action((str, option) => {
        const repo = config[str]
        const filename = path.resolve(dir, option.name)
        if (repo) {
            download(repo, filename, function (err) {
                err ? error(err) : success("下载成功！！");;
            });
        } else {
            warning("模板名不存在！！");
        }
    });
program.command('repos')
    .description('获得所有模板名')
    .action(() => {
        for (let key in config) {
            success(`${key} ----- ${config[key]}`);
        }
    });
program.parse();
