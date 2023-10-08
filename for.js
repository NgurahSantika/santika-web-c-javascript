
//batas for statment 
function mulaiPerulangan() {
    let jumlahPerulangan = parseInt(document.getElementById("jumlahPerulangan").value);
    let outputList = document.getElementById("demo4");
    outputList.innerHTML = "";
    for (let i = 0; i <= jumlahPerulangan; i++) {

            outputList.innerHTML += "<li>Item ke-" + i + "</li>";

    }
}
//batas
//batas5
function tampilkanMobil() {
    let inputNumber = parseInt(document.getElementById("inputNumber").value);
    let cars = ["BMW", "Volvo", "Saab", "Ford"];
    let text = "";

    for (let i = inputNumber, len = cars.length; i < len; i++) {
        text += cars[i] + "<br>";
    }

    document.getElementById("demo5").innerHTML = text;
}
//batas6

function jalankanLoop() {
    const stopNumber = parseInt(document.getElementById("stopNumberInput").value);
    let text = "";

    for (let i = 0; i < 100; i++) {
        if (i === stopNumber) {
            text += "Iterasi berhenti pada angka " + i + "<br>";
            break;
        }
        text += i + "<br>";
    }

    document.getElementById("demo6").innerHTML = text;
}
//batas
function tampilkanAngka() {
    const skipNumber = parseInt(document.getElementById("skipNumber").value);
    let text = "";

    for (let i = 0; i < 5; i++) {
        if (i === skipNumber) {
            continue; // Menghindari menampilkan angka yang dimasukkan oleh pengguna
        }
        text += i + "<br>";
    }

    document.getElementById("demo7").innerHTML = text;
}
//batas