const fs = require('fs')
const path = require('path')
function metricsForEntry(req, res, next){
    console.log('listen ON ENTRY');
    const metricsForEntryPath = path.JSON(__dirname + '__metricsForEntryPath.json')

}