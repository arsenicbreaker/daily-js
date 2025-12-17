//* Tepat di atas perulangan for dalam definisi fungsi letterFinder, deklarasikan variabel bernama condition1 dan tetapkan kode berikut: typeof(word) == 'string' && word.length >= 2.
//*Deklarasikan variabel bernama condition2 pada baris berikutnya dan tetapkan padanya dan tetapkan padanya sebuah pemeriksaan yang memastikan bahwa tipe match adalah string DAN bahwa panjang variabel match sama dengan 1.
//*Tuliskan pernyataan if pada baris berikutnya yang memeriksa bahwa condition1 adalah true, dan condition2 adalah true
//*Pindahkan sisa tubuh fungsi ke dalam pernyataan if yang Anda tulis di langkah sebelumnya.
//*Tuliskan kode blok "else" setelah kondisi "if" dan console.log berikut ini: "Please pass correct arguments to the function.".
//*Sebagai tes yang gagal, jalankan fungsi letterFinder dan berikan dua angka sebagai argumen.
//*Sebagai tes yang berhasil, jalankan fungsi letterFinder dan berikan argumen yang benar, seperti: letterFinder("cat", "c").


function letterfinder(word, match) {
    //untuk validasi input
    var condition1 = typeof(word) == 'string' && word.length >= 2
    var condition2 = typeof(match) == 'string' && match.length == 1
    //mengecek kondisi
    if (condition1 && condition2) {
        //masuk ke pencarian huruf
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }

     } else {
        console.log("Please pass correct arguments to the function.") }
     }

//pemanggilan fungsi
letterfinder("cat", "a") 