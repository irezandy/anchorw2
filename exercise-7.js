//Nomor 1. Menyusun Barisan Bintang
var starts = '';
for (let i = 0; i < 5; i++){
  starts = '*'
  console.log(starts);
}

//Nomor 2. Menyusun Barisan Bintang Dengan Nested Looping
var limit = 5
var starts = '';

for (let i = 0; i < limit; i++) {
  for (let j = 0; j < limit; j++) {
  starts +='*';
}
  console.log(starts);
  starts = '';
}

//Nomor 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var starts = '';
for(var i = 1; i < 6; i++){
  for(var j = 0; j < i; j++){
  starts = starts + '*';
}
  console.log(starts)
  starts = '';
}  