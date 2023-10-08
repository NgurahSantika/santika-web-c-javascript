//batas function 
function hitungPanjangKata() {
    let kata = document.getElementById("kataInput").value;
    let panjangKata = kata.length;
    let Pesan = "Panjang kata '" + kata + "' adalah " + panjangKata + " karakter. banyak spasi juga dihitung";
    document.getElementById("hasil2").innerHTML = Pesan;
}
//function 
