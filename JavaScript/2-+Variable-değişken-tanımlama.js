// VARİABLES - DEĞİŞKEN TANIMLAMA

// Değişken tanımlama 3 şekilde olur
// 1- Var (Artık kullanılmıyor)
// 2- let (tekrar tekrar verilebiliyor)
// 3- const (bir kere verilebiliyor)
// her seferinde ayrı ayrı variable tanımlanır ise o zaman sayfa çalışma yavaşlanır. çünkü bellekte yer alır.

/* 
Değişken tanımlama da ;
➤  sayı ile başlayamazsınız
➤  arada boşluk olamaz
➤  tire (-) kullanamazsınız. ama (_) alt çizgi kullanabilirsiniz
➤  ! vey ? gibi özel karakterler kullanılamaz. tek istisnası $ işaretidir.
➤  değişkende ikinci birişik kelimeye büyük harf ile başlamak iyi olur.
➤  satırdan sonra nıktalı virgül koymasanız da olur ama koymak daha iyi olur.
➤  değişken tanımlama da while, false, boolean, class vb reserve edilmiş değerler kullanılamaz. ama başına veya sonuna bir ek ekleyerek kullanabilirsiniz. Örn : isFalse vb....
*/

// 1- VAR


var a = 11 ;
var b = 22 ;
var c = 33 ;
console.log(a,b,c);

// veya şu şekilde de olabilir.

var a = 
a = 11
var b = 
b = 22
var c = 
c = 33
console.log(a,b,c);

// 2- LET

let namee = "Talha"
console.log(namee)
// ÖNEMLİ : LET de bu şekilde daha sonra aynı değişkene farklı değer atayabiliyoruz. Ama CONST da mümkün değil
namee =  "yusuf"
console.log(namee)

// 3- CONST

const vame = "Talha"
console.log(vame)
// const da bu şekilde daha sonra aynı değişkene farklı değer atayamayız. alttaki sorgu hata verir
// vame =  "yusuf"
// console.log(namee)

// ama const da ARRAY lara değer eklenebilyor.

const num = [1,2,3,4,5]
console.log(num)

// const num = 1
// console.log(num)
// üstteki sorgu hata verir ama biz listeye ekleme yapabiliriz.

num.push(6);
console.log(num)


// EXERCİSES : 


// var name = "joseph";
// var name = "murat";

// console.log(name)


// var a = 20;
// var b = 10;
// var c = 40;
// console.log(a,b,c);

// console.log("my first commit")

// var myName = "Talha";
// console.log(myName)

// var mySurname = "Talha"
// console.log(mySurname)

// var mySchool = "Odtü Müh. Fak"
// console.log(mySchool)

// var false = "talha"
// console.log(false)
// bu kod hata verir çünkü false diye tanımlama olmaz

// var a = 10;
// {
//     let b = 3;
//     burdaki LET tanımlaması sadece burası için geçerlidir. daha hızlı olsun sürekli çalışmasın arka da diye bir seferlik kullanılıyor.
// }

// console.log("a = " + a)
// console.log("b = " + b)

// const x = 5;
// x = 7;
// burada da hata verir. çünkü yukarda X'e 5 atadık. const ile atadığmız için bir daha 7 değerini atamayacağız.

// console.log("x = " + x)


// Uncaught SyntaxError: Unexpected token 'false' ----> bu hata isimlendirme hatasıdır. 