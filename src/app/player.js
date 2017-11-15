"use strict"

class Player {
	constructor(x,y,particleManager) {
		this.particleManager = particleManager
		this.canvas = document.getElementById('a')
		this.context = this.canvas.getContext('2d')
		this.x = x
		this.y = y
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.damage = this.damage.bind(this)
		this.hurt = this.hurt.bind(this)
		this.dead = false
		this.hp = 20
		this.hurtCountdown = 0
		this.hurtCountdownSteps = 20
		this.speed = 0
		this.attack = 1
		this.money = 0
		this.step = 0
		this.radius = 20
		// bottom up
		this.bitmap = [
						[false,false,false,true,true,false,false,false],
						[false,false,false,true,true,true,false,false],
						[false,false,false,true,true,false,false,false],
						[false,true,true,true,true,true,true,false],
						[true,false,true,true,true,true,false,true],
						[true,false,true,true,true,true,false,true],
						[false,false,true,true,true,true,false,false],
						[false,false,true,false,false,true,false,false],
						[false,false,true,false,false,true,false,false],
						[false,false,true,true,false,true,true,false] ]
		this.bitmapY = 10
		this.bitmapX = 8
	}

	update(enemies) {
		if (this.triggerCountdown == 1) {
			this.triggerCountdown = 0	
		}
		else if (this.triggerCountdown > 1) {
			this.triggerCountdown -= 1
		}


		if (this.dead == false) {
			this.step++
			this.x += this.speed
			if (this.hurtCountdown == 1) {
				this.hurtCountdown -= 1
			}
			if (this.hurtCountdown > 1) {
				this.hurtCountdown -= 1
			}

			for(let i=0; i<enemies.length; i++) {

				let dx = this.x - enemies[i].x
				let dy = this.y - enemies[i].y
				let distance = Math.sqrt(dx * dx + dy * dy)
				if (distance < (this.radius + enemies[i].radius)
					&& enemies[i].dead == false) {
					//enemies[i].damage(this.attack)
					//this.damage(1)
				}
			}
		}
	}
	render() {
		for (let y=1; y<=this.bitmapY; y++) {
			for (let x=0; x<this.bitmapX; x++) {
				if (this.bitmap[this.bitmapY-y][x]) {
					//this.screen[this.y-y][x] = true
					
					this.context.fillRect((this.x+x)/100*this.canvas.width,(this.y-y)/100*this.canvas.height,this.canvas.height/100,this.canvas.height/100)
				}
			}
		}

	}
	renderold() {
		if (this.dead == false) {
	    	this.context.beginPath()
	    	this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
	    	this.context.fillStyle = '#040'
	    	this.context.fill()
	    	this.context.beginPath()
	    	this.context.arc(this.x-4, this.y-2, 2, 0, 2 * Math.PI, false)
	    	this.context.fillStyle = '#000'
	    	this.context.fill()
	    	this.context.beginPath()
	    	this.context.arc(this.x+4, this.y-2, 2, 0, 2 * Math.PI, false)
	    	this.context.fillStyle = '#000'
	    	this.context.fill()
	    	this.context.beginPath()
	    	this.context.lineWidth = 2
	    	this.context.strokeStyle = '#000'
	    	if (this.hurtCountdown == 0) {
		    	this.context.moveTo(this.x-6, this.y+2)
	    		this.context.bezierCurveTo(this.x-6, this.y+7, this.x+6, this.y+7, this.x+6, this.y+2)
	    	}
	    	else {
	    		this.context.moveTo(this.x-5, this.y+6)
				this.context.bezierCurveTo(this.x-5, this.y+2, this.x+5, this.y+2, this.x+5, this.y+6)
	    	}
	    	this.context.stroke()
	    }
	}

	damage(dmg) {
		this.hp -= dmg
		if (this.hp == 0) {
			this.dead = true
			this.particleManager.explode(this.colour, this.x,this.y,this.radius*3,3,70)

		}
		this.hurt()
	}

	hurt() {
		this.hurtCountdown = this.hurtCountdownSteps
	}
}

export default Player