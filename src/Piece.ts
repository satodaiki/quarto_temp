export default class Piece {
    private id;
    private hole;
    private color;
    private height;
    private form;

    public constructor(id:number, hole:'with' | 'without', color: 'white' | 'black', height: 'low' | 'high', form: 'circle' | 'rectangle') {
        this.id = id;
        this.hole = hole;
        this.color = color;
        this.height = height;
        this.form = form;
    }
}