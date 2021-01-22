let isStarted = false;
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startButton').addEventListener('click', () => {
        let startButton = document.getElementById('startButton');
        let status = document.getElementById('status');
        if (isStarted) {
            clearInterval(interval);
            isStarted = false;
            startButton.innerHTML = 'Start';
            status.innerHTML = '';
        } else if (!isStarted) {
            isStarted = true;
            let passed = 0;
            let time = window.store.get('preferences.screenTime')*60;
            startButton.innerHTML = 'Reset timer';
            interval = setInterval(() => {
                passed++;
                if (passed == time) {
                    startButton.innerHTML = 'Start';
                    status.innerHTML = 'It\'s rest time';
                    clearInterval(interval);
                    isStarted = false;
                    if (window.store.get('preferences.sendNotification')) {
                        new Notification('It\'s rest time', {
                            body: 'Take a break'
                        });
                    };
                    if (window.store.get('preferences.playSound')) {
                        document.getElementById('ring').play();
                    };
                    return;
                };
                status.innerHTML = window.scripts.humanize(time*1000-passed*1000);
            }, 1000);
        };
    });
});