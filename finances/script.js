"use strict";
let financesArr = [100, -23, 44, 17, -54, 99, -4, 1];
let loss = 0;
let profit = 0;
for (let i = 0; i < financesArr.length; i++) {
  financesArr[i] > 0 ? (profit += financesArr[i]) : (loss += financesArr[i]);
}
document.write(`${profit} - сумарний прибуток,
<br> ${loss} - сумарний прибуток`);

financesArr.forEach(write);

function write(el, index) {
  document.write(`<br>${index + 1} : ${el}`);
}
