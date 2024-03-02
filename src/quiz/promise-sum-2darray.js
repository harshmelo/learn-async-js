const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sum2DArray(array) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(array) || !array.every(Array.isArray)) {
            reject(new Error("Input is not a 2D array"));
            return;
        }
        setTimeout(() => {
            const sum = array.flat().reduce((acc, curr) => acc + curr, 0);
            resolve(sum);
        }, 1000);
    });
}

sum2DArray(array2D)
    .then(sum => console.log(`Sum: ${sum}`))
    .catch(error => console.error(error.message));