// ARRAY
// Dizi dizinleri 0 ile başlar.
// Array;  var name = ["John", "James", 24];
// Object; var name = {firstName:"John", lastName:"James", age:24};


//LENGHT METHODU  - uzunluk
// NOT : length de sayarken 1 den başlıyor. 0 dan değil.

let value;
const numbers = [1,2,3,4,52,6,71,8,9]
const str = ["talha","hasan", "kamil"]
const mix = [1,"merhaba",3,4,"pyton",6,7,8,9]
const colors = ["Red", "Blue", "Yellow"]; 
value1 = numbers.length;
value2 = str.length;
value3 = mix.length;
value4 = colors.length;
console.log(value1, value2 , value3, value4)
çıktı : 
9 3 9 3 

// INDEXLEME METHODU

örnek:
let value;
const numbers = [1,2,3,4,52,6,71,8,9]
const str = ["talha","hasan", "kamil"]
value1=numbers[0];
value2=str[2][0];
console.log(value1, value2)
output : 
1 k

// INDEXLEME DE DEĞER DEĞİŞTİRME

const colors = ["Red", "Blue", "Yellow"]; 
colors[2] = "Green"
console.log(colors)
outout : 
(3) ['Red', 'Blue', 'Green']


// INDEX OF METHODU- değer arama

let value;
const numbers = [1,2,3,4,52,6,71,8,9]
value1 = numbers.indexOf(33);   // listede 33 olmadığı için sonuç -1 çıkar
value2 = numbers.indexOf(2);
console.log(value1, value2)
output :
-1 1

// ➤ birinci parametre ("....") aramak için madde belirler.
// ➤ ikinci parametre nereden aramaya başlayacağını tespit eder 

örnek :
// örnek :
const mix = ['FB', "Red" , 'GS', 'BJK', 'TS', "Red", "Blue", "Yellow"]
value = mix.indexOf("Red");  
console.log(value);
output:
1 //sonuç 1 çıktı çünkü sayı belirtilmediği için ilk sonucu verdi.

örnek :
// örnek :
const mix = ['FB', "Red" , 'GS', 'BJK', 'TS', "Red", "Blue", "Yellow"]
value = mix.indexOf("Red",2);  // aramaya 2 dan başla demektir
console.log(value);
// output : 
output:
5 //sonuç 5 çıktı çünkü 2den irtibaen aramaya başla dendi.


// LASTINDEX OF METHODU- ARAMAYA SONDAN BAŞLAR

// örnek :
var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
var x = colors.lastIndexOf("Green");
console.log(x);
// output : 
5

// örnek :
var colors = ["Red" ,"Yellow", "Green", "Blue", "Pink", "Green"];
var x = colors.lastIndexOf("Green", 4);
console.log(x);
// output : 
2 // Sonuçiki çıktı çünkü aramaya 4den başlanması söylendi. 4. değerden başladı ve geriye doğru giderek ilk değeri yazdırdı.

// PUSH -SONUNA EKLEME YAPMA 

let value;
const numbers = [1,2,3,4,52,6,71,8,9]
value1 = numbers.push(20);
console.log(numbers)
output:
(10) [1, 2, 3, 4, 52, 6, 71, 8, 9, 20]


// POP SONUNDAN DEĞER ÇIKARMA

örnek :
let value;
const colors = ["Red", "Blue", "Yellow"]; 
value1 = colors.pop(1); // Burada içini boş da bıraksan içine sayı da yazsan sadece en sondaki değeri atıyor.
console.log(colors)
sonuç : 
(2) ['Red', 'Blue']


// UNSHİFT BAŞINA EKLEME YAPMA - 

let value;
const numbers = [1,2,3,4,52,6,71,8,9]
value1 = numbers.unshift(23);
console.log(numbers)
output :
(10) [23, 1, 2, 3, 4, 52, 6, 71, 8, 9]


// SHIFT - BAŞINDAN DEĞER ÇIKARMA

örnek:
let value;
const colors = ["Red", "Blue", "Yellow"]; 
value1 = colors.shift(1); // Burada içini boş da bıraksan içine sayı da yazsan sadece en başdaki değeri atıyor.
console.log(colors)
sonuç : 
(2) ['Blue', 'Yellow']

//CONCAT - BİRLEŞTİRMEK İÇİN

örnek: // bu örnek de iki liste birleştiliyor
var dogs = ["Bulldog" , "Beagle" , "Rottweiler"];
var cats = ["Ragdoll" , "Sphynx" , "Birman"];
var pets = dogs.concat(cats); 
console.log (pets);
Output :
(6) ['Bulldog', 'Beagle', 'Rottweiler', 'Ragdoll', 'Sphynx', 'Birman']

örnek: // bu örnek de üçliste birleştiliyor
var dogs = ["Bulldog" , "Beagle" , "Rottweiler"];
var cats = ["Ragdoll" , "Sphynx" , "Birman"];
var birds = ["Parrot" , "Owl" , "Finch"];
var pets2 = dogs.concat(cats, birds); 
console.log(pets2);
output :
(9) ['Bulldog', 'Beagle', 'Rottweiler', 'Ragdoll', 'Sphynx', 'Birman', 'Parrot', 'Owl', 'Finch']

// SPLICE - İKİ DEĞER ARASINDAN ATMA

örnek :
const pets = ['Bulldog', 'Beagle', 'Rottweiler', 'Ragdoll', 'Sphynx', 'Birman']
pets.splice(0,2);  // 0 dan başlailk 2 değeri listeden çıkar demektir
console.log(pets);
output : 
(4) ['Rottweiler', 'Ragdoll', 'Sphynx', 'Birman']

örnek :
const teams = ['FB', 'GS', 'BJK', 'TS']
teams.splice(1,2, 'DEN', 'GÖZ');  // 1 dan başla ilk 2 değeri çıkar ve diğer değerleri ekle
console.log(teams);
output : 
(4) ['FB', 'DEN', 'GÖZ', 'TS']

// SLICE - BELİRLİ YERLERİ LİSTEDEN AYIRMA
//birinci parametre (1) tespit başlangıç yeni dizinin konumunu. - İkinci parametre (3), yeni dizinin bitiş ( dahil olmayan son ) konumunu belirler.

örnek :
const teams = ['FB', 'GS', 'BJK', 'TS']
newTeams= teams.slice(1,3);  // 1 dan başla 3 e kadar ayır başka bir liste yap demektir.
console.log(teams);
console.log(newTeams);
output : 
(4) ['FB', 'GS', 'BJK', 'TS']
(2) ['GS', 'BJK']


//SORT - LİSTEYİ ALFABETİK SIRLAMA

var pets = ['Bulldog', 'Beagle', 'Rottweiler', 'Ragdoll', 'Sphynx', 'Birman', 'Parrot', 'Owl', 'Finch']
var pets2 = pets.sort(); 
console.log(pets2);
output :
(9) ['Beagle', 'Birman', 'Bulldog', 'Finch', 'Owl', 'Parrot', 'Ragdoll', 'Rottweiler', 'Sphynx']

örnek:
const numbers = [12,6,3,7,2,8,,32,9]
var num2 = numbers.sort(); 
console.log(num2);
output :
(9) [12, 2, 3, 32, 6, 7, 8, 9, …] // burada da sıraya göre sıralar ama ilk harflerine bakar sıralamada. Sayılar dizge olarak sıralanırsa, "25" "100" den büyüktür, çünkü "2" "1" den büyüktür. Bu nedenle, sort()yöntem sayıları sıralarken yanlış sonuç üretecektir .

// REVERSE - LİSTEYİ TERS ÇEVİRME

örnek :
const numbers = [1,2,3,4,5]
var num2 = numbers.reverse(); 
console.log(num2);
output : 
(5) [5, 4, 3, 2, 1]
