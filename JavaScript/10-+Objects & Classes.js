// JavaScript Objects & Classes



// OBJECTS

// ➤ Nesneler de değişkenlerdir. Diğer değişkenlerin aksine, nesneler birçok değer içerebilir. Pyton daki dictionary ye benziyor ama ondan dha güçlü.
// ➤ Nesneler , verileri düzenli bir şekilde depolamak için kullanışlıdır.
// ➤ Nesneler , özelliklerden oluşur. Özellik bir "ad: değer" çiftidir.
// ➤ bir Object ismi yazılır ondan sonra süslü parantez açılır. içine de key ve value yazılır.
// ➤ ÖNEMLİ, parantez içindeki değerler arasına VİRGÜL koymak şart

------------------------------------------------------------------
// JSON OBJESİ (JavaScipt Obejct Notation)
// aşğıdaki gibi key lere tırnak koyulduğu zaman buna JSON objesi deniyor. İntertnetten veya havuzdan veriler JSON olarak geliyor.

{
  "userName": "Talha",
  "userSurname": "DEMİR", 
  "age": 30,
  "gender" : "male",
  "isMember": true,
  "department": "IT"
}


------------------------------------------------------------------

// ➤ mesela aşağıdaki ilan da dog bir nesnedir ve tıpkı gerçek dünya daki gibi özelliklere sahiptir.
var dog = {
    name: "Rocky",
    legs: 4, 
    tail: 1, // kuyruk
    qualities: ["loyalty","companionship"] // sadakat ve arkadaşlık
    };
// ➤ Nesne özelliklerine erişmenin iki yolu vardır.
var myDog=dog.name;
var yourDog=dog["name"] ;

console.log(myDog); // hepsi aynı sonucu verir.
console.log(dog.name); // hepsi aynı sonucu verir.
console.log(yourDog); // hepsi aynı sonucu verir.
console.log(dog["name"]); // hepsi aynı sonucu verir.

çıktı :
Rocky
Rocky
Rocky
Rocky

------------------------------------------------------------------

// OBJECT İÇİNDEKİ NESNEYE ULAŞIM SAĞLAMA


örnek :

const user = {
  userName: "Talha",
  userSurname: "DEMİR", 
  age: 30,
  gender : "male",
  isMember: true,
  department: "IT"
};

erişim yöntemleri :

// 1. erişim yöntemi
console.log(user.userName) // burda arada nokta var
//2. erişim yöntemi
console.log(user["userName"]) // burda arada nokta yok
//3.erişim yöntemi 
const propertName="userName"; // bir değişkene atayarak erişim
console.log(user[propertName])
------------------------------------------------------------------


// OBJECT İÇİNDE FUNCTİON KULLANMA



// ➤ Nesnelerin içinde fonsiyon olabilir .
// ➤ Bir nesne yöntemine erişmek için aşağıdaki sözdizimini kullanabiliriz.


var dog = {
    name: "Rocky",
    legs: 4,
    tail: 1,
    qualities: ["loyalty","companionship"],
    bark : function() {
      console.log("woof");  },
    result : function() {
      return this.name+ " has " + this.legs + " legs.";
    }
    };
  
  dog.bark();
  console.log(dog.result());
  çıktı :
 woof
 Rocky has 4 legs.

 ------------

 örnek :
 const user = {
  userName: "Talha",
  userSurname: "DEMİR", 
  age: 30,
  userPAss : "123ala",
  login(){ //    login: function(){ bu şekilde de olabilir.
      console.log("user giriş yaptı ve onaylandı");
  }
};
console.log(user.userName);
console.log(user.loginUser());
çıktı :
Talha
user giriş yaptı ve onaylandı

-------------------------------------------------------------------

// THİS KONUSU :


// ➤ Bir nesne türü oluşturmak için bir nesne yapıcı işlevi kullanabiliriz.

function dog(name, legs, tail) {
  this.name = name;
  this.legs = legs;
  this.tail = tail;
}
// ➤ this mevcut nesneyi ifade eden bir anahtar sözcüktür. Değişken değildir. Ve bunun değerini değiştiremeyiz .
// ➤ Bir nesne yapıcısına sahip olduktan sonra,newanahtar kelime ile aynı türden yeni nesneler oluşturabiliriz.

var dog1 = new dog("Riley", 4, 1);
var dog2 = new dog("Ginger", 4, 1);

document.write(dog1.name); // Output: "Riley"
document.write(dog2.tail); // Output: 1

----------------------

const user = {
  userName: "Talha",
  userSurname: "DEMİR", 
  age: 30,
  userPAss : "123ala",
  login() {
      const loginTime = "20-10-2020"
      console.log( this.userName + " giriş yaptı ve onaylandı " + " giriş tarihi : " + loginTime);
  }
};

console.log(user.login());

çıktı :
Talha giriş yaptı ve onaylandı  giriş tarihi : 20-10-2020

-------------------------------


const user = {
  userName: "",
  userPass: "",  
  age: 0,
  login() {
      console.log( this.userName + " logged in" );
  },
  changeName(newName) {
      this.userName = newName
  }
};

const myUser_1 = user ;

myUser_1.userName  = "Ayşe" ;
myUser_1.userPass  = "123" ;
myUser_1.age  = 30 ;

console.log(myUser_1);
console.log(user.login());
console.log(user.changeName("Talha"));
console.log(user.login());

-------------------------------------------------------------------

// ARRAY OF OBJECTS KONUSU :
// objectleri tek bir array da birleştirmenin yoludur.

const user = {
  userName: "Talha",
  age: 30,
  userPass : "123ala",    
};

console.log(user);

const myUser_1 = user ;

myUser_1.userName  = "Ayşe" ;
myUser_1.userPass  = "123" ;
myUser_1.age  = 30 ;

console.log(myUser_1);

const myUser_2 = user ;

myUser_2.userName  = "Murat" ;
myUser_2.userPass  = "456" ;
myUser_2.age  = 20 ;

console.log(myUser_2);

const userArray = [ ];

userArray.push(myUser_1) ;
userArray.push(myUser_2) ;

console.log(userArray);

// şimdi burada şöyle bir hata alacağız. tamam listeler tek bir array da toplancak ama myUser_1 veya myUser_2 diyerek biz bu objectin kendisini değiştiriyoruz. Yani ikinci sırada Ahmet ismini veya 456 pass ını girdiğimiz için her iki array e de aynı değerleri atayacak. işte biz bunun önüne geçmek için CLASS ları kullanıyoruz


  -*-------*-------*-----*------*-------*------*------*----*--*--------*-------*



  // CLASS


  // ➤  A class bir function türüdür, ancak class anahtar kelimesini kullanırız ve onu başlatmak için function anahtar kelimesini kullanmak yerine bir constructor() yöntem içinde özellikleri atarız.
    // ➤  Class lar büyük harf ile başlar.

------------------------------------------------------------------

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
}  

// ➤ Artık Dog sınıfını kullanarak nesneler oluşturabilirsiniz:

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
}
myDog = new Dog("Buldog") 



------------------------------------------------------

örnek : 
const user = {
  userName: "",
  userPass: "",  
  age: 0,
  login() {
      console.log( this.userName + " logged in" );
  },
  changeName(newName) {
      this.userName = newName
  }
};

const myUser_1 = user ;

myUser_1.userName  = "Ayşe" ;
myUser_1.userPass  = "123" ;
myUser_1.age  = 30 ;

console.log(myUser_1);
console.log(user.login());
console.log(user.changeName("Talha"));
console.log(user.login());



------------------------------------------------------

örnek :
class User {
  constructor (name, pass, age) {
      this.userName = name ;
      this.userPass = pass ;
      this.age = age ;
      
  }
}

const myUser_123 = new User("talha", "23" , 30)
console.log(myUser_123);

const myUser_1234 = new User("tesla", "32" , 11)
console.log(myUser_1234);
çıktı :
User {userName: "talha", userPass: "23", age: 30}
User {userName: "tesla", userPass: "32", age: 11}


// bu da yukarıdaki örneği yazmanın başka bir yoludur

class User {
  constructor (param) {
      this.userName = param.name ;
      this.userPassword = param.password ;
      this.age = param.age ;
      this.city = param.city;
  }
  login(){
      console.log(this.userName + " isimli user sisteme giriş yaptı");
  }
}

const myUser_1 = new User({name : "talha", password: "23" , age :30, city: "izmir"})
const myUser_2 = new User({name : "Ezran", password: "11" , age :25, city: "Berlin"})
console.log(myUser_1);
console.log(myUser_2);
console.log(myUser_1.login());
console.log(myUser_2.login());
çıktı :
User {userName: "talha", userPassword: "23", age: 30, city: "izmir"}
User {userName: "Ezran", userPassword: "11", age: 25, city: "Berlin"}
talha isimli user sisteme giriş yaptı
Ezran isimli user sisteme giriş yaptı


------------------------------------------------------------------
// Methods


// ➤ Yapıcı yöntemi benzersizdir, özelliği başlattığınız yerdir, bir sınıf başlatıldığında otomatik olarak adlandırılır ve tam olarak "constructor,"adını almalıdır ve ayrıca bir yapıcı yönteminiz yoksa, JavaScript bir görünmez ve boş yapıcı yöntemi.

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current(){
     return "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
  }
}
myDog = new Dog("Buldog", 4) 
document.getElementById("content").innerHTML = myDog.current();

// aynı sonucu aşağıdaki örnek de de alabiliriz.

Dog = function (name, foot) {
  this.dogName = name;
  this.foot = foot;
  document.getElementById("content").innerHTML = 
  "I have a " + this.dogName + " and it has " + this.foot + " legs" ;
   
}
myDog = new Dog("Buldog", 4) 
console.log(myDog);



------------------------------------------------------------------


// Static Methods


class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  static hello(){
     return "Hello";
  }
}
myDog = new Dog("Buldog") 
document.getElementById("content").innerHTML = Dog.hello();

------------------------------------------------------------------


// Inheritance (Miras")

// ➤ Bir sınıf mirası oluşturmak için extends anahtar kelimeyi kullanın.

class Dog {
  constructor(name, foot) {
    this.dogName = name;
    this.foot = foot;
  }
  current(){
     return "I have a " + this.dogName + ",  It has " + this.foot + " foot";
  }
}


class Specy extends Dog {
  constructor(name, foot, char) {
    super(name, foot);
    this.character = char;
  }
  show() {
    return this.current() + ', it is  ' + this.character;
  }
}

myDog = new Specy("Buldog", 4, "curious");
document.getElementById("content").innerHTML = myDog.show();

// ➤super() ebeveynin yöntemi belirtir  .

// ➤super() Yapıcı yönteminde yöntemi çağırarak,ebeveynin yapıcı yöntemini çağırır ve ebeveynin özelliklerine ve yöntemlerine erişim elde ederiz.




------------------------------------------------------------------

// Getters and Setters  (alıcıları ve ayarlayıcıları)

// ➤ Sınıfa alıcılar ve ayarlayıcılar eklemek için get ve set anahtar kelimelerini kullanın.

class Song {
  constructor(genre) {
    this.genre = genre;
  }
  get sgenre() {
    return this.genre;
  }
  set sgenre(newgenre) {
    this.genre = newgenre;
  }
}

mysong = new Song("Classical");

document.getElementById("content").innerHTML =
  "My favourite is " + mysong.sgenre;
  Output:
  My favourite is Classical


  // ⚜️ İpuçları: Alıcı bir yöntem olsa bile, özellik değerini almak istediğinizde parantez kullanmazsınız.

  // ➤  setter kullanmak için, parantezler olmadan bir özellik değeri ayarladığınızda olduğu gibi aynı sözdizimini kullanın.

  class Song {
    constructor(genre) {
      this.genre = genre;
    }
    get sgenre() {
      return this.genre;
    }
    set sgenre(newgenre) {
      this.genre = newgenre;
    }
  }

  mysong = new Song("Classical");
  mysong.sgenre = "Jazz";

  document.getElementById("content").innerHTML =
    "My favourite is " + mysong.sgenre;
    Output:
My favourite is Jazz