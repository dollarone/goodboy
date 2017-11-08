"use strict"

import Particle from './particle.js'

class ParticleManager {
	constructor() {

		this.totalParticles = 2700
		this.particles = []
		for(let i = 0; i < this.totalParticles; i++) {
			this.particles.push(new Particle())
		}
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.getRandomArbitrary = this.getRandomArbitrary.bind(this)
	}

	update() {
		for(let i = 0; i < this.totalParticles; i++) {
			if (this.particles[i].dead == false) {
				this.particles[i].update()
			}
		}
	}

	render() {
		for(let i = 0; i < this.totalParticles; i++) {
			if (this.particles[i].dead == false) {
				this.particles[i].render()
			}
		}
	}

	explode(col, x, y, amount, speed, lifeTime) {
		let found = 0
		let i = 0
		while (found < amount) {
			if (this.particles[i].dead == true) {
				this.particles[i].colour = col
				this.particles[i].x = x
				this.particles[i].y = y
				this.particles[i].direction = found / amount * 180 + this.getRandomArbitrary(1,5)
				this.particles[i].speed = speed  + this.getRandomArbitrary(0,1)
				this.particles[i].lifeTime = lifeTime  + this.getRandomArbitrary(-1,2)
				this.particles[i].dead = false
				
				found += 1
			}
			i += 1
		}
	}
	getRandomArbitrary(min, max) {
  		return Math.random() * (max - min) + min;
	}	
}

export default ParticleManager