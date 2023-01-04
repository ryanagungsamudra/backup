// Membuat objek angkot
function Angkot (sopir, penumpang, trayek, kas){
    this.sopir = sopir;
    this.penumpang = penumpang;
    this.trayek= trayek;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang){
        this.penumpang.push(namaPenumpang)
        return this.penumpang
    }
    this.penumpangTurun = function (namaPenumpang, bayar){
        if (this.penumpang.length == 0){
            alert(`Mohon maaf angkot masi kosong`)
            return false
        }
        for (let i = 0; i < this.penumpang.length; i++){
            if (this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined
                this.kas += bayar
                return this.penumpang
            }
        }
    } 
}

let angkot1 = new Angkot ('Ryan', [], ['Ngemplak', 'Seturan'], 0)
let angkot2 = new Angkot ('Yurico', [], ['Seturan', 'Babarsari'], 0)

// angkot1.penumpangNaik();
// angkot2.penumpangNaik();

