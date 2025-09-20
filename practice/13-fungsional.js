//contoh 1
function getDistance(mph , h){
    return mph * h }
//memisahkan data num1 dan num 2 dan fungsi lalu 
var mph = 60
var h = 2
//mengoper data / memakai data tsb dalam fungsi jika hanya ingin
var distance = getDistance(mph , h)
//fungsi tsb tidak mengubah variabel global
console.log(distance) // 120


//contoh 2
var shoes = 100
var stateTax = 1.2

function totalPrice(shoes , stateTax) {
    return shoes * stateTax
}

var toPay = totalPrice(shoes , stateTax)
console.log(toPay) // 120