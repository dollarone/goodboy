"use strict"

import HiHat from './hihat.js'

class Snare extends HiHat {
	constructor(x,y) {
		super(x,y)
		this.maxRadius = 20
		this.stepsPerPixel = 2
		this.hitColourInBeat = '#21FF76' //'#B564E3'
		this.hitColour = '#00B947' //'#A554D3'
		this.cost = 3
	}      
}

export default Snare