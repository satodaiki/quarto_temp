import PieceState from "./PieceState";
import BoardState from "./BoardState";
import Player from "./Player";
import Piece from "./Piece";

export default class GameField {
    public currentPlayer: Player;
    public playerA: Player;
    public playerB: Player;
    public pieceState: PieceState;
    public boardState: BoardState;
    public pieces: Piece[];

    constructor() {
        this.currentPlayer = new Player(0);
        this.playerA = new Player(0);
        this.playerB = new Player(1);
        this.pieceState = new PieceState();
        this.boardState = new BoardState();
        this.createPiece();
    }

    //ボードに置かれているか
    public isBoardIn(width: number, height: number): boolean {
        return (this.boardState[width][height] == null)? true: false;
    }

    //ボードにピースをセット
    public setPiece(id:number, width:number, height:number): void {
        if(this.isBoardIn(width, height) == true) {
            this.boardState[width][height] = this.pieces[id];
        }
    }

    //結果判定
    public getResult() {

    }

    //相手プレイヤーに駒を渡す
    public selectPiece(pieceId: number): void {
        if(this.currentPlayer.playerId == this.playerA.playerId) {
            this.playerB.pieceId = pieceId;
            this.currentPlayer = this.playerB;
        } else {
            this.playerA.pieceId = pieceId;
            this.currentPlayer = this.playerA;
        }
    }

    //ピースを作成
    public createPiece(): void {
        this.pieces[0] = new Piece(0,'with','black','high','circle');
        this.pieces[1] = new Piece(1,'with','black','high','rectangle');
        this.pieces[2] = new Piece(2,'with','black','low','circle');
        this.pieces[3] = new Piece(3,'with','black','low','rectangle');
        this.pieces[4] = new Piece(4,'with','white','high','circle');
        this.pieces[5] = new Piece(5,'with','white','high','rectangle');
        this.pieces[6] = new Piece(6,'with','white','low','circle');
        this.pieces[7] = new Piece(7,'with','white','low','rectangle');
        this.pieces[8] = new Piece(8,'without','black','high','circle');
        this.pieces[9] = new Piece(9,'without','black','high','rectangle');
        this.pieces[10] = new Piece(10,'without','black','low','circle');
        this.pieces[11] = new Piece(11,'without','black','low','rectangle');
        this.pieces[12] = new Piece(12,'without','white','high','circle');
        this.pieces[13] = new Piece(13,'without','white','high','rectangle');
        this.pieces[14] = new Piece(14,'without','white','low','circle');
        this.pieces[15] = new Piece(15,'without','white','low','rectangle');
    }
}