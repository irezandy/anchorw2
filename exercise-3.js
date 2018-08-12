var nama = prompt('Masukan nama Anda ?');
var peran = prompt('Masukan peran Anda [Ksatria, Tabib, Penyihir] ?');

if (nama !== '' && peran !== '') {
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  
  switch(peran) {
    case 'Ksatria': { console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!'); break;}
    case 'Tabib': { console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.'); break;}
    case 'Penyihir': { console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!'); break;}
    default: {
      console.log('Silahkan pilih peran Anda : Ksatria, Tabib, Penyihir')
    }
  }
} else {
  if (nama === '') {
    console.log('Nama tidak boleh kosong');
  } else if (peran === '') {
    console.log('Pilih peranmu untuk memulai game');
  }
}