#!/usr/bin/env node

function explain(v) {
  const converted = v.slice('2').split(' ').map(n => parseFloat(n)).map(n => (n * 100).toFixed(2) + '%');
  const meta = require('./metadata.json');
  const { labelArray } = JSON.parse(meta.output.dataset);
  const info = labelArray.reduce(
    (acc, label, i) => acc.concat(`${label}: ${converted[i]}`),
    []
  );
  console.log(info.join(', '));
}

const imgUrl = process.argv[process.argv.length - 1];
const showLabel = Boolean(process.argv.length >= 4);
const predict = require('./index');
(async () => {
  const v1 = await predict(imgUrl);
  if (showLabel) {
    explain(v1);
  }
  else {
    console.log(v1);
  }
})();