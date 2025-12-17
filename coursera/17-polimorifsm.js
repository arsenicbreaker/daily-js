// bel adalah sebuah properti yang dimiliki oleh dua objek berbeda yaitu bicycle dan door
const bicycle = {
  bell: function () {
    console.log("Watch Out!");
  },
};

const door = {
  bell: function () {
    console.log("Ding Dong!");
  },
};

//thing adalah parameter yang bisa menerima objek dari bicycle atau door
function ringBell(thing) {
  thing.bell();
}

ringBell(bicycle); // memanggil fungsi ringBell dengan objek bicycle
ringBell(door); // memanggil fungsi ringBell dengan objek door
