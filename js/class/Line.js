// Viivan piirtäminen (Line-luokka). 
// Viivan saa piirettyä lineTo-metodilla.

import { Shape } from "./Shape.js"

export class Line extends Shape {
    #x2
    #y2

    constructor(x1,y1,x2,y2) {
        super(x1,y1)
        this.#x2 = x2
        this.#y2 = y2
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this.#x2, this.#y2)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._strokeColor
        ctx.stroke()
    }
}