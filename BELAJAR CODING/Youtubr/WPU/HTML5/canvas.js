// Menyiapkan canvas
const mycanvas = document.querySelector('#mycanvas')
// const mycanvas = document.getElementById('mycanvas');

// Atur ukuran canvas
mycanvas.width = window.innerWidth
mycanvas.height = window.innerHeight

// Tentukan context
const c = mycanvas.getContext('2d');

// // Manipulasi canvas
// // Membuat rectangle
// c.fillStyle = 'pink';
// c.strokeStyle = '#999';
// c.lineWidth = '5';

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();

// // Membuat lingkaran
// c.beginPath()
// c.fillStyle = 'lightgreen'
// c.arc(550, 200, 150, 0, 2 * Math.PI);
// c.fill()
// c.stroke()

// // Membuat segitiga
// c.beginPath()
// c.fillStyle = 'lightblue'
// c.moveTo(900, 50)
// c.lineTo(1050, 350)
// c.lineTo(750, 350)
// c.closePath()
// c.stroke()
// c.fill()

// Membuat Animasi Bergerak (lingkaran)
let x = 550
let y = 200
let speedX = 7
let speedY = 7
let radius = 50

function draw (){
    window.requestAnimationFrame(draw)
    c.clearRect(0, 0, innerWidth, innerHeight)
    
    c.beginPath()
    c.fillStyle = 'lightgreen'
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.fill()
    c.stroke()

    if (x + radius > innerWidth || x - radius < 0){
        speedX = -speedX
    }

    if (y + radius > innerHeight || y - radius < 0){
        speedY = -speedY
    }

    x += speedX
    y += speedY
}

draw()



