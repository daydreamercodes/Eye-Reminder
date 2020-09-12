const humanizeDuration = require('humanize-duration');
const path = require('path');

function Counter(options) {
    var timer;
    var instance = this;
    var seconds = options.seconds || 10;
    var onUpdateStatus = options.onUpdateStatus || function() {};
    var onCounterEnd = options.onCounterEnd || function() {};
    var onCounterStart = options.onCounterStart || function() {};

    function decrementCounter() {
        onUpdateStatus(seconds);
        if (seconds === 0) {
            stopCounter();
            onCounterEnd();
            return;
        }
        seconds--;
    };

    function startCounter() {
        onCounterStart();
        clearInterval(timer);
        timer = 0;
        decrementCounter();
        timer = setInterval(decrementCounter, 1000);
    };

    function stopCounter() {
        clearInterval(timer);
    };

    return {
        start : function() {
            startCounter();
        },
        stop : function() {
            stopCounter();
        }
    }
};

var isStarted = 0;

var countdown = new Counter({
    seconds: 20*60,

    onCounterStart: function () { 
        isStarted = 1;
        document.getElementById('startButton').innerHTML = 'Started';
        document.getElementById('startButton').style.opacity = 0.6;
        document.getElementById('startButton').style.cursor = 'not-allowed';
    },

    onUpdateStatus: function(second) {
        document.getElementById('counter').innerHTML = `${humanizeDuration(second*1000, { delimiter: ' and ' })} remaining for the rest time.`
    },

    onCounterEnd: function() {
        const restTimeNotification = new Notification('It\'s rest time', {
            body: 'Take a break for your eyes',
            icon: path.join(__dirname, 'assets/icons/win/128x128.ico')
        })
        document.getElementById('counter').innerHTML = 'It\'s rest time';
        document.getElementById('startButton').innerHTML = 'Start';
        document.getElementById('startButton').style.opacity = 1;
        document.getElementById('startButton').style.cursor = 'pointer';
        isStarted = 0;
    }
});

function start20Mins() {
    if (isStarted == 0) {
        countdown.start();
    }
}