"use strict"

class Bullet {
	constructor(particleManager, player) {
		this.player = player
		this.particleManager = particleManager
		this.canvas = document.getElementById('a')
		this.context = this.canvas.getContext('2d')
		this.x = -1
		this.y = -1
		this.radius = 3
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.damage = this.damage.bind(this)
		this.step = 0
		this.dead = true
		this.hp = 1
		this.colour = '#FFFF01'
		this.currentColour = this.colour
		this.speedX = 2
		this.speedY = 0
		this.reward = 200
	}

	update() {
		if (this.dead == false) {
			this.x += this.speedX
			this.y += this.speedY
			if (this.x > this.canvas.width+3 || this.x < -10 || this.y < -10 || this.y > this.canvas.height+9) {
				this.dead = true
			}
		}
	}

	render() {
		if (this.dead == false) {
	    	this.context.beginPath()
	    	this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
	    	this.context.fillStyle = this.currentColour
	    	this.context.fill()
	    }
	}

	damage(dmg) {
		this.hp -= dmg
		if (this.dead == false && this.hp == 0) {
			this.dead = true
			this.particleManager.explode(this.colour, this.x,this.y,this.radius*3,3,70)
			this.player.money += this.reward

		}
		
	}
}

export default Bullet