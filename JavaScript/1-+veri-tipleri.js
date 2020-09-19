// VERİ TİPLERİ


/* Türkçe karakter kullanmamakta fayda var. ingilizce kullanmak lazım. 
 çünkü daha sonra birisi sizin yazdığınız kodu anlayamayabiliyor. */
 /* bu şekilde çok lu yorum satırı yazılabilir */
//  bu şekilde de tek satırlı yorum yazılabilir
// cümlelerin sonu ; ile bitse iyi olur ama bitmese de çalışır.
// kodları satır satır yazıyoruz

var a = 11 ;
var b = 22  ;
var c = 33  ;
console.log(a,b,c);
console.log(a+b+c);

// JS iki tür veri Tipi var.   1-Primitive  2- Referance Veri Tipleri (JS de object olarak gözüken tiplerin tamamı referance veri tipidir )
// farkı : primitive sadece o değer için geçerlidir. ama referance ise o bellekteki yerine gider ve değer güncellenir

// 1-Primitive 
// a- Number Veri Tipi
var a = 11 ; 
var b = 3.14 ;
console.log(a,b);
console.log(typeof(a));

// b- String Veri Tipi

var name = "talha" ;
var talha = "yakışıklı" ; 
var eyüp = "karizma"  ;
var yusuf = "artist"  ;
var kamil = "cool"  ;

console.log (typeof(name));
console.log (name);
console.log (talha,yusuf,eyüp,kamil);

// c- Boolean Veri Tipi

var a = true ;
var b= false; // büyük harf ile yazdığın zaman sonuç çıkmıyor
console.log(a) ;
console.log(b) ;
console.log(typeof a) ;

// d- Null

var a = null ;
console.log(a) ;
console.log(typeof(a)); // type olarak object çıkar. bu  bir bug'dır. esasında bu bir hata gibi. Null hiçbirşey taşımadığını belirten bir değerdir.

// d- Undefined

var a = 
console.log(a) ;
console.log(typeof(a)); // burda null dan farkı. hiç bir değer atanmamış demektir.


// -------------------------------------

var numbers = [1,2,3,4,5,6,7,8,9]
console.log (numbers[3])

var names = "ahmet" 
console.log (names[0])


// 2- Referance Veri Tipleri 

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