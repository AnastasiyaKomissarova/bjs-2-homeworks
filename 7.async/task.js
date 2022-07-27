class AlarmClock {
	constructor () {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock (time, callback, id) {
		if (id === undefined) {
		throw new Error ("Параметр id не передан");
		}
		 if (this.alarmCollection.find((object) => object.id === id) !== undefined) {
            return console.error('Будильник с таким id уже существует');
        }
        this.alarmCollection.push({"id": id, "time": time, "callback": callback});
	}

 	removeClock(id) {

 		const lengthColl = this.alarmCollection.length;
 		return lengthColl !== (this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id)).length ? true : false;
 		
    }
 		
	getCurrentFormattedTime() {
		 const currentDate = new Date();
		 const  alarmTime = (currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`)+ ":"+ 
		 (currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`);
   		return alarmTime;
   }

	start() {
		const checkClock = (alarm) => {
			const currentTime = this.getCurrentFormattedTime();
 			if (alarm.time === currentTime) {
                alarm.callback();
			}
		}
		if (this.timerId === null) {
            this.timerId = setInterval(this.alarmCollection.forEach(item => {checkClock(item.id)}),1000);     
        	}
         
	}

 	stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

  	printAlarms() {
        this.alarmCollection.forEach(item => console.log("id: " + item.Id + " time: " + item.time));
    }

    clearAlarms() {
    	this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const alarm = new AlarmClock(); 
    alarm.addClock("08:00", () => console.log("1 раз"), 1);
    alarm.addClock("08:01", () => {console.log("2 раз"); alarm.removeClock(2)}, 2);
    alarm.addClock("08:01", () => console.log("3 раз"),5);
    alarm.addClock("08:02", () => {console.log("4 раз"); alarm.stop(); alarm.clearAlarms(); alarm.printAlarms()}, 3);
    alarm.printAlarms();
    alarm.start();
}

testCase();