const fs = require('fs')
const path = require('path')
let count = 1;
function metricsForEntry(req, res, next){
    console.log('listen ON ENTRY');
    const metricsForEntryPath = path.join(__dirname , '../data/metricsForEntryPath.json')
    const objMFEntry = JSON.parse(fs.readFileSync(metricsForEntryPath,'utf-8'));
    objMFEntry.id++;
    fs.writeFileSync(metricsForEntryPath, null, ' ');

}