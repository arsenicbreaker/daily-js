//object virtualpet mempunyai data berupa properti sleepy dan fungsi nap
var virtualPet = {
    sleepy : true, //setiap properti dipisahkan dengan koma
    nap : function() {
        this.sleepy = false //this mengacu pada objek virtualPet
    }
}
console.log(virtualPet.sleepy) //true
virtualPet.nap() //memanggil fungsi nap
console.log(virtualPet.sleepy) //false