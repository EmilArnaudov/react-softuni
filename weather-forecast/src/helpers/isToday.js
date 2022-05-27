export default function isToday(date) {
    const today = new Date();
    const day = new Date(date);

    // 👇️ Today's date
    console.log(today);
    console.log(day);
  
    if (today.toDateString() === day.toDateString()) {
      return true;
    }
  
    return false;
  }