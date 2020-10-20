import PieceState from "./PieceState";
import BoardState from "./BoardState";
import Player from "./Player";

export default class GameField {
    public currentPlayer: Player;
    public playerA: Player;
    public playerB: Player;
    public pieceState: PieceState;
    public boardState: BoardState;


    constructor() {
        this.currentPlayer = new Player();
        this.playerA = new Player();
        this.playerB = new Player();
        this.pieceState = new PieceState();
        this.boardState = new BoardState();
    }

    //ボードに置かれているか
    public isBoardIn() {

    }

    public setPiece() {

    }

    public result() {

    }

    //相手プレイヤーに駒を渡す
    public selectPiece(pieceId: number) {
        if(this.currentPlayer.playerId == this.playerA.playerId) {
            this.playerB.pieceId = pieceId;
        } else {
            this.playerA.pieceId = pieceId;
        }
    }
}