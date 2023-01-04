// untuk memanggil module dan menggunakannya
    const path = require("path")
    console.log(path.sep)

// untuk menggabungkan directory path dan menampilkan basefilenya
    const filePath = path.join('/content', 'subfolder', 'test.txt')
    console.log(filePath)

    const base = path.basename(filePath)
    console.log(base)
    // atau bisa menggunakan ini
    console.log(path.basename(filePath))

// untuk langsung mendapatkan directory path
    const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
    console.log(`Ini direktorinya bro : ${absolute}`);
