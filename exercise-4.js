var tanggal = '21'; // assign nilai variabel tanggal disini!
var bulan = '5'; // assign nilai variabel bulan disini! (dengan huruf awal kapital)
var tahun = '2022'; // assign nilai variabel tahun disini!
var bulanResult;

switch (bulan) {
  case 1: { 
    bulanResult = 'Januari'; 
    break;
  }
  case 2: { 
    bulanResult = 'Februari'; 
    break;
  }
  case 3: { 
    bulanResult = 'Maret'; 
    break;
  }
  case 4: { 
    bulanResult = 'April'; 
    break;
  }
  case 5: { 
    bulanResult = 'Mei'; 
    break;
  }
  case 6: { 
    bulanResult = 'Juni'; 
    break;
  }
  case 7: { 
    bulanResult = 'Juli'; 
    break;
  }
  case 8: { 
    bulanResult = 'Agustus'; 
    break;
  }
  case 9: { 
    bulanResult = 'September'; 
    break;
  }
  case 10: { 
    bulanResult = 'Oktober'; 
    break;
  }
  case 11: { 
    bulanResult = 'November'; 
    break;
  }
  case 12: { 
    bulanResult = 'Desember'; 
    break;
  }
}

console.log(tanggal+' '+bulanResult+' '+tahun);