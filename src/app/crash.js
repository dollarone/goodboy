"use strict"

import HiHat from './hihat.js'

class Crash extends HiHat {
	constructor(x,y) {
		super(x,y)
		this.maxRadius = 100
		this.stepsPerPixel = 2
		this.triggerCountdownSteps = 1
		this.hitColour = '#5416B4' //'#FF6A00'
		this.startRadius = 11
		this.cost = 3000
	}
}

export default Crash