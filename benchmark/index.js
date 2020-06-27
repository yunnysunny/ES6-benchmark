'use stirct'
const child_process = require('child_process')
const path = require('path')
const glob = require('glob')

var hasOnly = false;
const files = glob.sync(`${__dirname}/!(index).js`);
const configs = [];
const fns = [];
for (let i=0,len=files.length;i<len;i++) {
  const config = require(files[i]).suiteConfig || {};
  configs.push(config);
  if (config.only) {
    hasOnly = true;
  }
}
for (let i=0,len=configs.length;i<len;i++) {
  const {only,task} = configs[i];
  if (hasOnly) {
    if (only) {
      fns.push(task);
    }
  } else {
    fns.push(task);
  }
}

const doTask = async function () {
  for (let i=0,len=fns.length;i<len;i++) {
    const fn = fns[i];
    if (!fn) {
      continue;
    }
    await fns[i]();
  }
}
doTask();

