"use strict";
// CASE 1

const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

/*
  SOURCE CODE ANSWER NO.1
*/
const number1 = () => {
  let soal = "1. Buah apa saja yang dimiliki Andi?";
  console.log(soal);

  let fruitNames = fruits.map((fruit) => {
    return fruit.fruitName.toLowerCase();
  });

  let buahAndi = [...new Set(fruitNames)];
  console.log(`Jawab: ${buahAndi}`);
};

/*
  SOURCE CODE ANSWER NO.2
*/
const number2 = () => {
  let soal =
    "2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja dimasing-masing wadah?";
  console.log(soal);

  let fruitTypes = fruits.map((fruit) => {
    return fruit.fruitType;
  });
  let wadah = [...new Set(fruitTypes)];
  console.log(
    `Rincian soal:\n- Berapa jumlah wadah yang dibutuhkan? \nJawab: ${wadah.length}`
  );

  let wadahImport = fruits.filter((fruit) => fruit.fruitType === "IMPORT");
  let buahWadahImport = wadahImport.map((fruit) => {
    return fruit.fruitName.toLowerCase();
  });
  let fixBuahWadahImport = [...new Set(buahWadahImport)];
  console.log(
    `\n- Ada buah apa saja dimasing-masing wadah?\nJawab: Wadah Import ada buah: ${fixBuahWadahImport}`
  );

  let wadahLocal = fruits.filter((fruit) => fruit.fruitType === "LOCAL");
  let buahWadahLocal = wadahLocal.map((fruit) => {
    return fruit.fruitName.toLowerCase();
  });
  let fixBuahWadahLocal = [...new Set(buahWadahLocal)];
  console.log(`       Wadah Local ada buah: ${fixBuahWadahLocal}`);
};

/*
  SOURCE CODE ANSWER NO.3
*/
const number3 = () => {
  let soal = "3. Berapa total stock buah yang ada di masing-masing wadah?";
  console.log(soal);

  let wadahImport = fruits.filter((fruit) => fruit.fruitType === "IMPORT");
  let buahWadahImport = wadahImport.map((fruit) => {
    return fruit.stock;
  });

  let totalImport = 0;
  for (let i = 0; i < buahWadahImport.length; i++) {
    totalImport += buahWadahImport[i];
  }
  console.log(`Jawab:\n- Total stock wadah Import sebanyak ${totalImport}`);

  let wadahLocal = fruits.filter((fruit) => fruit.fruitType === "LOCAL");
  let buahWadahLocal = wadahLocal.map((fruit) => {
    return fruit.stock;
  });

  let totalLocal = 0;
  for (let i = 0; i < buahWadahLocal.length; i++) {
    totalLocal += buahWadahLocal[i];
  }
  console.log(`- Total stock wadah Local sebanyak ${totalLocal}`);
};

/*
  SOURCE CODE ANSWER NO.1
*/
const number4 = () => {
  let soal = "4. Apakah ada komentar terkait kasus di atas?";
  console.log(soal);

  console.log(
    "Jawab: sempat sedikit kebingungan karena penulisan nama buah yang berbeda capslocknya, mungkin dengan dikasih penjelasan/keterangan mengenai tugas menyelesaikan bug case sensitive pada data dapat sedikit memudahkan pembaca dalam memahami soalnya^^"
  );
};

number1();
console.log(" ");
number2();
console.log(" ");
number3();
console.log(" ");
number4();
