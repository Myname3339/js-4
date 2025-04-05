//1:
function concatenateStrings(value1, value2) {
    return value1 + value2;
}
console.log(concatenateStrings("aa","bb"))
//2:
function getStringLength(a) {
    let dlina = a.length;
    return dlina;
}
console.log(getStringLength("fetwgfdgdgf"))
//3:
const id = [
    firstName = "Elmir",
    lastName = "Tahirbeyov"
]
function addFirst(id){
    id.unshift("Hello, ");
    return id;
}

console.log(addFirst(id))
//4:
const id1 = [
    hello = "Hello ,",
    firstName = "Elmir",
    lastName = "Tahirbeyov"
]
function extractNameFromTemplate(id1){
    id1.shift();
    return id1;
}

console.log(extractNameFromTemplate(id1))
//5:
let id2 = "Elmir Tahirbeyov";
function getFirstChar(id2){
    let firstsymbol = id2[0];
    return firstsymbol;
}
console.log(getFirstChar(id2))
//6:
const id3 = ["/","Elmir Tahirbeyov"];
function removeLeadingAndTrailingWhitespaces(id3){
    delete id3[0];
    return id3;
}
console.log(removeLeadingAndTrailingWhitespaces(id3))
//7:
let id4 = "";
function repeatString(a, b){
    for (let i = 1; i <= b; i++) {
        id4 += a; 
    }
    return id4;
}
console.log(repeatString("xa ", 4))
//8:
let id5 = "I don't like programming";
function fix(id5){
    let fixed = id5.replace(/don't /g, '')
    return fixed;
}
console.log(fix(id5))
//9:
let id6 = "<1><2><3><4><5><6>";
function fix1(id6){
    let fixing1 = id6.replace(/</g, '')
    let fixed1 = fixing1.replace(/>/g, '')
    return fixed1;
}
console.log(fix1(id6))
//10:
let id7 = '';
function convertToUpperCase(id7) {
    c = id7.toUpperCase(); 
    return c;
}
console.log(convertToUpperCase("hello world"))
//11:
let id8 = "'Elmir@gmail.com'";
function extractEmails(id8) {
    result = `[${id8}]`
    return result;
}
console.log(extractEmails(id8))
//12:
function getRectangleString(width, height) {
    let top = "┌" + "─".repeat(width - 2) + "┐\n";
    let middle = ("│" + " ".repeat(width - 2) + "│\n").repeat(height-2);
    let bottom = "└" + "─".repeat(width - 2) + "┘\n";
    return top + middle + bottom;
}
console.log(getRectangleString(5,5));
//13:
function encodeToRot13(str) {
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return str.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
}
console.log(encodeToRot13("hello"));
//14:
function isString(value) {
    return typeof value === "string"
}
console.log(isString("Elmir"));

//15:
const id12 = ['A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
             'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
             'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
             'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'];
for (let asd = 0; asd < id12.length; asd++) {
    let answer = id12[asd] + '=>' + asd;
    console.log(answer);
}
//16:
let id13 = 5;
let id13b = 5;
function getRectangleArea(id13, id13b){
    let ora = id13 * id13b;
    return ora;
}
console.log(getRectangleArea(5, 20))
//17:
let r = 0;
let π = 3.14159265358979;
function getCicleCircumference(r){
    let id14 = 2*π*r;
    return id14;
}
console.log(getCicleCircumference(1));
//18:
let x2a = 0;
let x2b = 0;
function getAverage(x2a, x2b){
    let id15 = (x2a + x2b) / 2;
    return id15;
}
console.log(getAverage(5, 11));
//19:
function getDistanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2-x1)**2+(y2-y1)**2)
}
console.log(getDistanceBetweenPoints(-5,0,10,-10));

//20:
function getLinearEquationRoot(a, b) {
    if (a === 0) {
        return b === 0 
    }
    return -b / a;
}
console.log(getLinearEquationRoot(5, -10));

//21:
let id18 = 137;
function getLastDigit(id18){
    let dddf = String(id18);
    answer5 = dddf.length - 1;
    return dddf[answer5];
}
console.log(getLastDigit(18))
//22:
let id19 = "123";
function parseNumberFromString(id19) {
    return +id19;
}
console.log(parseNumberFromString("123"))
//23:
function isPrime(n) {
    return n%2!==0;
}
console.log(isPrime(8));
//24:
function toNumber(value, def) {
    if (typeof value == "number") return value;
    return def;
}
console.log(toNumber(9, 0));
//25:
function findElement(arr, value) {
    return arr?.findIndex((item) => item == value);
 }
console.log(findElement(['Ace', 10, true], 10));
//26:
function generateOdds(len) {
   let data = [];
   let count = len;
   for (let i = 0; i < count; i++) {
     if (i % 2 !== 0) {
         data.push(i);
     }else{
        count++;
     }
   }
   return data;
}
 console.log( generateOdds(5));
//27:
function doubleArray(arr) {
    let data = arr;
    return[...data, ...arr];
}
console.log(doubleArray(['Ace', 10, true]));
//28:
function getArrayOfPositives(arr) {
    return arr.filter((item) => item > 0);
}
console.log(getArrayOfPositives([ 0, 1, 2, 3, 4, 5 ]));
//29:
function getArrayOfStrings(arr) {
    return arr.filter((item) => typeof item == "string");
}
console.log(getArrayOfStrings([ 0, 1, 'cat', 3, true, 'dog' ]));
//30:
function removeFalsyValues(arr) {
    return arr.filter((item) => !!item);
}
console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]));
 


 