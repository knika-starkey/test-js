let students = {
  "Бурбан Хотян": 10,
  "Шелест Секлетина": 7,
  "Баранюк Агнеса": 8,
  "Воробей Петро": 5,
  "Московченко Віталія": 9,
  "Фурс Рудан": 7,
  "Будай Наталія": 10,
  "Стоцький Орест": 12,
  "Лещинський Есфір": 4,
  "Жук Ілона": 2,
};
function show() {
  let str = "";
  for (const key in students) {
    str += `${key} : ${students[key]} <br>`;
  }
  document.getElementById("text").innerHTML = str;
}
function addStud() {
  let newStudName = prompt("Призвіще та ім'я");
  let newStudMark = prompt("Середня оцінка студента");
  students[newStudName] = newStudMark;
}
function delStud() {
  let which = prompt("Призвіще та ім'я");
  delete students[which];
}
function average() {
  let av = 0;
  for (const key in students) {
    av += students[key];
  }
  document.getElementById("textAverage").innerHTML = `Середній бал групи = ${
    av / Object.keys(students).length
  }`;
}
