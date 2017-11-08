"use strict"

class Lamp {
	constructor(type, pos, player) {
		let canvas = document.getElementById('a')
		this.context = canvas.getContext('2d')
		this.player = player
		this.x = -1
		this.y = -1
		this.radius = 30
		this.maxRadius = this.radius
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.hit = this.hit.bind(this)
		this.click = this.click.bind(this)
		this.step = 0
		this.dead = false
		this.pos = pos

		this.activeBeat = -1

		this.colour = '#733'
		this.beatColour = '#433B67'//'#605885'//pink'#F493F2'
		this.backColour = '#000'
		this.currentColour = this.colour

		if (type == "hihat") {
			this.hitColourInBeat = '#EC47E0' // '#B94CE1'
			this.hitColour = '#C500C0' //'#991CB1'
			this.colour = '#9600CD'
			this.cost = 10000
			this.upkeep = 1
		}
		else if (type == "snare") {
			this.hitColourInBeat = '#21FF76' //'#B564E3'
			this.hitColour = '#00B947' //'#A554D3'
			//this.colour = '#A442DC'
			this.cost = 20000
			this.upkeep = 2
		}
		else if (type == "bass") {
			this.hitColourInBeat = '#00B5EC' //'#605884'
			this.hitColour = '#4D4DFF' //'#504874'
			//this.colour = '#504874'
			this.cost = 30000
			this.upkeep = 3

		}
	}

	update(beat) {
		if (this.dead == false) {
			this.step++
			if (this.pos == beat) {
				if (this.hit(beat)) {
					this.currentColour = this.hitColourInBeat
				}
				else {
					this.currentColour = this.beatColour
				}
			}
			else if(this.activeBeat > -1) {
				this.currentColour = this.hitColour
			}
			else { 
				this.currentColour = this.backColour
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

	hit(beat) {
		if (this.activeBeat == beat) {
			return true
		}
		else {
			return false
		}
	}

	click(beat) {
		if (this.activeBeat == -1) {
			if (this.player.money >= this.cost) {
				this.activeBeat = beat
				this.currentColour = this.hitColour
				this.player.money -= this.cost
			}
		}
		else {
			this.activeBeat = -1
			this.currentColour = this.backColour
			this.player.money += this.cost/2
		}
	}
}

export default Lamp