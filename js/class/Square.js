// Neliön piirtäminen siten, että tämä luokka periytetään Suorakulmiosta. 
// Neliö on ”erikoistapaus” suorakulmiosta, 
// jossa leveys ja korkeus ovat samoja.

import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {
    constructor(x,y,side) {
        super(x,y,side,side) // Kutsuu Rectangle-luokan konstruktoria samoilla mitoilla leveydelle ja korkeudelle
    }
}