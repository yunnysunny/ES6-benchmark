'use stirct'
const child_process = require('child_process')
const path = require('path')
const glob = require('glob')

const cmd = 'node'
const fns = glob.sync(`${__dirname}/!(index).js`).map( (file) => {
  return require(file).suiteConfig;
});
const doTask = async function () {
  for (var i=0,len=fns.length;i<len;i++) {
    await fns[i]();
  }
}
doTask();

