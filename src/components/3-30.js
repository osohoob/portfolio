a = [
    ["Z", "A", "A"],
    ["A", "A", "A"],
    ["B", "A", "A"]
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (a[i][j] != a[1][1] ) {
            console.log(i, j)
        }
    }
}