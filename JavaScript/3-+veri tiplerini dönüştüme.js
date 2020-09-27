
// VERİ TİPLERİNİ DÖNÜŞTÜRME

let value;


console.log(value)
console.log( typeof value)

// VERITIPLERINI STRINGE ÇEVIRMEK IÇIN

örnek : 
value = 123
newValue = String(value)
console.log(newValue)
console.log( typeof newValue)
çıktı : 
123
String

örnek : 
value = String(123)
console.log( typeof value)
çıktı : 
123
number

örnek : 
value = String(true)
console.log( typeof value)

örnek : 
value = String(function() {console.log()})
console.log( typeof value)
çıktı : 


örnek : 
value = String([1,2,3])
console.log( typeof value)
çıktı : 



// VERITIPLERINI SAYIYA ÇEVIRMEK IÇIN

örnek :
value = Number("ali")// tipi number olarak yazıyor ama ekde NAN yazar yani note a number demektir.
console.log(value)
console.log( typeof value)
ÇIKTI :
NaN
number

örnek :
value = Number("123")
console.log(value)
console.log( typeof value)
çıktı : 
123
number

örnek :
value = Number(null)
console.log(value)
console.log( typeof value)
çıktı : 
0
number

örnek :
value = Number(undefined)// tipi number olarak yazıyor ama ekde NAN yazar yani not a number demektir.
console.log(value)
console.log( typeof value)
çıktı : 
NaN
number



// toString() Metodu  - çevirmek için ayrıca TO işlemi de yapılabilir . kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.

örnek :
value =(123).toString();
console.log(value);
çıktı : 
123
String

örnek :
value =(true).toString();
çıktı : 
true
String

örnek: 
var sayi	=	22;
var cikti	=	sayi.toString();

document.write("sayi : " + sayi + "<br>");
document.write("sayi veri türü : " + typeof(sayi) + "<br>");
document.write("cikti : " + cikti + "<br>");
document.write("cikti veri türü : " + typeof(cikti) + "<hr>");





// --------------------------   EXTRA ---------------------------- 


// NOT : javascript de string ile sayı toplanabilir. Ama yan yana yazar

örnek : 
const ab = "ali'nin " + "yaşı : " + 34 + "'dür"
console.log(ab)
çıktı : 
ali'nin yaşı : 34'dür

örnek :
const ba = "34" + 34 // string ile sayı toplanabilir. Ama yan yana yazar
console.log(ba)
çıktı : 
3434

örnek : 
const ca = Number("34") + 34 //string'i number'a çevirdikten sonra sayı ile toplar iseniz normal matematik işlemi yapar.
console.log(ca)
çıktı : 
68

