const fs = require('fs')
const path = require('path')
let gameAIFilePath = path.join(__dirname, '../data/gameAIDataBase.json')
let gameAI = JSON.parse(fs.readFileSync(gameAIFilePath, 'utf-8'));
let controller = {
    gameRead: (req, res) => {
        res.render('game-AI/game01', {
            title: 'APA GAME!'
        })
    }
}
module.exports = controller