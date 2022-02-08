// 1. Terdapat 3 variable yang berisi array,  di antaranya adalah:
// a. $status = [["Complete"], ["Incomplete", "Complete"], ["Complete", "Incomplete"]];
// b. $checklist = ["Kwitansi", "Resume Medis/Form Claim", "Rincian Biaya"];
// c. $kelengkapan = [["Kwitansi Keseluruhan"], ["Form Claim", "Copy Buku
// Kehamilan"], ["Rincian Biaya Lab", "Rincian Biaya Obat"]];
// Buatlah output berdasarkan value “Complete” dari variable $status di atas.
// Hasil yang diharapkan berdasarkan soal di atas:
// ["Kwitansi", "Resume Medis\/Form Claim", "Rincian Biaya"]
// [["Kwitansi Keseluruhan"], ["Copy Buku Kehamilan"], ["Rincian Biaya Lab"]]
  const status = [
    ["Complete"],
    ["Incomplete", "Complete"],
    ["Complete", "Incomplete"],
  ];
  const checklist = ["Kwitansi", "Resume Medis/Form Claim", "Rincian Biaya"];
  const kelengkapan = [
    ["Kwitansi Keseluruhan"],
    ["Form Claim", "Copy BukuKehamilan"],
    ["Rincian Biaya Lab", "Rincian Biaya Obat"],
  ];
  function numberOne (array){
    let result = [];
    for (let i = 0; i < status.length; i++) {
      for (let j = 0; j < status[i].length; j++) {
        if(status[i][j] === "Complete"){
          if(array[i][j].length == 1) return array
          else result.push([array[i][j]])
        }
      }
    }
    return result
  }
  // console.log(numberOne(checklist))
  // console.log(numberOne(kelengkapan))

// 2. Terdapat sebuah variable yang berisi array,  yaitu:
// const data= ['samsung',  'vivo',  'sony',  'oneplus',  'sony',  'nokia'];
// Buatlah output yang memiliki value “on” dari variable di atas.
// Hasil yang diharapkan berdasarkan soal di atas:
// Array ["sony", ”oneplus”, ”sony”]

  const data = ['samsung',  'vivo',  'sony',  'oneplus',  'sony',  'nokia']
  function numberTwo (array) {
    let result = [];
    data.forEach(each => {
      for(let i = 0; i < each.length; i++){
        if(each[i] + each[i + 1] === "on") {
          result.push(each)
          break
        }
      }
    })
    return result
  }
  console.log(numberTwo(data));

// 3. Suatu perusahaan ingin memiliki mobile apps yang memiliki katalog merek dan spesifikasi
// handphone. Masing masing handphone di katalog memiliki nama,  harga,  keterangan,  ukuran
// display dan juga rating sekaligus review yang diberikan oleh pengguna mobile apps tersebut.
// Soal : Tentukan table beserta attributenya dan bentuk relasi sesuai dengan soal di atas

// UNTUK PENGERJAAN TERDAPAT DI "numberThree.jpg"
