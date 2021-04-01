let a = [
    2, 5, 6, 8, 10, 7, 4
]

let wol = a.filter(too => too % 2 == 0).reduce((acc, val) => acc + val)
console.log(wol);