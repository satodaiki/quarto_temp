export default class Piece {
    public id: number;
    public hole: 'with' | 'without';
    public color: 'white' | 'black';
    public height: 'low' | 'high';
    public form: 'circle' | 'rectangle';
}