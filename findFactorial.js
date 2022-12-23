let factorial = Number(prompt("Enter a number"));
let sonuc = 1;
for (let i = 1; i <= factorial; i++) {
  sonuc = sonuc * i;
}
console.log(factorial + " sayısının faktöriyeli " + sonuc);
