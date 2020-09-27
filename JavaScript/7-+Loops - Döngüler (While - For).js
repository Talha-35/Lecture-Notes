// LOOPS
// tekrar eden görevleri gerçekleştirmenin hızlı ve kolay bir yolunu sağlar
// Aşağıdaki döngü ifadeleri ,bunu gerçekleştirmek için JavaScript tarafından verilmiştir:
// ● while statement
// ● for statement
// ● for…in statement
// ● for…of statement
// ● do..while statement
// ● break statement
// ● continue statement




---------------------------------------------------------------------------------------------------------------


// FOR STATEMENT 

örnek : //bu örnek de normal birer arttırark çıktı ama mevcuttur.
for (let i = 0 ; i <= 3 ; i++ ) {
  console.log ("i : " , i);
}
çıktı :
i :  0
i :  1
i :  2
i :  3


örnek : //bu örnek de normal ikişer arttırark çıktı ama mevcuttur.
for (let i = 0 ; i <= 4 ; i +=2 ) {
  console.log ("i : " , i);
}
çıktı :
i :  0
i :  2
i :  4


örnek : //bu örnek de toplama ile alakalı örnek vardır.
var sum=0;
 for (var i = 0; i < 6; i++) {
  sum += i;
}
console.log ("The total is " + sum);
Output :
The total is 15


örnek : //bu örnek de çarpma ile alakalı örnek vardır. sum ve içerdeki i değerini bir yapmak gerekiyoryoksa sonuç 0 çıkar
var sum=1;
 for (var i = 1; i < 6; i++) {
  sum *= i;
}
console.log ("The total is " + sum);
çıktı :
The total is 120

örnek : 
let myString = "Clarusway"
 for (var i = 0; i < 9; i++) { // bu şekilde de yapılabilir  for (var i = 0; i < myString.length; i++)
  console.log (` ${ i + 1 }. harf ${myString[i]}`);
}
çıktı :
 1. harf C
 2. harf l
 3. harf a
 4. harf r
 5. harf u
 6. harf s
 7. harf w
 8. harf a
 9. harf y



 örnek : // bu örneğin aynısın aşağıda while ile de yaptık
 city = ["izmir", "berlin", "tokyo"];
i = 0;

for (let i = 0; i < city.length; i++) {
    console.log("şehir adı :" , city[i]);
}
çıktı :
şehir adı : izmir
şehir adı : berlin
şehir adı : tokyo


---------------------------------------------------------------------------------------------------------------



// FOREACH

örnek : // yukarıdaki örneğin aynısını for Each ile yazıyorum şimdi

city = ["izmir", "berlin", "tokyo"];
city.forEach(function(i) {
  console.log("şehir adı :" , i);
});
çıktı :
şehir adı : izmir
şehir adı : berlin
şehir adı : tokyo

// const numbers = [1,3,2,45,"ali",65,77,99,]

// numbers.forEach((number,index) => {
//     console.log("numbers :",number, "index :", index);
// }
// )

// üstteki ve alttaki yazım aynıdır sadece aşağıdaki daha uzun yazımıdır.

// numbers.forEach(logNumbers) ;

//  function logNumbers(number) {
//     console.log("numbers :",number)
//  } 

---------------------------------------------------------------------------------------------------------------


// MAP FONKSİYONU

// çok sık kullanılıyor.
// Foreach den farkı map de geri ye bir return etme olayı vardır. mesela liste içindeki herşeyi 2 ile çarp  dersin map de çarpar geri döner ama foreach de dönmez.

// const numbers = [1,3,2,45,"ali",65,77,99,]

// newNumbers = numbers.map((num) => {
//     return num * 2
// });

// console.log(newNumbers);

const users = [
  {name : "mustafa", age:25 },
  {name : "ayşe", age:35 },
  {name : "sophia", age:31 }
];

const names = users.map(function(i){
  return i.name;
})
çıktı : 
(3) ['mustafa', 'ayşe', 'sophia']

// ================================================ 🔥


// << MAP vs FOREACH farkı >>


// const users = [
//     { id: 0, name: "Jack", age: 20 },
//     { id: 1, name: "Milton", age: 34 },
//     { id: 2, name: "Arthur", age: 76 },
//     { id: 3, name: "Mercedes", age: 16 },
//     { id: 4, name: "Dave", age: 76 },
//   ];
//   // => forEach
//   const ageArray_1 = [];
//   users.forEach((us) => {
//     ageArray_1.push(us.age * 2);
//   });
//   console.log(ageArray_1);
//   // => map
//   const ageArray_2 = users.map((us) => us.age * 2);
//   console.log(ageArray_2);
// ================================================ 🔥


---------------------------------------------------------------------------------------------------------------



// FOR IN DÖNGÜSÜ

örnek:
const user = {
  name : "mustafa", 
  age:25 
};

for (let key in user){
  console.log(key, user[key],);
}
çıktı:
name mustafa
age 25



---------------------------------------------------------------------------------------------------------------



// WHILE STATEMENT 
// Siz kendiniz bir condition belirliyorsunuz. bu durum True olduğu sürece bu durum çalışır.

örnek : 
var i = 0;
var sum = 0;
while (i < 6) {
  var sum = sum + i;
  i++;
}
console.log ("The total is: " + sum);
Output:
Toplam 15


örnek :
city = ["izmir", "berlin", "tokyo"];
i = 0;

while (i < i.length) {
    console.log("şehir adı :" + city[i]);
    i++;
}
çıktı :
şehir adı : izmir
şehir adı : berlin
şehir adı : tokyo


---------------------------------------------------------------------------------------------------------------



// DO...WHILE STATEMENT Temel farkı : bir kere dahi olsa sonuç veriyor.  

örnek : 
var i = 5;
var sum=0;
do { //burda önce do kısmını yazacak ondan sonra while kısmına geçecektir. o yüzden ilk sorgu her halükarda çıkacak
  var sum = sum + i;
  i++;
} 
while (i<6);
console.log ("The total is " + sum);
Output:
Toplam 6



---------------------------------------------------------------------------------------------------------------




// BREAK STATEMENT , 

Example :
var i = 0;
while (i < 10) {
  if (i === 3) {
    break;
  }
  console.log(i)
  i = i + 1;
}
console.log(i);
Output :
 0
 1
 2
 3


 ---------------------------------------------------------------------------------------------------------------




// CONTINUE STATEMENT

Example :
for (var i = 4; i < 8; i++) {
  if (i ===5) {
    continue;
  }
  console.log(i);
}
Output :
4
6
7

// while il birlikte continue kullanmak sonsuz döngüye sokar ona dikkat etmek lazım. Mesela aşağıdaki örnek de eğer conitune dan önce i yib ir arttırmaz  isek o zaman i  e geldiğinde baa döner böylece sürekli aynısını yapar.

örnek : 
i = 0;

while (i < 10) {
    if (i === 3 || i === 5) {
      i++; // işte buradaki arrttırma işlemi bizi sonsuz döngğüden kurtatrır
        continue
    }
    console.log("i :" , i);
    i++;

}
çıktı :
conitune dan önce i yib ir arttırmaz  isek o zaman sonsuz döngü olur.