//batas 1 if
const hour = new Date().getHours(); 
if (hour < 21) {
    document.getElementById("demo").innerHTML = "BELUM TENGAH MALAM";
}
//batas
//batas 2 if else
const hour2 = new Date().getHours(); 
if (hour2 < 10) {
    document.getElementById("demo2").innerHTML = "GOOD MORNING";
} else if (hour2 < 15) {
    document.getElementById("demo2").innerHTML = "GOOD AFTERNOON";
} else {
    document.getElementById("demo2").innerHTML = "GOOD EVENING";
}
//batas
//batas 3 nested if
function cekNilai() {
    const nilai = parseInt(document.getElementById("nilaiInput").value);
    let hasil;
    if (nilai >= 0 && nilai <= 100) {
        if (nilai >= 0) {
            if (nilai >= 90) {
                hasil = "Nilai Anda A";
            } else {
                if (nilai >= 80) {
                    hasil = "Nilai Anda B";
                } else {
                    hasil = "Nilai Anda C";
                }
            }
        } 
    }
    else {
    hasil = "Nilai Tidak Valid ! Karena batas 0 - 100";
    }
    document.getElementById("demo3").innerHTML = hasil;
}
//batas