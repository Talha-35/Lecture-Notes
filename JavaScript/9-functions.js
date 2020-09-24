// Fonksiyonlar
// ➤ Fonksiyon özelliği, belirli bir görevi gerçekleştirmek için programlanmış bir kod bloğudur.
// ➤ içindeki kodfunction, işlevyalnızca bir satır kodla çağrıldığında çalıştırılacaktır.

-------------------------------------------------------------------

örnek :
function square(number) {
    return number * number;
  }
  
  var res = square(5);   //calling a function
  
  console.log (res);  
çıktı :
25

// Tabi ki bu fonksiyonları yazmanın farklı yolları da vardır.
// Function Expression

örnek :
var square = function (number) {return number * number};
var res = square(6);   //calling a function

console.log (res); 
çıktı :
36



örnek :
var area = function (num1, num2) {return num1 * num2};
var res = area(5, 6);   //calling a function

console.log (res); 
çıktı :
30



-------------------------------------------------------------------


// RETURN KONUSU
// buradaki püf nokta eğer siz return ile fonksiyon kullanmaz iseniz fonk çalışır ama bir sonraki adımm da   kulanılamaz.
// örnek aşağıdadır ilk örnek de NaN yazacak ama ikinci örnek de sonuç öıkacaktır

örnek :
a =2
function square(a) {
    console.log(a*a);
}

b=3
function cube(b) {
    console.log(b*b*b);
}
cube(b)

cube(square(a))
çıktı :
27
4
Nan

örnek :
a = 2
function square(a) {
    return a * a;
}

square(a)

b=3
function cube(b) {
    console.log(b*b*b);
}
cube(b)

cube(square(a))
çıktı :
27
64



-------------------------------------------------------------------


// FUNCTION CONSTRUCTOR () çok fazla tercih edilmiyor. )

örnek :
const square = new Function("number", "return number * number");

console.log(square(3));
çıktı :
9





-------------------------------------------------------------------



// ARROW FUNCTIONS
//ES6 ile geldi. Reacht NAtive de bol bol kullanılacak.
// özelliği daha az kod yazılıyor.

örnek : //tek satır olduğu için süslü paranteze gerek yoktur
const multi = (x, y) => x * y; 
console.log(multi(3, 5));
çıktı :
15


örnek : //tek satır olduğu için ve tek değer olduğu için hiç paranteze gerek yok. 
const multi = x => x * x; 
console.log(multi(5));
çıktı :
25

örnek : //bu da biraz dah uzun yazımı
const bad = (a,b) => {
  console.log("bugün", a , b ,"yerinde");
}
a = "neşem"
b = "çok"

bad(a,b);
çıktı :
bugün neşem çok yerinde





-------------------------------------------------------------------


// es5 ile es6 arasındaki fark :

// ES5  Regular Function
var x = function(x, y) {
    return x * y;
  }
  
  // ES6  Arrow Function
  const x = (x, y) => x * y;


-------------------------------------------------------------------





  // DİĞER ÖRNEKLER 

örnek :
function checkNumbers() {
  for (let i = 0 ; i < 10 ; i++) {
      if (i === 5 )
          return; //burda return yerien break deseydik sadece bu scorp dan çıkacaktı ama return der isek komple fonksiyondan çıkar
      console.log("i : " , i);
  }
  console.log("END");
}
çıktı :
i : 0
i : 1
i : 2
i : 3
i : 4


örnek :
ad = "Talha"
bd = "demir"
function tata(a,b) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    // return a + " " + b;
    console.log(a,b); // yukardaki de aynı sonucu verecektir.
}

console.log(tata(ad,bd));
çıktı :
TALHA DEMIR




-------------------------------------------------------------------


// ÇOK NADİR FONKSİYONLAR

// IIFE (Imediately Invobale Function Expressions)

örnek :
(function () {
  console.log("IIFE !");
})();
çıktı :
IIFE !


örnek :
(function (p1,p2) {
  console.log("Life " + p1 +p2);
})("is ", "life");
çıktı :
Life is life




---------------------------------------------------------------------------------------------------------------

// DİĞER ÖRNEKLER

örnek :
function kayıt(isim,yas) {
  console.log(`Kayıt yaptıran kişinin ismi : ${isim} Yaşı : ${yas}`);
}
kayıt("talha",35)
çıktı :
Kayıt yaptıran kişinin ismi : talha Yaşı : 35

//işte bu noktada eğer fonksiyon  çağrılıriken içinde değer girilmez ise o zaman biz en başta bir tanımlama yapabiliriz. Örnek aşağıdadır


örnek :

çıktı :




örnek :

çıktı :