//Nomor 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA')
var coba = 2;
while(coba <= 21){
    console.log(coba + ' - I love coding');
    coba += 2;
}
var coba = 20 ;
console.log('LOOPING KEDUA')
while(coba > 0){
    console.log(coba + ' - I will become fullstack developer');
    coba -= 2;
}

//Nomor 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(var coba = 1; coba <= 20; coba ++) {
    console.log(coba + ' - I love coding');
}
console.log('LOOPING KEDUA')
for(var coba = 20; coba >= 1; coba --) {
    console.log(coba + ' - I will become fullstack developer');
}

//Nomor 3. Angka Ganjil dan Genap

for(var angka = 1; angka <= 100; angka++) {
    if(angka % 2 == 0){
        console.log(angka+' GENAP');
    } else{
        console.log(angka+' GANJIL');
    }
}

var counter = 3;
for(var angka = 1; angka <= 100; angka += 2) {
    if(angka % 3 == 0){
        console.log(angka + ' KELIPATAN ' + counter);
    } else{
        console.log('');
    }
}

var counter = 6;
for(var angka = 1; angka <= 100; angka += 5) {
    if(angka % 6 == 0){
        console.log(angka + ' KELIPATAN ' + counter);
    } else{
        console.log('');
    }
}

var counter = 10;
for(var angka = 1; angka <= 100; angka += 9) {
    if(angka % 10 == 0){
        console.log(angka + ' KELIPATAN ' + counter);
    } else{
        console.log('');
    }
}