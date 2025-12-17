// struktur data = object
const user = {
    name : 'dicoding',
    lastname : 'indonesia',
    age : 5,
};
const products = { name: 'Sepatu', price: 230000 };
// user dan products adalah object
// properti = {yang ada di dalam sini} atau nilai dari object


// menampilkan properti name dari object user
console.log(user.name);

// menjadikan propoerti dari object menjadi variable atau disebut distructuring
const { name, age } = user;
console.log(name, age); // Output: Dicoding 5

// mengubah nilai
user.name = 'dicoding academy'; 
console.log(user.name); // Output: Dicoding Academy

// menghapus properti dalam object
delete user.age;
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }