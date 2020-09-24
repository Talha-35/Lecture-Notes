// SCOPE KAVRAMI
// 1- Global Scope  => Ana ekran herşeyin yazıldığı

// 2- Function Scope => fonksiyonların yazılıdığı alan. burada yazılan değerler sadece burada kullanılıyor

// 3- Block Scope => if,for veya while gibi alanların yazdılığı yer



----------------------------------------------------------

var value1 = 10
let value2 = 20
const value3 = 30


function deneme() { // mesela ağaıdaki örnek de fonksiyon içinde değer isimleri aynı olmasına rağmen dışarıyı etklemedi
    var value1 = 40
    let value2 = 50
    const value3 = 60
    console.log(value1, value2, value3);
}
deneme()
console.log(value1, value2, value3);
çıktı :
40 50 60
Uncaught ReferenceError: value1 is not defined


----------------------------------------------------------

if (true) {
    var a = 40
    let b = 50
    const c = 60
    // console.log(a, b, c);
}
console.log(a);
console.log(b);
console.log(c);
çıktı :
40
Uncaught ReferenceError: b is not defined

 // burada sadece var yazdırır. işte var ile let/const arasındaki temel farklardan biriside budur. var condition dışında da çalışır ama const ile ket çalışmaz.


----------------------------------------------------------

var value1 = 10
let value2 = 20
const value3 = 30


if (true) {
    var value1 = 40
    let value2 = 50
    const value3 = 60
    console.log(value1, value2, value3);
}

console.log(value1, value2, value3);
çıktı :
40 50 60
40 20 30


 // burada da var ile alakalı bir başka detayı öğreniypruz. if bloğu içindeki değeri artık global de gibi algıladı. ve değerini değiştirdi
----------------------------------------------------------

NOT : işte bu yüzden eğer değişmesini istemeidğiniz bir değer için  var kullanmayın. Çünkü başka birisi gelir sonradan Var değeri verir ve sizin ilk değer çöp olur.""