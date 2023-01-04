const hello = "Hello bithchhh!"
const name = "rangkuti pantek"

module.exports = {hello, name}


// Ketika membuat function dan kemudian memanggil function tersebut maka akan otomatis dijalan kan di file lain jika dipanggil menggunakan require("./")
const sayMyName = (name) => {
    console.log(`Heyy big broo ${name}`)
}
sayMyName("Ryan")