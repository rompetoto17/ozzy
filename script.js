function createMatrix() {
    let n = parseInt(document.getElementById("size").value);

    if (isNaN(n) || n < 1) {
        alert("Please enter a valid matrix size");
        return;
    }

    let matrixDiv = document.getElementById("matrix");
    matrixDiv.innerHTML = "";

    let table = document.createElement("table");

    for (let i = 0; i < n; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < n; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "number";
            input.value = 0;
            input.id = `cell-${i}-${j}`;
            cell.appendChild(input);
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    matrixDiv.appendChild(table);
}

function invertMatrix() {
    let n = parseInt(document.getElementById("size").value);

    if (isNaN(n) || n < 1) {
        alert("Invalid matrix size");
        return;
    }

    let A = [];
    let I = [];

    for (let i = 0; i < n; i++) {
        A[i] = [];
        I[i] = [];

        for (let j = 0; j < n; j++) {
            let value = parseFloat(document.getElementById(`cell-${i}-${j}`).value);

            if (isNaN(value)) {
                alert("Please fill all matrix cells with numbers");
                return;
            }

            A[i][j] = value;
            I[i][j] = (i === j) ? 1 : 0;
        }
    }

    for (let i = 0; i < n; i++) {
        let pivot = A[i][i];

        if (pivot === 0) {
            alert("Matrix is not invertible");
            return;
        }

        for (let j = 0; j < n; j++) {
            A[i][j] /= pivot;
            I[i][j] /= pivot;
        }

        for (let k = 0; k < n; k++) {
            if (k !== i) {
                let factor = A[k][i];
                for (let j = 0; j < n; j++) {
                    A[k][j] -= factor * A[i][j];
                    I[k][j] -= factor * I[i][j];
                }
            }
        }
    }

    showResult(I);
}

function showResult(matrix) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    let table = document.createElement("table");

    for (let i = 0; i < matrix.length; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < matrix.length; j++) {
            let cell = document.createElement("td");
            cell.innerText = matrix[i][j].toFixed(2);
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    resultDiv.appendChild(table);
}
