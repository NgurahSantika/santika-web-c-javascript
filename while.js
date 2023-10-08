//do while perulangan
function jalankanPerulangan() {
    const angkaMaksimal = parseInt(document.getElementById("inputAngka").value);
    let counter = 1;
    let hasil = "";

    while (counter <= angkaMaksimal) {
        hasil += "Ulangan bagian ke-" + counter + "<br>";
        counter++;
    }

    document.getElementById("demo8").innerHTML = hasil;
}
//batas 
//do while 
function cekTebakan() {
    let tebakan = parseInt(document.getElementById("tebakanAngka").value);
    const jawaban = 7; // Jawaban yang harus ditebak

    if (tebakan === jawaban) {
        document.getElementById("hasilTebakan").innerHTML = "Selamat! Anda menebak dengan benar: " + jawaban;
    } else {
        document.getElementById("hasilTebakan").innerHTML = "Maaf, tebakan Anda salah. Silakan coba lagi.";
    }
}