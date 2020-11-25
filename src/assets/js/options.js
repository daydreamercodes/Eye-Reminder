const path = require('path');

function getOptions() {
    if (eval(localStorage.getItem('minimizeToTray')) === true) document.getElementById('minimizeToTrayCheckbox').checked = true;
}

window.onload = getOptions();

function minimizeToTrayOnclick() {
    if (document.getElementById('minimizeToTrayCheckbox').checked == true) {
        localStorage.setItem('minimizeToTray', true);
    } else localStorage.setItem('minimizeToTray', false);
};