export default function  getTime () {
    var today = new Date()
    let hours = today.getHours().toString();
    let minutes = today.getMinutes().toString();

    if (hours.toString().length == 1) {
        hours = "0" + hours;
    }

    if (minutes.toString().length == 1) {
        minutes = "0" + minutes;
    }


    let curTime = hours + ':' + minutes;
 
 
    return curTime;
  };