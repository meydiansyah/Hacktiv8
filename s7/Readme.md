# Modern JS - ES6

Javascript ES6 disebut juga ECMAScript 6 atau ECMAScript 2015 yang diperkenalkan pada tahun 2015 sebagai versi baru `Javascript`.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#scope">Scope</a></li>
    <li><a href="#arrow-function">Arrow Function</a></li>
    <li><a href="#classes">Classes</a></li>
    <li><a href="#destructuring">Destructuring</a></li>
    <li><a href="#callback-function-and-promises">Callback Function and Promises</a></li>
  </ol>
</details>

---

### Scope

Merupakan aksesibilitas variable yang digunakan dalam Javascript, terdapat `scope` atau ruang lingkup untuk mengontrol visibilitas variable kode yang digunakan. Terdapat 2 jenis scope, yaitu :

-   Global varibales --- Bisa diakses dimanapun
-   Local variables --- Tidak bisa diakses diluar function atau class

```javascript
// Global scope
function Cars() {
	// Local scope
	function Color() {}
}

var cars = Cars();
var color = Color(); // error
```

---

### Arrow function

Arrow function memberikan kemampuan untuk membuat fungsi jauh lebih bersih daripada fungsi tradisinonal, contohnya :

```javascript
//traditional function expression
let w = function (w, x) {
	return w * x;
};

//with arrow functions
let w = (w, x) => w * x;
```

---

### Classes

Fitur terbaru yang diperkenalkan oleh `javascript` versi ES6 untuk pendeklarasian class dapat digunakan seperti dibawah ini :

```javascript
class Employee {
	//constructor
	constructor(name) {
		this.name = name;
	}

	//function
	banner = () => console.log(this.name + " is an Employee");
}

class Manager extends Employee {
	constructor(name, section) {
		super(name);
		this.section = section;
	}
	banner = () =>
		console.log(
			this.name + " is an Employee an manager of " + this.section
		);
}
```

Jadi kita bisa mengganti fungsi dengan apa saja saat memanggil melalui objek.

---

### Destructuring

Membantu untuk menetapkan properti objek dan nilai array ke dalam variable yang berbeda.

-   Before using ES6

```javascript
const person = {
	name: "Joey",
	age: 2,
	gender: "male",
};

let name = person.name;
let age = person.age;
let gender = person.gender;
```

-   With ES6

```javascript
const person = {
	name: "Joey",
	age: 2,
	gender: "male",
};

// destructuring
let { name, age, gender } = person;
```

---

### Callback Function and Promises

#### Callback Function

-   Callback function dapat didefinisikan sebagai fungsi yang menerima fungsi lain sebagai argumen dan akan secara otomatis memanggil fungsi tersebut saat selesai.

-   Keuntungan menggunakan ini adalah kita bisa menunggu hasil fungsi sebelumnya (panggilan fungsi sebelumnya) dan kemudian melakukan panggilan fungsi lain.

```javascript
funciton greet(name, callback) {
	console.log('Hi' + ' ' + name);
	callback();
}

// callback function
function callMe() {
	console.log('I am callback function');
}


// passing function
greet('Joey', callMe);
```

#### Promises

-   Promises menggambarkan sebuah operasi yang belum selesai. Janji dalam JavaScript adalah objek yang menghasilkan nilai tunggal di masa depan. Jadi itu bisa diselesaikan, atau tidak diselesaikan.

-   `Fulfilled`, `rejected`, or `pending` adalah tiga kemungkinan status dari janji JavaScript.

Example :

```javascript
const http = require("http");

function fetchWebpage(url) {
	return new Promise((resolve, reject) => {
		http.get(url, (response) => {
			let responseData;
			response.on("data", (data) => (responseData = responseData + data));
			response.on("end", () => resolve(responseData));
			response.on("error", reject);
		});
	});
}

fetchWebpage("http://irushiniedilmika.medium.com/")
	.then((data) => console.log(data.length))
	.catch((error) => console.log(error))
	.finally(() => console.log("finished"));
```
