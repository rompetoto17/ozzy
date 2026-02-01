function createMatrix() {
    let n = document.getElementById("size").value;
    let matrixDiv = document.getElementById("matrix");
    matrixDiv.innerHTML = "";

    let table = document.createElement("table");

    for (let i = 0; i < n; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < n; j++) {
            let cell = document.createElement("td");
            let input = document.createElement("input");
            input.type = "number";
            input.id = `cell-${i}-${j}`;
            cell.appendChild(input);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    matrixDiv.appendChild(table);
}

function invertMatrix() {
    let n = document.getElementById("size").value;
    let A = [];

    for (let i = 0; i < n; i++) {
        A[i] = [];
        for (let j = 0; j < n; j++) {
            A[i][j] = parseFloat(document.getElementById(`cell-${i}-${j}`).value);
        }
    }

    let I = [];
    for (let i = 0; i < n; i++) {
        I[i] = [];
        for (let j = 0; j < n; j++) {
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
