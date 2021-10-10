const fs = require('fs')
const path = require('path')

function readFile() {
  fs.readFile(path.join(__dirname, 'text.txt'), (err, data) => {
    document.getElementById('showText').innerText = data
  })
}

function writeFile() {

}
