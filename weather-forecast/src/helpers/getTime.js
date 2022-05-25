export default function  getTime () {
    var today = new Date()
    let hours = today.getHours().length === 1 ? '0' + today.getHours() : today.getHours()
    let minutes = today.getMinuntes().length === 1 ? '0' + today.getMinuntes() : today.getMinuntes()

    let curTime = hours + ':' + minutes;
 
 
    return curTime;
  };