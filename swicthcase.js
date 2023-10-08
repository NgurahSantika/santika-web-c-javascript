function hitung() {
    let angka1 = parseInt(document.getElementById("angka1").value);
    let angka2 = parseInt(document.getElementById("angka2").value);
    let operasi = document.getElementById("operasi").value;
    let hasil;

    switch (operasi) {
        case "penjumlahan":
            hasil = angka1 + angka2;
            break;
        case "pengurangan":
            hasil = angka1 - angka2;
            break;
        case "perkalian":
            hasil = angka1 * angka2;
            break;
        case "pembagian":
            hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa membagi dengan 0";
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}