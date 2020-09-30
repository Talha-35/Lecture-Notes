

let cumle = "ali'nin yaşı : 3434'dür. soyadı ise : "
let langs = "java,Pyton,Para,C++"
let city = ["bursa","izmir", "istanbul","Antakya","rize","Edirne"]
let word = "    boşluk     "
let num1 = 123456
let num2 = [1,2,3,4,5]
let aa = num1.toString()


// 🔥🔥🔥 STRING METHODLARI 🔥🔥🔥


console.log(cumle.length); //uzunluğu ölçmek için
console.log(cumle.concat("Demir'dir")); //ekleme yapmak için
console.log(city[2]); //indexleme yapmak için
console.log(langs.charAt(2)); //indexleme yapmak için(array de çalışmaz)
console.log(langs.includes("java")); //içinde arama yapmak için kullanılır. Sonuç BOOLEON olur
console.log(cumle.toLowerCase()); // Küçük yapma Methodu 
console.log(cumle.toUpperCase()); //Büyük  yapma Methodu 
console.log(langs.indexOf("Py"));// string içinde bir harfin konumunu aramak için kullanılır. Bulamaz ise sonuç -1 çıkar
console.log(langs.search(/py/i)); // Bu da string içinde bir harfin konumunu aramak için kullanılır. İndek of methodundan farkı şudur. /..../i bu şekilde yazar iseniz case sensitive özelliğini devre dışı kalır.
console.log(langs.split(","));// Arraye çevirir.  Mesela bir dosyada eğer virgüller ile ayrılmış eleman var ise parantez içine virgül koyulur böylece tek tek listeye çevirir.
console.log(cumle.split(" ")); //parantez içine normal cümle ise boşluk koyulur  böylece tek tek listeye çevirir. Boşluk koyulmaz ise harf harf listeler.
console.log(aa.split("")); // sayıyı da önce string yapıp sonra listeleme yapabilirsiniz
console.log(langs.replace("java","html")); // Değiştirme yapmak için kullanılır. Array de çalışmaz
console.log(cumle.slice(1,5)); // sadece belirli bir yeri almak için. ilk rakamı alır son rakamı almaz
console.log(cumle.substr(1,5)); // sadece belirli bir yeri almak için. ilk rakamı da son rakamı da alır.
console.log(cumle.substring(1,5)); // sadece belirli bir yeri almak için. ilk rakamı alır son rakamı almaz
console.log(word.trim()); // Etrafındaki boşlukları alır



// 🔥🔥🔥 ARRAY METHODLARI 🔥🔥🔥


let city = ["bursa","izmir", "istanbul","Antakya","rize","Edirne"]
console.log(city);
console.log(city.splice(1,2));  // 1. indisten başla 2 tane sil, silinecek adet sayısı belirtilmezse 1. indisten başlar sona kadar siler.
console.log(city.splice(1,3,"samsun", "bayburt")); // 1. indisten başla 3 tane sil, yerine de samsun ile bayburt u ekle.
console.log(city.unshift("aydın","afyon")) // dizilerin başına eleman ya da elemanlar eklemek için
console.log(city.shift())  // dizilerin başından eleman silmek için
console.log(city.push("aydın")) // dizilerin sonuna eleman ya da elemanlar eklemek için
console.log(city.pop()) // dizilerin sonundan eleman silmek için
console.log(delete city[1]); // delete metodu diğerleri gibi dizinin yapısını değiştirmez. Sadece belirttiğiniz indise ait eleman silinir yani belirttiğiniz indis undefined (tanımsız) olur.
console.log(city);




// 🔥🔥🔥 NUMBER METHODS 🔥🔥🔥

// MATH OBJESİ. Bu obje ile Matematik içindeki değerleri çağırabiliriz.

let mat;

mat = Math.PI;
mat = Math.E;

mat = Math.trunc("6.4") ; // değerin ondalık kısmını siler

mat = Math.round(3.6) // 3.5 ve üstü olur ise değeri yukarı yuvarlar
mat = Math.round(3.5) // 3.5'dan aşağı olur ise  değerleri aşağı yuvarlar

mat = Math.ceil(3.9) // bu değerleri her türlü yukarı yuvarlar
mat = Math.ceil(3.4) // bu değerleri her türlü yukarı yuvarlar

mat = Math.floor(3.9) // bu değerleri her türlü aşağı yuvarlar
mat = Math.floor(3.4) // bu değerleri her türlü aşağı yuvarlar

mat = Math.sqrt(16) // bu karekökünü alır

mat = Math.pow(4,3) // Üst almamızı sağlar. 4 üzeri 3 demek gibi.

mat = Math.abs(-10) // Mutlak değerini alır

mat = Math.max(10,-2,150,2315,32) // En yüksek sayıyı verir
mat = Math.min(10,-2,150,2315,32) // En düşük sayıyı verir

mat = Math.random()// Rastgele sayı üretme metodudur. burada default halinde 0 ile 1 arasında sayı üretir
mat = Math.random() * 100 // burada 0 ile 100 arasında sayı üretit
mat = Math.floor(Math.random() * 100) // ürettiğimiz sayıyı int yapmak için. bu aşağı yuvarlar
mat = Math.ceil(Math.random() * 100) // ürettiğimiz sayıyı int yapmak için. bu yukarı yuvarlar

console.log(mat)




// 🔥🔥🔥 NUMBER ile alakalı diğer Methodlar 🔥🔥🔥

console.log(parseInt("3.14") ); // değerin ondalık kısmını siler veri türü ne olursa olsun girilen değeri number veri türüne dönüştürecektir
console.log(parseFloat("3.14") ); // verilen değeri ondalıklı sayı haline dönüştürür Artı, eksi, nokta haricinde bir değer gördüğünde işlemi durdurur. veri türü ne olursa olsun number veri türüne dönüşür. Ancak girilen değer kabul ettiği değerler haricinde olursa NaN sonucunu verir.
console.log(3.1564.toFixed(2)); // verilen sayının ondalık hane sayısının belirlenmesi için kullanılır. parantez içine ne yazılır ise o kadar hane verir





// 🔥🔥🔥 ISINTEGER(); 🔥🔥🔥

//  parametre olarak verilen değerin tamsayı olup olmadığını kontrol eder. boolean değer döndürür 

console.log(Number.isInteger(0)); //  ,=> true
console.log(Number.isInteger(15)); //  ,=> true
console.log(Number.isInteger(-15)); //  ,=> true
console.log(Number.isInteger(0.6));  //   ,=> false (çünkü arada nokta var yani tam sayı değil.)
console.log(Number.isInteger(0,6,6,5,8,9,8,9,)); //  => true   (çünkü burada iki farklı sayı değeri var)




// 🔥🔥🔥 DATE 🔥🔥🔥

console.log(new Date()); // Date() Metodu kullanıldığı değişken içine tarih ve saat bilgilerini depolayarak değeri geri döndürür. new Date(); şeklinde oluşturulur. Metot ile tarihe etki edilebilir.
console.log(new Date(2016,08,13,22,34,56,77)); // yıl, ay, gün, saat, dakika, saniye, milisaniye... bu şekilde kendimiz de yazabiliriz.
console.log(new Date("July 09, 2005 14:23:54")); // yazı ile de belirtilebilir




// 🔥🔥🔥 VERİ TİPİ DEĞİŞTİRME 🔥🔥🔥

// Stringe çevirme

console.log(typeof String(123));
console.log(typeof String([1,2,3]));
console.log(typeof String(true));
console.log(typeof String(null));
console.log(typeof String(undefined));

// Number'a çevirme

console.log(typeof Number("Hello"));
console.log(typeof Number("[1,2,3]"));
console.log(typeof Number(true));
console.log(typeof Number(null));
console.log(typeof Number(undefined));

// toString() Metodu  - 

value =(true).toString(); // typeof (true).toString(); ile kontrol edilir ise sonuç String çıkar
value =(123).toString(); // typeof (123).toString(); ile kontrol edilir ise sonuç String çıkar

console.log(value);




// OPERATORS


let value;
const value1 = 10;
const value2 = 2;
value = value1 + value2 // output : 12 - Addition
value = value1 - value2 // output : 8 - Subtraction
value = value1 * value2 // output : 20 - Multiplication 
value = value1 ** value2 // output : 100 - Exp  (karesini alır)
value = value1 / value2 // output : 5 - Divission
value = value2 / value1 // output : 0.2 - Divission
value = value1 % value2 // output : 0  - Modulus - Kalanı verir

a -= 5;
a *= 5;
a %= 3;
name += " Ahmet"

==	   // equal to (eşittir)	

===	  //  equal value and equal type	(hem tipi hem de değeri eşittir. )

!=	// not equal	(değeri eşit değildir)

!==	// not equal value or not equal (ya değeri yada tipi eşit değildir)

>	// greater than    (büyüktür)

<	//  less than   (küçüktür)

>=	//  greater than or equal to	(büyüktür ve eşittir)

<=	//  less than or equal to	(küçüktür ve eşittir)


&&	and	 //   (x < 10 && y > 1)       is true	
||	or	 //   (x == 5 || y == 5)      is false	
!	not	 //   !(x == y)               is true