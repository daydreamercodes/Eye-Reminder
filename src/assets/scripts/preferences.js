window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('screenTime').value = window.store.get('preferences.screenTime');

    let sendNotificationToggle = document.getElementById('sendNotificationToggle');
    let playSoundToggle = document.getElementById('playSoundToggle');
    window.store.get('preferences.sendNotification') ? sendNotificationToggle.innerHTML = 'Send notification: On' : sendNotificationToggle.innerHTML = 'Send notification: Off';
    window.store.get('preferences.playSound') ? playSoundToggle.innerHTML = 'Play sound: On' : playSoundToggle.innerHTML = 'Play sound: Off';

    document.getElementById('setButton').addEventListener('click', () => {
        let screenTime = document.getElementById('screenTime').value;
        if (screenTime < 1) {
            alert('Screen time must be greater than 0.');
            return document.getElementById('screenTime').value = window.store.get('preferences.screenTime');
        } else if (screenTime > 1440) {
            alert('Wait, what? This is not healthy.');
            return document.getElementById('screenTime').value = window.store.get('preferences.screenTime');
        };            
        window.store.set('preferences.screenTime', screenTime);
    });

    document.getElementById('sendNotificationToggle').addEventListener('click', () => {
        let sendNotification = window.store.get('preferences.sendNotification');
        if (sendNotification) {
            document.getElementById('sendNotificationToggle').innerHTML = 'Send notification: Off';
            window.store.set('preferences.sendNotification', false);
        } else {
            document.getElementById('sendNotificationToggle').innerHTML = 'Send notification: On';
            window.store.set('preferences.sendNotification', true);
        };
    });

    document.getElementById('playSoundToggle').addEventListener('click', () => {
        let playSound = window.store.get('preferences.playSound');
        if (playSound) {
            document.getElementById('playSoundToggle').innerHTML = 'Play sound: Off';
            window.store.set('preferences.playSound', false);
        } else {
            document.getElementById('playSoundToggle').innerHTML = 'Play sound: On';
            window.store.set('preferences.playSound', true);
        };
    });
});