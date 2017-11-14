"use strict"

class Particle {
	constructor(col) {
		let canvas = document.getElementById('a')
		this.context = canvas.getContext('2d')

		this.colour = col
		this.x = -1
		this.y = -1
		this.direction = 0
		this.speed = 1
		this.lifeTime = 0
		this.dead = true

		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
	}


	update() {
		if (this.dead == false) {
			this.lifeTime -= 1
			if (this.lifeTime < 1) {
				this.dead = true
			}
			else {
				this.x += Math.sin(this.direction) * this.speed
				this.y += Math.cos(this.direction) * this.speed
			}
		}

	}

	render() {
		if (this.dead == false) {
	    	this.context.beginPath()
	    	this.context.arc(this.x, this.y, 1, 0, 1 * Math.PI, false)
	    	this.context.fillStyle = this.colour
	    	this.context.fill()
	    }

	}
}

export default Particle