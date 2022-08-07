export const getDate = (date) => {
    let D = date.getDate();
    let M = date.getMonth() + 1;
    let Y = date.getFullYear();
    let H = date.getHours();
    let m = date.getMinutes();
    m < 10 ? (m = '0' + m) : m;
    return `${D}-${M}-${Y} | ${H}:${m}`;
  };