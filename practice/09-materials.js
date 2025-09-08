// membuat fungsi 
function addTwoNums (a, b) {
    console.log( a + b)
}

// 2. memanggil funsi
addTwoNums(5, "5")

// 3. memperbarui fungsi dengan blok try catch
function addTwoNums (a, b) {
    try {
        console.log( a + b)
    } catch (error) {
        console.log("Error: ", error)
    }

/* 4. jika argumen bukan angka, maka lempar error
jika typeof paramater a dan b tidak sama dengan number
lemparkan typeerror bru. di dalam TypeError*/
function addTwoNums (a, b) {
    try {
    if (typeof a !== 'number') {
        throw new TypeError('Parameter a must be a number')
    } else if (typeof b !== 'number') {
        throw new TypeError('Parameter b must be a number')
    } else {
        console.log(a + b)
    } 
    } catch (error) {
        console.log("Error: ", error)
    }
} 
}

addTwoNums(5, "5")
console.log("Its still works")