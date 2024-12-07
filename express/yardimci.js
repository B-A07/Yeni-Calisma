//bir değerin numbera dönüşüp dönüşemeyeceğini kontrol eder

isNaN(123); // false
isNaN('123'); // false (çünkü '123' stringi, sayıya dönüştürülebilir)
isNaN('abc'); // true (çünkü 'abc' stringi, sayıya dönüştürülemez)

console.log(isNaN("Hello")); // true
console.log(isNaN(123));     // false




//verilen değeri sayıya çevirir

let a = "5";//string 
let b = Number(a);//b= a=5 |  sayıya dönüştürür
let c = Number("10"); //sayıya dönüştürür
console.log(typeof b + b + typeof c + c); // typeof yanına yazılanın değerin typeını verir | Number,String.Boole




//verilen değeri stringe çevirir

let d = String(100);//verilen değeri stringe çevirir
let e = (200).toString();//verilen değeri stringe çevirir
console.log(typeof d + d + typeof e + e); // typeof yanına yazılanın değerin typeını verir | Number,String.Boole




//Bir array'in sonuna yeni eleman ekler

let fruit = ["apple", "banana"];
fruits.push("orange");
console.log(fruit); // ["apple", "banana", "orange"]




//Bir array'in sonundaki elemanı çıkarır ve döndürür.

let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(lastFruit); // "orange"
console.log(fruits);    // ["apple", "banana"]




//Array'in her bir elemanına belirli bir fonksiyon uygular ve yeni bir array

let number = [1, 2, 3];
let doubled = number.map(num => num * 2);//array içindekilerin hepsini 2 ile çarpar
console.log(doubled); // [2, 4, 6]




//Array içindeki verileri sizin verdiğiniz koşula göre ayırır

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);//ikiye bölümünden kalan 0 olan sayıyı değişkene ata
console.log(evenNumbers); // değişkeni yazdır [2, 4] 




//Array'in elemanlarını birleştirerek tek bir değer döner
//array.reduce(callback, initialValue) 
// callback: Her elemanda uygulanacak birleştirme fonksiyonu.
//initialValue: Başlangıç değeri.

let sayi = [1, 2, 3, 4];
let sum = sayi.reduce((total, num) => total + num, 0);
console.log(sum); // 10


