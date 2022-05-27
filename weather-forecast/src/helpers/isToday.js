export default function isToday(date) {
    const today = new Date();
    const day = new Date(date);
  
    if (today.toDateString() === day.toDateString()) {
      return true;
    }
  
    return false;
  }