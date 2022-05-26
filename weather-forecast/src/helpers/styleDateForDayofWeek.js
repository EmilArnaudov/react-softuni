export default function styleDate(dateTime) {
    let date = dateTime.split(' ')[0];

    let result = new Date(date).toLocaleString('en-eu',{day: 'numeric', month:'short'})
    return result;

}