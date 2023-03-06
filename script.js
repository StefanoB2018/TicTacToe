const Player_X = "X";
const Player_O = "O";
let flag1 = false;
let flag2 = false;
let turn = 0;
let currentPlayer;
let nextTurn;
let board1 = [
    ["", "", "", "", "", "", "", "", ""]
]
let board2 = [
    ["", "", "", "", "", "", "", "", ""]
]
alert("Play on one at a time!")
function play(value) {
    id = value.getAttribute('id');
    cell = value.innerHTML;
    whichBoard = id.length;
    if (cell == "") {
        if (turn % 2 == 0) {
            currentPlayer = Player_X;
            nextTurn = Player_O;
        }
        else {
            currentPlayer = Player_O;
            nextTurn = Player_X;
        }
        if (whichBoard == 1 && flag1 == false)
            board1[id] = currentPlayer;

        else if (flag2 == false) {
            board2[Number(id)] = currentPlayer;
        }
        if (flag1 == false && flag2 == false) {
            document.getElementById("b" + whichBoard).innerHTML = "Turn = " + nextTurn;
            document.getElementById(id).innerHTML = currentPlayer;
            if (checkWin(whichBoard)) {
                document.getElementById("b" + whichBoard).innerHTML = currentPlayer + " wins!";
                setTimeout(() => {
                    reload();
                }
                    , 4000);
            }
        }
        turn += 1;
        if (turn == 9) {
            document.getElementById("b" + whichBoard).innerHTML = "Draw!";
            setTimeout(() => {
                reload();
            }
                , 4000);
        }


    }
}


function checkWin(thisWhichBoard) {
    let sum = "";
    if (thisWhichBoard == 1) {
        //board1
        sum = board1[0] + board1[1] + board1[2]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[3] + board1[4] + board1[5]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[6] + board1[7] + board1[8]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[0] + board1[3] + board1[6]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[1] + board1[4] + board1[7]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[2] + board1[5] + board1[8]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[0] + board1[4] + board1[8]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
        sum = board1[2] + board1[4] + board1[6]
        if (sum == "XXX" || sum == "OOO") {
            flag1 = true;
            return true;
        }
    }
    else {
        //board2
        sum = board2[0] + board2[1] + board2[2]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            console.log(sum);
            return true;

        }
        sum = board2[3] + board2[4] + board2[5]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
        sum = board2[6] + board2[7] + board2[8]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
        sum = board2[0] + board2[3] + board2[6]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
        sum = board2[1] + board2[4] + board2[7]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
        sum = board2[2] + board2[5] + board2[8]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
        sum = board2[0] + board2[4] + board2[8]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
        sum = board2[2] + board2[4] + board2[6]
        if (sum == "XXX" || sum == "OOO") {
            flag2 = true;
            return true;
        }
    }
    return false;
}

function reload() {

    for (var i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = "";
        document.getElementById("0" + i).innerHTML = "";
    }
    board1.fill("");
    board2.fill("")
    flag1 = false;
    flag2 = false;
    document.getElementById("b1").innerHTML = "Tic Tac Toe";
    document.getElementById("b2").innerHTML = "Tic Tac Toe";
    turn = 0;
}

