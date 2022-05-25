export default function  getTime () {
    var today = new Date()
    let hours = today.getHours().length === 1 ? '0' + today.getHours() : today.getHours()
    let minutes = today.getMinutes().length === 1 ? '0' + today.getMinutes() : today.getMinutes()

    let curTime = hours + ':' + minutes;
 
 
    return curTime;
  };