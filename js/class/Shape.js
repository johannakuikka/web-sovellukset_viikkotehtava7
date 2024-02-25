export class Shape {
    _x
    _y
    _lineWidth
    _strokeColor // Lisäa uuden ominaisuuden viivan värille

    constructor(x,y,_lineWidth = 1,_strokeColor = "black") {
        this._x = x
        this._y = y
        this._lineWidth = _lineWidth
        this._strokeColor = _strokeColor
    }

    set setlineWidth(lineWidth) {
        this._lineWidth = lineWidth
    }

    set setStrokeColor(strokeColor) {
        this._strokeColor = strokeColor;
    }
}