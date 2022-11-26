let str =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quaerat quia fugit provident reiciendis, dolore, voluptatem natus eligendi, eaque culpa libero. Incidunt dolorem debitis fugiat! Laborum accusantium voluptas ad atque!";
str = str.toLocaleLowerCase();
str = str.replaceAll(",", "").replaceAll(".", "");
let strArr = str.split(" ");
let letter = prompt("На яку букву слова?");

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i][0] == letter) document.writeln(strArr[i]);
}
