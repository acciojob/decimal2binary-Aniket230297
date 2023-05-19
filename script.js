// function DecimalToBinary(num) {
//   let binary = '';
  
//   while(num > 0) {
//     binary = (num % 2) + binary;
//     num = Math.floor(num / 2);
//   }
  
//   return binary;
// }

// console.log(DecimalToBinary(10));

function decimalToBinary(decimal) {

  let binary = "";
  if (decimal === 0) {
    return "0";
  }
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}
