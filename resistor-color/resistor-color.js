//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = [
  "Black",
  "Brown",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Violet",
  "Grey",
  "White"
]
const colorCode = (str) => COLORS.indexOf(str.substr(0,1).toUpperCase() + str.substr(1));

console.log(colorCode("white"))
