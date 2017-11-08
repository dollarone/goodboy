"use strict"

import Bullet from './bullet.js'

class BulletManager {
	constructor(particleManager, player) {

		this.totalBullets = 300
		this.bullets = []
		for(let i = 0; i < this.totalBullets; i++) {
			this.bullets.push(new Bullet(particleManager, player))
		}
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.activate = this.activate.bind(this)
		this.killAll = this.killAll.bind(this)
	}

	update() {
		for(let i = 0; i < this.totalBullets; i++) {
			if (this.bullets[i].dead == false) {
				this.bullets[i].update()
			}
		}
	}

	render() {
		for(let i = 0; i < this.totalBullets; i++) {
			if (this.bullets[i].dead == false) {
				this.bullets[i].render()
			}
		}
	}

	killAll() {
		for(let i = 0; i < this.totalBullets; i++) {
			this.bullets[i].damage(1)
		}
	}

	activate(col, x, y, radius, speedX, speedY, reward) {
		let found = 0
		let amount = 1
		let i = 0
		while (found < amount) {
			if (this.bullets[i].dead == true) {
				this.bullets[i].currentColour = col
				this.bullets[i].x = x
				this.bullets[i].y = y
				this.bullets[i].radius = radius
				this.bullets[i].speedX = speedX
				this.bullets[i].speedY = speedY
				this.bullets[i].dead = false
				this.bullets[i].reward = reward
				this.bullets[i].hp = 1
				found += 1
			}
			i += 1
		}
	}
}

export default BulletManager