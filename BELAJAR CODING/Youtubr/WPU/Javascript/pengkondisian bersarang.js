// normal horizontal
var s = ''
for (var i = 1; i <= 5; i++){
    s += '*'
}
console.log(s)

// normal vertikal
var s = ''
for (var i = 1; i <= 5; i++){
    s += '*'
    s += '\n'
}
console.log(s)

// persegi atau persegi panjang
var s = ''
for (var i = 1; i <= 7; i++){
    for (x = 1; x <= 10; x++){
        s += '*'
    }
    s += '\n'
}
console.log(s)

// segitiga normal
var s = ''
for (var i = 1; i <= 5; i++){
    for (var n = 1; n <= i; n++){
        s += '*'
    }
    s += '\n'
}
console.log(s)

// segitiga terbalik
var s = ''
for (var i = 1; i <= 5; i++){
    for (var n = 5; n >= i; n--){
        s += '*'
    }
    s += '\n'
}
console.log(s)
// atau
var s = ''
for (var i = 5; i >= 1; i--){
    for (var n = 1; n <= i; n++){
        s += '*'
    }
    s += '\n'
}
console.log(s)

// papan catur yoiii wkwkw
var s = ''
for (var i = 1; i <= 6; i++){
    for (x = 1; x <= 3; x++){
        if (i % 2 != 0){
            s += '# '
        } else {
            s += ' #'
        }
    }
    s += '\n'
}
console.log(s)



