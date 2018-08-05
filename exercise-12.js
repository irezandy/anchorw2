function konversiMenit(time){   
    var jam = ~~(time / 3600);
    var mnt = ~~((time % 3600) / 60);
    var dtk = time % 60;

    var waktu = "";

    if (jam > 0) {
        waktu += "" + jam + ":" + (mnt < 10 ? "0" : "");
    }

    waktu += "" + mnt + ":" + (dtk < 10 ? "0" : "");
    waktu += "" + dtk;
    return waktu;
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00