export const getDate = (date) => {
    let newdate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    month < 10 ? (month = '0' + month) : month;
    newdate < 10 ? (newdate = '0' + newdate) : newdate;
    minutes < 10 ? (minutes = '0' + minutes) : minutes;
    return `${newdate}-${month}-${year} | ${hours}:${minutes}`;
  };