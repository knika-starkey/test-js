let lines = [
  "I met her in a club down in old Soho",
  "Where you drink champagne and it tastes just like Coca-Cola",
  "C-O-L-A, Cola",
  "She walked up to me and she asked me to dance",
  `I asked her her name and in a dark brown voice she said, "Lola"`,
  "L-O-L-A, Lola",
  "Lo-Lo-Lo-Lo-Lola",
];
let pareLines = [];
for (let i = 0; i < lines.length; i++) {
  if (i % 2 == 0) pareLines.push(lines[i]);
}
let compare = (colaA, colaB) => {
  return colaA[0] > colaB[0] ? 1 : colaA[0] === colaB[0] ? 0 : -1;
};
pareLines.sort(compare);
for (let i = 0; i < pareLines.length; i++) {
  document.write(`${i * 2} : ${pareLines[i]} <br>`);
}
