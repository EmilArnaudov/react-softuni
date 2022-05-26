export default function getDayName(dateStr) {

    var date = new Date(dateStr.split(' ')[0]);
    return date.toLocaleDateString('en-eu', { weekday: 'long' });        
}