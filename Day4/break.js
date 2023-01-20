for (let i = 1; i < 6; i++) {
    if (i === 2) {
        continue //jump this loop, go directly to next loop
    }
    console.log(i)
}

for (let i = 1; i < 6; i++) {
    if (i === 2) {
        break //escape entire loop
    }
    console.log(i)
}