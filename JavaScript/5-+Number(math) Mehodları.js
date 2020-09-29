// NUMBER METHODS

// MATH OBJESİ. Bu obje ile Matematik içindeki değerleri çağırabiliriz. örnek :mat = Math.max(10,-2,150,2315,32)

let mat;

mat = Math.PI;
mat = Math.E;
mat = Math.round(3.6) // bu değerleri yukarı yuvarlar
mat = Math.round(3.4) // bu değerleri aşağı yuvarlar

mat = Math.ceil(3.9) // bu değerleri her türlü yukarı yuvarlar
mat = Math.ceil(3.4) // bu değerleri her türlü yukarı yuvarlar

mat = Math.floor(3.9) // bu değerleri her türlü aşağı yuvarlar
mat = Math.floor(3.4) // bu değerleri her türlü aşağı yuvarlar

mat = Math.sqrt(16) // bu karekökünü alır

mat = Math.abs(-10) // Mutlak değerini alır

mat = Math.pow(4,3) // Üst almamızı sağlar. 4 üzeri 3 demek gibi.

mat = Math.max(10,-2,150,2315,32) // En yüksek sayıyı verir
mat = Math.min(10,-2,150,2315,32) // En düşük sayıyı verir

mat = Math.random()// Rastgele sayı üretme metodudur. burada default halinde 0 ile 1 arasında sayı üretir
mat = Math.random() * 100 // burada 0 ile 100 arasında sayı üretit
mat = Math.floor(Math.random() * 100) // ürettiğimiz sayıyı int yapmak için. bu aşağı yuvarlar
mat = Math.ceil(Math.random() * 100) // ürettiğimiz sayıyı int yapmak için. bu yukarı yuvarlar

console.log(mat)


----



// parseInt() Metodu => kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür. parseInt(), veri türü ne olursa olsun girilen değeri number veri türüne dönüştürecektir


örnek :
value = parseInt("3.14") 
console.log(value)
console.log( typeof value)
çıktı : 
3
number


örnek :
var sayi = 78.5643;
document.write("Sayı Değeri: " + sayi + "<br>");
document.write("Veri Türü : " + typeof sayi + "<br><br>");
çıktı :
Sayı Değeri: 78.5643
Veri Türü : number

var tamsayi = parseInt(sayi);
document.write("Tam Sayı Değeri : " + tamsayi + "<br>");
document.write("Tam Sayı Veri Türü : " + typeof tamsayi + "<br><br><hr>");
çıktı :
Tam Sayı Değeri : 78
Tam Sayı Veri Türü : number
        
// Math.trunc() metodu, kendisine verilen ondalıklı sayının ondalık kısmını kaldırır. Math.trunc(); şeklinde kullanılır. Kısaca javascript de herhangi bir sayının ondalık kısmını atmaya yarar.

örnek :
var sayi = 13.2;
		
console.log("Orjinal Sayı Değeri: " + sayi);
var ondaliksiz = Math.trunc(sayi);
console.log("Ondalıksız  Sayı Değeri : " + ondaliksiz);
çıktı :

Orjinal Sayı Değeri: 13.2
Ondalıksız  Sayı Değeri : 13

// parseFloat() Metodu
// parseFloat() metodu, kendisine parametre olarak verilen değerlere göre verilen değerleri ondalıklı sayı haline dönüştürür ve yeni bir değişken oluşturarak geri döndürür. Artı, eksi, nokta haricinde bir değer gördüğünde işlemi durdurur. Girilen değerin veri türü ne olursa olsun number veri türüne dönüşür. Ancak girilen değer kabul ettiği değerler haricinde olursa NaN sonucunu verir.


örnek :
value = parseFloat("3.14")
console.log(value)
console.log( typeof value)
çıktı : 
3.14
number

örnek :

var sayi1	=	22;
var sayi2	=	"22";
var sayi3	=	-30;
var sayi4	=	"+239";
var sayi5	=	"Sayı 5";
var sayi6	=	"5 6 7 8 9";
var sayi7	=	13.27;

console.log(parseFloat(sayi1));
console.log(parseFloat(sayi2));
console.log(parseFloat(sayi3));
console.log(parseFloat(sayi4));
console.log(parseFloat(sayi5));
console.log(parseFloat(sayi6));
console.log(parseFloat(sayi7));
çıktı :
22
22
-30
239
NaN5
13.27



// round() Metodu 
// round() metodu, kendisine en yakın tam sayıyı kontrol ederek aşağı ya da yukarı yuvarlama yapar ve değeri geri döndürür. Math.round(sayidegeri); şeklinde kullanılır.



var sayi = 13.2;
console.log("Orjinal Sayı Değeri: " + sayi);
var yuvarla = Math.round(sayi);
console.log("Yuvarlanmış  Sayı Değeri : " + yuvarla);
çıktı :
Orjinal Sayı Değeri: 13.2
Yuvarlanmış  Sayı Değeri : 13



sayi2 = 41.9;
console.log("Orjinal Sayı Değeri: " + sayi2);
var yuvarla2 = Math.round(sayi2);
console.log("Yuvarlanmış  Sayı Değeri : " + yuvarla2);
çıktı :
Orjinal Sayı Değeri: 41.9
Yuvarlanmış  Sayı Değeri : 42



sayi3 = 29.5;
console.log("Orjinal Sayı Değeri: " + sayi3 );
var yuvarla3 = Math.round(sayi3);
console.log("Yuvarlanmış  Sayı Değeri : " + yuvarla3);
çıktı :
Orjinal Sayı Değeri: 29.5
Yuvarlanmış  Sayı Değeri : 30

// toFixed() metodu, kendisine parametre olarak verilen sayının ondalık hane sayısının belirlenmesi için kullanılır. Küsurat olarak kaç hane gösterilmesi isteniyorsa sayı ile belirlenir. Metot yeni bir değişken oluşturup sonucu geri döndürür.

örnek :
var uzunsayi = 4.12345678;
console.log("Sayının normal hali: " + uzunsayi);
var kisasayi = uzunsayi.toFixed(2);
console.log("Sayının toFixed() ile küsürati azaltılmış hali : " + kisasayi);
çıktı :
Sayının normal hali: 4.12345678
Sayının toFixed() ile küsürati azaltılmış hali : 4.12

// Date() Metodu kullanıldığı değişken içine tarih ve saat bilgilerini depolayarak değeri geri döndürür. new Date(); şeklinde oluşturulur. Metot ile tarihe etki edilebilir.

var zaman = new Date();
document.write(zaman + "<hr>");
çıktı :
Sun Sep 27 2020 11:50:08 GMT+0200 (Orta Avrupa Yaz Saati)


// yıl, ay, gün, saat, dakika, saniye, milisaniye
var zaman1 = new Date(2016,08,13,22,34,56,77); 
document.write(zaman1 + "<hr>");
çıktı :
Tue Sep 13 2016 22:34:56 GMT+0200 (Orta Avrupa Yaz Saati)

// yazı ile belirtilebilir
var zaman2 = new Date("July 09, 2005 14:23:54"); 
document.write(zaman2);
çıktı :
Sat Jul 09 2005 14:23:54 GMT+0200 (Orta Avrupa Yaz Saati)




// abs() Metodu : kendisine verilen sayı değerinin mutlak sayı değerini bulur. Math.abs(); şeklinde kullanılır.



var sayibir = 23;
var sayiiki = -23;
		
var sayibirmutlakdeger = Math.abs(sayibir);
var sayiikimutlakdeger = Math.abs(sayiiki);
		
document.write("Sayı 1 Orjinal Değer : " + sayibir + "<br>");
document.write("Sayı 1 değerinin mutlak değeri : " + sayibirmutlakdeger + "<hr>");
çıktı :
Sayı 1 Orjinal Değer : 23
Sayı 1 değerinin mutlak değeri : 23

document.write("Sayı 2 Orjinal Değer : " + sayiiki + "<br>");
document.write("Sayı 2 değerinin mutlak değeri : " + sayiikimutlakdeger + "<br>");
çıktı :
Sayı 2 Orjinal Değer : -23
Sayı 2 değerinin mutlak değeri : 23


// pow() metodu, kendisine verilen iki değerin üssünü bulur. Math.pow(5, 3); şeklinde kullanılır. Burada yapacağı işlem 5*5*5 işlemidir. Yani sonuç olarak 125 dönecektir.

örnek :
var hesapla = Math.pow(5, 3);
		
document.write("Hesaplama Sonucu : " + hesapla);
document.write("<hr>");
çıktı :
Hesaplama Sonucu : 125
		

// max() metodu, verilen sayı değerlerinin en büyüğünü bulur. Math.max(deger1, deger2, deger3); şeklinde kullanılır.

var deger1	=	-23;
var deger2	=	0;
var deger3	=	5;
var deger4	=	9;
var deger5	=	23;
var bul		= Math.max(deger1, deger2, deger3, deger4, deger5);
document.write("En Büyük Değer : " + bul);
çıktı :
En Büyük Değer : 23


// min() metodu, kendisine verilen sayı değerlerinin en küçüğünü bulur. Math.min(deger1, deger2, deger3); şeklinde kullanılır.

var deger1	=	-23;
var deger2	=	0;
var deger3	=	5;
var deger4	=	9;
var deger5	=	23;
var bul		= Math.min(deger1, deger2, deger3, deger4, deger5);
document.write("En Küçük Değer : " + bul);
çıktı :
En Küçük Değer : -23


// random() metodu, 0 ile 1 arasında rastgele sayı üretir. Math.random(); şeklinde kullanılır.

var uret =  Math.random();
document.write("Üretilen Sayı Değeri: " + uret);
çıktı :
her seferinde farklı sonuç verir.

mat = Math.random()// Rastgele sayı üretme metodudur. burada default halinde 0 ile 1 arasında sayı üretir
mat = Math.random() * 100 // burada 0 ile 100 arasında sayı üretit
mat = Math.floor(Math.random() * 100) // ürettiğimiz sayıyı int yapmak için. bu aşağı yuvarlar
mat = Math.ceil(Math.random() * 100) // ürettiğimiz sayıyı int yapmak için. bu yukarı yuvarlar



// floor() metodu, verilen ondalıklı sayıyı aşağı yuvarlar. ceil() metodunun tam tersini yapar. Math.floor(sayidegeri); şeklinde kullanılır. Sayının ondalık değeri ne olursa olsun aşağı yuvarlama işlemini yapar.

var sayi = 13.2;
document.write("Orjinal Sayı Değeri: " + sayi + "<br>");
var yuvarla = Math.floor(sayi);
document.write("Aşağı Yuvarlanmış  Sayı Değeri : " + yuvarla + "<hr>");
çıktı :
Orjinal Sayı Değeri: 13.2
Aşağı Yuvarlanmış Sayı Değeri : 13	
		
sayi2 = 41.9;
document.write("Orjinal Sayı Değeri: " + sayi2 + "<br>");
var yuvarla2 = Math.floor(sayi2);
document.write("Aşağı Yuvarlanmış  Sayı Değeri : " + yuvarla2 + "<hr>");
çıktı :
Orjinal Sayı Değeri: 41.9
Aşağı Yuvarlanmış Sayı Değeri : 41


// ceil() metodu, verilen ondalıklı sayıyı yukarı yuvarlar. Math.ceil(sayidegeri); şeklinde kullanılır. Sayının ondalık değeri ne olursa olsun yuvarlama işlemini yapar.


var sayi = 13.2;
document.write("Orjinal Sayı Değeri: " + sayi + "<br>");
var yuvarla = Math.ceil(sayi);
document.write("Yukarı Yuvarlanmış  Sayı Değeri : " + yuvarla + "<hr>");
çıktı :
Orjinal Sayı Değeri: 13.2
Aşağı Yuvarlanmış Sayı Değeri : 14
		
sayi2 = 41.9;
document.write("Orjinal Sayı Değeri: " + sayi2 + "<br>");
var yuvarla2 = Math.ceil(sayi2);
document.write("Yukarı Yuvarlanmış  Sayı Değeri : " + yuvarla2 + "<hr>");
çıktı :
Orjinal Sayı Değeri: 41.9
Aşağı Yuvarlanmış Sayı Değeri : 41-2


// isInteger(); parametre olarak verilen değerin tamsayı olup olmadığını kontrol eder. boolean değer döndürür 
		
var deger = Number.isInteger(0);
document.write("// Girilen Değer : 0 - Dönen Değer : " + deger + "<br>");
// Girilen Değer : 0 - Dönen Değer : true

var deger = Number.isInteger(2);
document.write("// Girilen Değer : 2 - Dönen Değer : " + deger + "<br>");
// Girilen Değer : 2 - Dönen Değer : true

var deger = Number.isInteger(-5);
document.write("// Girilen Değer : -5 - Dönen Değer : " + deger + "<br>");
// Girilen Değer : -5 - Dönen Değer : true

var deger = Number.isInteger(0,6);
document.write("// Girilen Değer : 0,6 - Dönen Değer : " + deger + "<br>");
// Girilen Değer : 0,6 - Dönen Değer : true (çünkü buarada iki farklı sayı değeri var)

document.write("// Girilen Değer : 0.6 - Dönen Değer : " + deger + "<br>");
// Girilen Değer : 0.6 - Dönen Değer : false  (çünkü arada nokta var yani tam sayı değil.)



// filter() metodu, parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür. Bu sayede çeşitli filtrelemeler yapmanıza olanak sağlar. Yaptığı iş oldukça gerekli olan bir iş, kullanımda da bir o kadar basit. Bu arada, filter() metodu boolean değer döndürür.

örnek :
var dizi = [
    {meyve: "elma", mevsim: "yaz"},
    {meyve: "armut", mevsim: "yaz"},
    {meyve: "mandalina", mevsim: "kış"},
    {meyve: "portakal", mevsim: "kış"},
    {meyve: "çilek", mevsim: "yaz"},
    {meyve: "erik", mevsim: "yaz"},
    {meyve: "üzüm", mevsim: "kış"}
];

// filter() ile yaz meyvelerini filtreleyelim

var yazmeyveleri = dizi.filter(function(elmn){
    if(elmn.mevsim == "yaz"){
        return true;
    }
});

yazmeyveleri.forEach(function(sezonluk){
    document.write(sezonluk.meyve);
    document.write("<br>");
});
çıktı :
elma
armut
çilek
erik



