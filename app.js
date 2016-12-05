function gameOfLife() {
    function creatingStartMatrix() {
        var matrix1 = []; 
        for (var i = 0; i < 66; i++) {
            matrix1[i] = [];
            for (var j = 0; j < 120; j++) {
                matrix1[i][j] = false;
            }
        }
        matrix1[1][26] = true; 
        matrix1[2][24] = true; matrix1[2][26] = true;
        matrix1[3][14] = true; matrix1[3][15] = true; matrix1[3][22] = true; matrix1[3][23] = true; matrix1[3][36] = true; matrix1[3][37] = true;
        matrix1[4][13] = true; matrix1[4][17] = true; matrix1[4][22] = true; matrix1[4][23] = true; matrix1[4][36] = true; matrix1[4][37] = true;
        matrix1[5][12] = true; matrix1[5][18] = true; matrix1[5][22] = true; matrix1[5][23] = true; matrix1[5][2]  = true; matrix1[5][3]  = true;
        matrix1[6][2]  = true; matrix1[6][3]  = true; matrix1[6][12] = true; matrix1[6][16] = true; matrix1[6][18] = true; matrix1[6][19] = true; matrix1[6][24] = true; matrix1[6][26] = true;
        matrix1[7][12] = true; matrix1[7][18] = true; matrix1[7][26] = true;
        matrix1[8][13] = true; matrix1[8][17] = true;
        matrix1[9][14] = true; matrix1[9][15] = true;
        return matrix1;
    }
    var matrix1 = creatingStartMatrix(),
        matrix2 = [],
        matr = "";

    function matrixStepByStep() {
        for (var k = 0; k < 66; k++) {
            matrix2[k] = [];
            matr += "<div class='row'>";
            for (var y = 0; y < 120; y++) {
                var count = 0;
                if (matrix1[k - 1] && matrix1[k - 1][y - 1] === true) { count++; }
                if (matrix1[k - 1] && matrix1[k - 1][y] === true) { count++; }
                if (matrix1[k - 1] && matrix1[k - 1][y + 1] === true) { count++; }
                if (matrix1[k][y - 1] === true) { count++; }
                if (matrix1[k][y + 1] === true) { count++; }
                if (matrix1[k + 1] && matrix1[k + 1][y - 1] === true) { count++; }
                if (matrix1[k + 1] && matrix1[k + 1][y] === true) { count++; }
                if (matrix1[k + 1] && matrix1[k + 1][y + 1] === true) { count++; }
                if (matrix1[k][y] === true) {
                    if (count === 2 || count === 3) {
                        matrix2[k][y] = true;
                    } else {
                        matrix2[k][y] = false;
                    }
                    matr += "<div class='true'></div>";
                }
                if (matrix1[k][y] === false) {
                    if (count === 3) {
                        matrix2[k][y] = true;
                    } else {
                        matrix2[k][y] = false;
                    }
                    matr += "<div class='false'></div>";
                }
            }
            matr += "</div>";
        }
    }
    function printMatrix() {
        $(".container").html(matr);
        matr = "";
        for (var a = 0; a < 66; a++) {
            for (var b = 0; b < 120; b++) {
                matrix1[a][b] = matrix2[a][b];
            }
        }
    }
    var q = 0;
    function myLoop() {
        setTimeout(function() {
            matrixStepByStep();
            printMatrix();
            if (q === 0) {
                myLoop();
            }
        }, 200);
    }
    myLoop();
}
gameOfLife();
