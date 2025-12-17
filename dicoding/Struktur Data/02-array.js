// methode mambuar array

// 1. menggunakan object constructor
    const users = new Array();
    const numbers = new Array(5);
    console.log(users); // Output: []

// 2. menggunakan syntax array.form
    const user = new Array('John', 'Jane', 'Jack', 'Jill');
    const customer = Array.from(user); // menyalin array user ke array customer
    console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]

// 3. menggunakan array literal
    const fruits = ['apple', 'banana', 'cherry', '', 'grape'];
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

// mengakses elemen array
    console.log(fruits[1]); // Output: banana

// memanipulasi array
    fruits[3] = 'orange'; 
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange', 'grape']

// menambahkan elemen ke array
    fruits.push('mango');
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange', 'grape', 'mango']

// menghapus elemen dari array
    delete fruits[5];
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange', 'grape', empty]

// menghapus elemen dan data dari array --> lebih efektif
    fruits.splice(5, 1);
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'orange', 'grape']

// array memiliki banyak method seperti reverse, sort, dll
// contoh sort
    fruits.sort();
    console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'grape', 'orange']
