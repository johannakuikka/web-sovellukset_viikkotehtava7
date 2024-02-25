import { Circle } from "./class/Circle.js"
import { Line } from "./class/Line.js"
import { Rectangle } from "./class/Rectangle.js"
import { Square } from "./class/Square.js"

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const x_input = document.querySelector('#x')
const y_input = document.querySelector('#y')
const draw_button = document.querySelector('button')
const radio_form = document.querySelector('form')
const line_width_input = document.querySelector('input[type=number]')
const color_input = document.querySelector('input[type=color]')


const updateUI =(label3,label4)=> {
    document.querySelector('div#third label').innerHTML = label3

    if (label4 !== undefined) {
        document.querySelector('div#fourth label').innerHTML = label4
        document.querySelector('div#fourth label').style.display = "inline-block"
        document.querySelector('div#fourth input').style.display = "inline-block"
    } else {
        document.querySelector('div#fourth label').style.display = "none"
        document.querySelector('div#fourth input').style.display = "none"
    }
}

radio_form.addEventListener('click',() => {
    const shape = radio_form['shape'].value
    switch (shape) {
        case 'line':
            updateUI('x2','y2')
            break
        case 'circle':
            updateUI('width:')
            break
        case 'rectangle':
            updateUI('width:','height:')
            break
        case 'square':
            updateUI('width:')
            break
    }
})

draw_button.addEventListener('click',() => {
    const shape = radio_form['shape'].value
    const color = color_input.value
    switch (shape) {
        case 'line':
            drawLine(color)
            break
        case 'circle':
            drawCircle(color)
            break
        case 'rectangle':
            drawRectangle(color)
            break
        case 'square':
            drawSquare(color)
            break
    }
})

const drawCircle = (strokeColor) => {
    const x = x_input.value
    const y = y_input.value
    const width = document.querySelector('div#third input').value
    const lineWidth = line_width_input.value
    const circle = new Circle(x,y,width/2)
    circle.setlineWidth = lineWidth
    circle.setStrokeColor = strokeColor
    circle.draw(ctx)
}

const drawLine = (strokeColor) => {
    const x1 = x_input.value
    const y1 = y_input.value
    const x2 = document.querySelector('div#third input').value
    const y2 = document.querySelector('div#fourth input').value
    const lineWidth = line_width_input.value
    const line = new Line(x1,y1,x2,y2)
    line.setlineWidth = lineWidth
    line.setStrokeColor = strokeColor
    line.draw(ctx)
}

const drawRectangle = (strokeColor) => {
    const x = x_input.value;
    const y = y_input.value;
    const width = document.querySelector('div#third input').value;
    const height = document.querySelector('div#fourth input').value;
    const lineWidth = line_width_input.value;    
    const rectangle = new Rectangle(x,y,width,height);
    rectangle.setlineWidth = lineWidth;
    rectangle.setStrokeColor = strokeColor
    rectangle.draw(ctx);
}

const drawSquare = (strokeColor) => {
    const x = x_input.value;
    const y = y_input.value;
    const side = document.querySelector('div#third input').value;
    const lineWidth = line_width_input.value;    
    const square = new Square(x, y, side);
    square.setlineWidth = lineWidth;
    square.setStrokeColor = strokeColor
    square.draw(ctx);
}






