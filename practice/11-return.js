console.log('halo')


function doublet(num) {
    return num * 2
}

// membuat objek dengan properti
function objectMaker(val) {
    return { prop : val }
}

// menggabungkan hasil fungsi
let result = objectMaker(doublet(10))
console.log(result) //20


