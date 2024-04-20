const priceInJPY = 5000;

// TODO 1
let currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500]
 ]);

// TODO 2
let priceInIDR = priceInJPY * currency.get("JPY");

// Testing with console.log()
console.log("Price in IDR:", priceInIDR);