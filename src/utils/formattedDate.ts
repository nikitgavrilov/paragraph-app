export const formattedDate = () => {
  let currentDate = new Date();

  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  // Проверяем, нужно ли добавить ведущий ноль к числу
  let formattedDay = day < 10 ? `0${day}` : `${day}`;
  let formattedMonth = month < 10 ? `0${month}` : month;
  let formattedHours = hours < 10 ? `0${hours}` : hours;
  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  let formattedDate = `${formattedDay}.${formattedMonth}.${year} ${formattedHours}:${formattedMinutes}`;

  return formattedDate;
};
