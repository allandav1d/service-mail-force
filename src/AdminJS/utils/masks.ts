//mask date 2023-07-08 23:15 to 08/07/2023 23:15
const maskDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const dayStr = day < 10 ? `0${day}` : day;
    const monthStr = month < 10 ? `0${month}` : month;
    const hourStr = hour < 10 ? `0${hour}` : hour;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${dayStr}/${monthStr}/${year} ${hourStr}:${minutesStr}`;
}