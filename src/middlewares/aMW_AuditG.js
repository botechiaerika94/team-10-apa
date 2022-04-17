const fs = require('fs')
const path = require('path')

function aMW_AG(req, res, next) {
    console.log('aMW_AG Started');
    const aMW_AG_Path = path.join(__dirname, '../data/aMW_AGDataBase.json');
    const aMW_AI_AG = JSON.parse(fs.readFileSync(aMW_AG_Path, 'utf-8'));
    aMW_AI_AG.counting++;
    fs.writeFileSync(aMW_AG_Path(json.stringIfy(aMW_AI_AG, _null, ()); next();
        }
    };
    aMW_AG();
    module.exports = aMW_AG(req, res, next);