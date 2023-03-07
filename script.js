const Player_X = "X";
const Player_O = "O";
//checkwin
let flag1 = false;
let flag2 = false;
//contatore turno
let turn = 0;
let currentPlayer;
//div che stampa di chi è il turno successivo
let nextTurn;
//usato per controllare successivamente se il tavolo è scambiato mentre è in corso una partita
let isBoardDifferent;
//array per i tavoli
let board1 = [
    ["", "", "", "", "", "", "", "", ""]
]
let board2 = [
    ["", "", "", "", "", "", "", "", ""]
]

function play(value) {
    //getID
    id = value.getAttribute('id');
    cell = value.innerHTML;
    //variabile per controllare quale tavolo da gioco è usato
    whichBoard = id.length;
    //per prendere alla prima esecuzione il valore del tavolo
    if (turn == 0)
        isBoardDifferent = whichBoard;
    //se la cella è vuota viene eseguito
    if (cell == "") {
        //assegnazione del turno del giocatore
        if (turn % 2 == 0) {
            currentPlayer = Player_X;
            nextTurn = Player_O;
        }
        else {
            currentPlayer = Player_O;
            nextTurn = Player_X;
        }
        //inserimento nei due array associati ai due tavoli
        if (whichBoard == 1 && flag1 == false)
            board1[id] = currentPlayer;

        else if (flag2 == false) {
            board2[Number(id)] = currentPlayer;
        }
        //controllo vittoria
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
        //aumento turno
        turn += 1;
        //reset nei successivi 4 secondi dopo la vittoria o pareggio
        if (turn == 9 && checkWin(whichBoard) == false) {
            document.getElementById("b" + whichBoard).innerHTML = "Draw!";
            setTimeout(() => {
                reload();
            }
                , 4000);
        }

        //restart quando il tavolo da gioco è diverso
        if (isBoardDifferent != whichBoard) {
            if(whichBoard == 1)
                reload(2);
            else reload(1);
        }
    }
}

function isStrEqual(sum, thisWhichBoard) {
    if (sum == "XXX" || sum == "OOO") {
        if (thisWhichBoard == 1)
            flag1 = true;
        else
            flag2 = true;
        return true;
    }
    return false;

}

//controllo se la stringa delle somme corrisponde alle condizioni di vittoria
function checkWin(thisWhichBoard) {
    //tavolo1
    if (isStrEqual(board1[0] + board1[1] + board1[2], thisWhichBoard))
        return true;
    if (isStrEqual(board1[3] + board1[4] + board1[5], thisWhichBoard))
        return true;
    if (isStrEqual(board1[6] + board1[7] + board1[8], thisWhichBoard))
        return true;
    if (isStrEqual(board1[0] + board1[3] + board1[6], thisWhichBoard))
        return true;
    if (isStrEqual(board1[1] + board1[4] + board1[7], thisWhichBoard))
        return true;
    if (isStrEqual(board1[2] + board1[5] + board1[8], thisWhichBoard))
        return true;
    if (isStrEqual(board1[0] + board1[4] + board1[8], thisWhichBoard))
        return true;
    if (isStrEqual(board1[2] + board1[4] + board1[6], thisWhichBoard))
        return true;
    //tavolo 2
    if (isStrEqual(board2[0] + board2[1] + board2[2], thisWhichBoard))
        return true;
    if (isStrEqual(board2[3] + board2[4] + board2[5], thisWhichBoard))
        return true;
    if (isStrEqual(board2[6] + board2[7] + board2[8], thisWhichBoard))
        return true;
    if (isStrEqual(board2[0] + board2[3] + board2[6], thisWhichBoard))
        return true;
    if (isStrEqual(board2[1] + board2[4] + board2[7], thisWhichBoard))
        return true;
    if (isStrEqual(board2[2] + board2[5] + board2[8], thisWhichBoard))
        return true;
    if (isStrEqual(board2[0] + board2[4] + board2[8], thisWhichBoard))
        return true;
    if (isStrEqual(board2[2] + board2[4] + board2[6], thisWhichBoard))
        return true;
    return false;
}

//funzione per inizializzare tutto a zero
function reload(reloadBtn) {

    if (flag1 == true || reloadBtn == 1) {
        for (var i = 0; i < 9; i++) {
            document.getElementById(i).innerHTML = "";

        }
        flag1 = false;
        document.getElementById("b1").innerHTML = "Tic Tac Toe";
        board1.fill("");
    }
    if (flag2 == true || reloadBtn == 2) {
        for (var i = 0; i < 9; i++) {
            document.getElementById("0" + i).innerHTML = "";
            
        }
        flag2 = false;
        document.getElementById("b2").innerHTML = "Tic Tac Toe";
        board2.fill("")
    }
    turn = 0;
   
}
