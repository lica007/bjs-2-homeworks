class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback){
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if(this.alarmCollection.find(item => item.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            time: time,
            callback: callback, 
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(ind => ind.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;

    }

    start(){
        if(this.intervalId !== null){
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(index => {
                if(index.time === currentTime && index.canCall === true){
                    index.canCall = false;
                    index.callback();
                }
            })
        },1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(index => index.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

