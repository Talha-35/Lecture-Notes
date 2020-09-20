// VERİ TİPLERİ


/* Türkçe karakter kullanmamakta fayda var. ingilizce kullanmak lazım. 
 çünkü daha sonra birisi sizin yazdığınız kodu anlayamayabiliyor. */
 /* bu şekilde çok lu yorum satırı yazılabilir */
//  bu şekilde de tek satırlı yorum yazılabilir
// cümlelerin sonu ; ile bitse iyi olur ama bitmese de çalışır.
// kodları satır satır yazıyoruz
// uzun metinler çift tırnak kısa veriler tek tırnak yapılıyor. ama olmasa da olur

var a = 11 ;
var b = 22  ;
var c = 33  ;
console.log(a,b,c);
console.log(a+b+c);

// JS iki tür veri Tipi var.   1-Primitive  2- Referance Veri Tipleri (JS de object olarak gözüken tiplerin tamamı referance veri tipidir )
// farkı : primitive sadece o değer için geçerlidir. ama referance ise o bellekteki yerine gider ve değer güncellenir

// 1-PRİMİTİVE 

// a- NUMBER Veri Tipi
// JS de float vs yoktur sadece number vardır

var a = 11 ; 
var b = 3.14 ;
console.log(a,b);
console.log(typeof(a));
çıktısı : 
11 3.14
number


örnek : 

var myNumber = -10;
console.log("myNumber: " + myNumber);
çıktı : 
myNumber: -10

örnek : 

const x = 123
console.log(` x : ${x} \n typeof : ${x}`)
çıktısı : 
x : 123 
typeof : 123


// b- STRING Veri Tipi

// Uzun Kod Satırlarını Kırmak
// ➤ En iyi okunabilirlik için, programcılar genellikle 80 karakterden uzun kod satırlarından kaçınmayı severler.
// ➤ Bir JavaScript ifadesi bir satıra sığmazsa, onu kırmak için en iyi yer bir operatörden sonrasıdır.

var name = "talha" ;
var talha = "yakışıklı" ; 
var kamil = "cool"  ;

örnek : 

console.log (typeof(name));
// name kısmını paranteze almasak da olur
console.log (typeof name);
console.log (name);
console.log (talha,kamil);
çıktı : 
String
talha
yakışıklı cool

örnek : 

var yaz = "123"
console.log (typeof(yaz));
console.log (yaz);
çıktı : 
String
123

// ➤ Dize içinde tırnak kullanmamız gerekirse, ters eğik çizgi (\) kaçış karakterini kullanabiliriz.

var text = "He said, \"I am a new programmer.\"";
console.log (text);
çıktı : He said, "I am a new programmer."

// c- BOOLEAN Veri Tipi
// true veya false olarak sonuç verir. küçük harf ile yazmak lazım.

var a = true ;
var b= false; // büyük harf ile yazdığın zaman sonuç çıkmıyor
console.log(a) ;
console.log(b) ;
console.log(typeof a) ;

örnek :

const myBool = 8 > 2
const myCool = 1>8
console.log(myBool)
console.log(myCool)
console.log(typeof myBool)
console.log(typeof myCool)
çıktı : 
true
false
Boolean
Boolean

örnek : 

const myBool3 = 12 == 12;
const myBool4 = 12 == 13;
// eşit olup olmadığını anlamak için 2 eşittir kullanılır. 
console.log(myBool3)
console.log(myBool4)
console.log(typeof myBool3)
console.log(typeof myBool4)

örnek : 

const myBool3 = 12;
const myBool4 = "12";
const myBool = myBool3 === myBool4
// burada 3 tane eşittir yan yana kullanılmış. bu aynı zaman da veri tipi de eşit midir değil midir onu da  kontrol eder. mesela bunun sonucu false çıkar . Ama burada iki eşittir olsa idi True çıkacaktı.
console.log(myBool)

örnek :

myVar_1 = Boolean(0) ; 
myVar_2 = Boolean("") ;
myVar_3 = Boolean(-0) ;
myVar_4 = null ;
var s ;
// bu çıktıların tamamı false çıkar
console.log("x : " + myVar_1)
console.log("x : " + myVar_2)
console.log("x : " + myVar_3)
console.log("x : " + Boolean(myVar_4) )
console.log("x : " + Boolean(s))

örnek : 
Boolean (3 > 2);     //return true
Boolean (2 < 3);     //return true
Boolean (2 > 3);     //return false 
Boolean (2 == 3);    //return false 

örnek:
Boolean("Hello World");
Boolean(5);
Boolean(-5);
Boolean("false");
Boolean(3.14 + 8);   //All of these values return true

öörnek : 
Boolean("");
Boolean(0);
Boolean(-0);
Boolean(null);
var x;
Boolean(x);   //All of these values return false

// d- NULL

var a = null ;
console.log(a) ;
console.log(typeof(a)); // type olarak object çıkar. bu  bir bug'dır. esasında bu bir hata gibi. Null hiçbirşey taşımadığını belirten bir değerdir.

// e- UNDEFİNED
// ➤ anlamı"değer atanmamış" demektir.
// bu bir hatadır. ➤ Bir değişken bildirilmiş ancak atanmamışsa, değeri tanımsızdır 

var a = 
console.log(a) ;
console.log(typeof(a)); // burda null dan farkı. hiç bir değer atanmamış demektir.


// -------------------------------------

var numbers = [1,2,3,4,5,6,7,8,9]
console.log (numbers[3])

var names = "ahmet" 
console.log (names[0])


// 2- REFERANCE Veri Tipleri 

var person = {
    name : "talha",
    age : 35
}
console.log(person) ;
console.log(typeof person) ;

var date = new Date() ;
console.log(date);
console.log(typeof date) ;

var merhaba = function(){
    console.log("merhaba");
}

console.log(merhaba);
console.log(typeof merhaba) ;




console.warn("bu bir uyarıdır.") // bu şekilde hata veya ikaz yarısı yaptırılabilir.
console.error("bu sayfa bulunamadı") // bu şekilde hata veya ikaz yarısı yaptırılabilir.
// console.log(clear); // bu şekilde console temizlenebilir

// 3- EKSTRA

örnek : 

const myValue1 = 10;
const myValue2 = "7";
console.log(`myValue1 + myvalue2 : ${myValue1 + myValue2}`)
// burada sonuç string olarak çıkar ve yan yana yazar
console.log(`myValue1 + myvalue2 : ${myValue1 - myValue2}`)
// burada normal bir matematik işlemi yapıuyor
çıktı
myValue1 + myvalue2 : 107 typeof : String
myValue1 + myvalue2 : 3    typeof : Number

// GENEL BİR ÖRNEK : 

örnek : 
console.log ("1. " + typeof 0);
console.log ("2. " + typeof (3,14));
console.log ("3. " + typeof "hello");
console.log ("4. " + typeof (7+8));
console.log ("5. " + typeof "Oliver");
console.log ("6. " + typeof "");
console.log ("7. " + typeof true);
console.log ("8. " + typeof (3>=2));
var a;    // Value is undefined.
console.log ("9. " + typeof a);
çıktı : 
1.number
2.number
3.string
4.number
5.string
6.string
7.boolean
8.boolean
9.undefined