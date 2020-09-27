// OPERATÖRLER
// 1- Arithmetic Operators (+ - * / )
// 2- Assignment Operators
// 3- Comparison Operators
// 4- Logical Operators


// 1- Arithmetic Operators (+ - * / )

örnek : 
let value;
const value1 = 10;
const value2 = 2;
value = value1 + value2 // output : 12 - Addition
value = value1 - value2 // output : 8 - Subtraction
value = value1 * value2 // output : 20 - Multiplication (karesini alır)
value = value1 ** value2 // output : 100 - Exp
value = value1 / value2 // output : 5 - Divission
value = value2 / value1 // output : 0.2 - Divission
value = value1 % value2 // output : 0  - Modulus - Kalanı verir
console.log(value)

örnek:
var i = 10 
i++ ;   // bu sayıyı bir arttır demektir
console.log(i)
çıktı : 
11

// bu iki örneğin şöyle bir istisnası var. bunları aynı satır içinde kullanır iseniz bir arttırır ama farklı satır da kullanır iseniz o zaman arttırmaz. bunun için farklı satırda soluna koymanız gerekiyor.

örnek:
var i = 10 
i-- ;   // bu sayıyı bir eksilt demektir
console.log(i) 
çıktı :
9

örnek : 
var a = 20;
var b = 3;
var c = a * b;
console.log (c);
Output:
60

örnek : 
var a = 4;
var b = 3;
var c = a ** b;
console.log (c);
Output:
64

örnek :
var x = 0.2 + 0.1;
console.log(x);   // output =  0.30000000000000004
var y = (0.2*10 + 0.1*10) / 10;
console.log(y);   // output =  0.3

örnek :
const num1 = 8 ;
const num2 = 3 ;
console.log(`toplamları : ${num1 + num2}`)
console.log(`çıkarımları : ${num1 - num2}`)
çıktı : 
toplamları : 11
çıkarımları : 5

örnek :
const result = ( 4 + "3") // JS toplama işleminde birleştirme yapar. string ile number ı birleştirir ama sonuç string olmaya devam eder.
console.log(result)
çıktı : 
sonuç : 43 type :string


örnek :
const result = ( 6 - "3") // JS çıkarma işleminde çıkarmaya çalışır. Stringi number a çevirir ve sonuç yine number olur.
console.log(result)
çıktı : 
sonuç : 3 type :number

örnek :
const result = ( "17" - 3 + "3" + 0 - "10") // JS işleminde içinde çıkarma işlemi var ise çıkarmaya çalışır. Stringi number a çevirir ve sonuç yine number olur.
console.log(result)
çıktı : 
sonuç : 1420 type :number

örnek
const result = ( 5 + "6" * 1) // Burada sonuç 11 çıkar çünkü önce çarpma işlemi önceliği olduğu için "6" yı önce number yapar 6 + 5 olur.
console.log("result :", result)
çıktı :
result : 11
// 2- Assignment Operators
// Kısa yoldan aritmetik işlemleri yapmamızı sağlar.

örnek :
var a = 20;
a -= 5;
console.log (a);
Output :
15

örnek :
var a = 20;
a *= 5;
console.log (a);
Output :
100

örnek :
var a = 20;
a %= 3;
console.log (a);
Output : 2  //- Modulus - Kalanı verir

// bunu stringlerde de kullanabiliriz
örnek :
name = "Talha"
name += " demir"
console.log(name)
çıkıt : 
Talha demir


// 3- Comparison Operators (Karşılaştırma Operatörleri)
// Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitliği veya farkı belirlemek için mantıksal ifadelerde kullanılır.

// -------------------------------------------------------------------

var x = 5

==	   // equal to (eşittir)	
örnek :
x == 8	false	x == 5	true	x == "5"	true

===	  //  equal value and equal type	(hem tipi hem de değeri eşittir. )
örnek :
x === 5	true	
x === "5"	false	

!=	// not equal	(değeri eşit değildir)
örnek :
x != 8	true	

!==	// not equal value or not equal (ya değeri yada tipi eşit değildir)
örnek :
type	x !== 5	false	
x !== "5"	true	
x !== 8	true

>	// greater than    (büyüktür)
örnek :	x > 8	false	

<	//  less than   (küçüktür)
örnek :
    x < 8	true	
    
>=	//  greater than or equal to	(büyüktür ve eşittir)
örnek :
x >= 8	false	

<=	//  less than or equal to	(küçüktür ve eşittir)
örnek :
x <= 8	true


// -------------------------------------------------------------------

örnek :
var a = 10;
console.log (a==9);
output :
false

örnek :
var a = "10";
console.log (a == 10);
output :
true

örnek :
var a = "10";
console.log (a === 10);
output :
false

örnek :
var a = "10";
console.log (a !== "10");
output :
false

örnek :
var a = "10";
console.log (a < 10); //
output :
false

örnek :
var a = "10";
console.log (a > 9);
output :
true

örnek :
var a = "m";
console.log (a > 9);
output :
false

// 4- Logical Operators (Mantıksal operatörler)

// Mantıksal operatörler, değişkenler veya değerler arasındaki mantığı belirlemek için kullanılır.

örnek : 
x = 6 
y = 3

&&	and	    (x < 10 && y > 1)       is true	
||	or	    (x == 5 || y == 5)      is false	
!	not	    !(x == y)               is true

örnek :
var a = 10;
var b= 5;
console.log (a>=b && b<=20 );
Output:
true

örnek :
var a = 10;
var b= 5;
console.log (a==b || b<=20 );
Output:
true

örnek :
var a = 10;
var b= 5;
console.log (!(a>=b ));
Output:
false

örnek :
const a = 5;
const b = 6;
result = (a === 5 && b === "6" )
console.log (result);
çıktı :
false

örnek :
const a = 5;
const b = 6;
result = (a === 5 && b === 6 )
console.log (result);
çıktı :
true

örnek :
const a = 5;
const b = 6;
result = (a === 8 || b === 6 )
console.log (result);
çıktı :
true

örnek :
const a = 5;
const b = 6;
result = !(a === 6 || b === 6 ) //sonuç normalde True ama başında ünlem olduğu için ters ele alıyor olayı.
console.log (result);
çıktı :
false