"use strict"

class HiHat {
	constructor(x,y) {
		let canvas = document.getElementById('a')
		this.x = x
		this.y = y
		this.context = canvas.getContext('2d')
		this.centerX = canvas.width / 2
		this.centerY = canvas.height / 2
		this.radius = 0
		this.maxRadius = 10
		this.stepsPerPixel = 0.5
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.trigger = this.trigger.bind(this)
		this.play = this.play.bind(this)
		this.step = 0
		this.attack = 1
		this.isAttacking = false
		this.triggerCountdown = 0
		this.triggerCountdownSteps = 1
		this.startStep = 0
		this.hitColourInBeat = '#EC47E0' // '#B94CE1'
		this.hitColour = '#C500C0' //'#991CB1'
		this.startRadius = 1
		this.cost = 1
	}

	trigger() {
		if (this.triggerCountdown == 0) {
			this.triggerCountdown = this.triggerCountdownSteps
			this.isAttacking = true
			this.startStep = this.step
			this.radius = 0
			this.play()
		}
	}

	play() {

	}

	update(enemies) {
		if (this.triggerCountdown == 1) {
			this.triggerCountdown = 0	
		}
		else if (this.triggerCountdown > 1) {
			this.triggerCountdown -= 1
		}

		this.step++
		this.radius = this.startRadius + (this.step-this.startStep)/this.stepsPerPixel //%this.maxRadius
		if (this.radius >= this.maxRadius) {
			this.isAttacking = false
		}
		if (this.isAttacking) {

			for(let i=0; i<enemies.length; i++) {

			let dx = this.x - enemies[i].x
			let dy = this.y - enemies[i].y
			let distance = Math.sqrt(dx * dx + dy * dy)

			if (distance < (this.radius + enemies[i].radius) &&
				distance > (this.radius - enemies[i].radius)
				&& enemies[i].dead == false) {
					enemies[i].damage(this.attack)
				}
			}
		}
	}

	render() {

		this.context.beginPath()
		this.context.arc(this.x, this.y, this.maxRadius, 0, 2 * Math.PI, false)
		this.context.fillStyle = this.hitColour //'#9b9'
		this.context.fill()

		if (this.isAttacking) {
			this.context.beginPath()
			this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
			this.context.lineWidth = 1
			this.context.strokeStyle = '#003300'
			this.context.stroke()
		}

	}
}

export default HiHat