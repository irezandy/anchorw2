var nama = 'Zero';
var peran = 'penyihir';

if (nama === ''){
  console.log("nama harus diisi!");
} else if (nama === 'Mikael'){
  console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
}

if (nama === 'Nina'){
  console.log("Selamat datang di Dunia Proxytia, Nina");
  if (peran === 'ksatria'){
    console.log("Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!");
  } else {
      console.log('Peran tidak sesuai');
    }  
}

if (nama === 'Danu'){
  console.log("Selamat datang di Dunia Proxytia, Danu");
  if (peran === 'tabib'){
    console.log("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.");
  } else {
      console.log('Peran tidak sesuai');
    }  
}

if (nama === 'Zero'){
  console.log("Selamat datang di Dunia Proxytia, Zero");
  if (peran === 'penyihir'){
    console.log("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!");
  } else {
      console.log('Peran tidak sesuai');
    }  
}
