const fs = require('fs');
const path = require('path');
const optionsJSON = require(path.join(__dirname, 'options.json'));

function getOptions() {
    if (!optionsJSON.minimizeToTray) return;
    if (optionsJSON.minimizeToTray == true) {
        document.getElementById('minimizeToTrayCheckbox').checked = true
    }
}

window.onload = getOptions();

function minimizeToTrayOnclick() {
    if (document.getElementById('minimizeToTrayCheckbox').checked == true) {
        optionsJSON.minimizeToTray = true;
        fs.writeFile(path.join(__dirname, 'options.json'), JSON.stringify(optionsJSON), err => {
            if (err) console.log(err);
        });
    } else if (document.getElementById('minimizeToTrayCheckbox').checked == false) {
        optionsJSON.minimizeToTray = false;
        fs.writeFile(path.join(__dirname, 'options.json'), JSON.stringify(optionsJSON), err => {
            if (err) console.log(err);
        });
    } else return;
};