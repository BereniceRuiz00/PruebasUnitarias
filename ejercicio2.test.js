const tengoAgua = require('./ejercicio2');



test ('Hay agua', () => {
    expect (tengoAgua.tengoAgua(false,true,false,true)).toBe(true); //true
})
test ('Hay agua', () => {
    expect (tengoAgua.tengoAgua(true,false,true,true)).toBe(true); //true
})

test ('Hay agua', () => {
    expect (tengoAgua.tengoAgua(false,false,false,true)).toBe(false); //true
})
