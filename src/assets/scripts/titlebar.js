window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('minimizeButton').addEventListener('click', () => {
        window.scripts.minimizeCurrentWin();
    });

    document.getElementById('closeButton').addEventListener('click', () => {
        window.scripts.hideCurrentWin();
    });

    let preferencesButton = document.getElementById('preferencesButton');
    if (preferencesButton) {
        document.getElementById('preferencesButton').addEventListener('click', () => {
            window.scripts.ipcSend('showPreferences', true);
        });
    };
});