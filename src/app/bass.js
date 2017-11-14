"use strict"

import HiHat from './hihat.js'

class Bass extends HiHat {
	constructor(x,y) {
		super(x,y)
		this.maxRadius = 30
		this.stepsPerPixel = 2
//			this.colour = '#9600CD'
		this.hitColourInBeat = '#00B5EC' //'#605884'
		this.hitColour = '#4D4DFF' //'#504874'
		this.cost = 5
	}      
}

export default Bass