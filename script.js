//troubleshoot first
console.log(document.tittle);
document.tittle = "im still learning";

const correctPassword = "12345";

window.onload = function() {
  let password = prompt("Masukkan password:");
  if (password === correctPassword) {
    alert("Password benar! Selamat datang 😊");
    
    // tampilkan konten
    const content = document.getElementById("content");
    content.style.display = "block";
    content.style.backgroundColor = "#f0f8ff";
    content.style.padding = "20px";
    content.style.borderRadius = "10px";
    content.style.textAlign = "center";
    content.style.fontFamily = "Arial, sans-serif";
  } else {
    alert("Password salah! Akses ditolak 🚫");
    document.body.innerHTML = "<h2>Akses ditolak</h2>";
    document.body.style.backgroundColor = "#ffdddd";
    document.body.style.color = "red";
    document.body.style.textAlign = "center";
    document.body.style.fontFamily = "Verdana, sans-serif";
  }
}
