"use strict"

import Bullet from './bullet.js'
import Player from './player.js'
import ParticleManager from './particlemanager.js'
import BulletManager from './bulletmanager.js'

class Main {
	constructor() {
//		this.song1_sound = document.getElementById("song1")

		this.canvas = document.getElementById('a')
		this.context = this.canvas.getContext('2d')

		this.step = 0
		this.update = this.update.bind(this)
		this.render = this.render.bind(this)
		this.keyEventDown = this.keyEventDown.bind(this)
		this.keyEventUp = this.keyEventUp.bind(this)

		this.startGame = this.startGame.bind(this)

		this.enemies = []

		this.gameStarted = false

		this.particleManager = new ParticleManager()
		this.player = new Player(20,20, this.particleManager)
		this.bulletManager = new BulletManager(this.particleManager, this.player)

		this.screen = this.createArray(100,100)
		this.map = this.createArray(200, 160)

		for(let i=0; i<150; i++) {
			this.map[i][i] = true
			this.map[97][i] = true
			this.map[199][i+10] = true
		}
		this.leftPressed = false
		this.rightPressed = false
		this.jumpPressed = false
		window.addEventListener('keydown', this.keyEventDown, false)
		window.addEventListener('keyup', this.keyEventUp, false)
		this.mainLoop = null

	}
	createArray(length) {
    	let arr = new Array(length || 0),
        i = length;

    	if (arguments.length > 1) {
        	let args = Array.prototype.slice.call(arguments, 1);
        	while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
    	}

    	return arr;
	}

	
	keyEventDown(e) {
		switch (e.keyCode) {
			case 37:
			
				this.leftPressed = true
				break
			case 38:
				this.jumpPressed = true
				break
			case 39:
				this.rightPressed = true
				break
			default:
		}
	}
	keyEventUp(e) {
		switch (e.keyCode) {
			case 37:
				this.leftPressed = false
				break
			case 38:
				this.jumpPressed = false
				break
			case 39:
				this.rightPressed = false
				break
			default: //alert(e.keyCode)
		}
	}
	setMainLoop(mainLoop) {
		this.mainLoop = mainLoop
	}
	update() {
		this.step = this.step + 1
		this.player.update(this.mainLoop.getSimulationTimestep()/1000, this.map, this.enemies)
		if (this.step === 100) {
			//document.getElementById("i").style.display = "none";
			this.state = 1
		}
		if (this.player.dead == false && this.win == false) {
//				this.bulletManager.activate('#FFFF01', -1, this.canvas.height / 2, 3, 2, 0, this.smallBulletReward)

		}
//		this.bulletManager.update()
//		this.particleManager.update()
		if (this.jumpPressed) {
			this.player.jumpPressed()
		}

		if (this.leftPressed) {
			this.player.x -= 1
			
//			this.leftPressed = false

		}
		else if (this.rightPressed) {
			this.player.x += 1
	//		this.rightPressed = false

		}

		if ((this.player.dead || this.win) && this.fontSize < 120) {
			this.fontSize += 1
		}

	}

	render() {
		this.context.fillStyle = "#171"
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)
		this.context.fillStyle = "#000"
		for (let y=0; y<100; y++) {
			for (let x=0; x<100; x++) {
				if (this.map[y][x]) {
					
					this.context.fillRect(x/100*this.canvas.width,y/100*this.canvas.height,this.canvas.height/100,this.canvas.height/100)
				}
			}
		}

		this.bulletManager.render()
		this.player.render()
		this.particleManager.render()
		this.context.font = "30px Verdana"

		if (this.gameStarted == false) {
			this.context.strokeStyle = this.gradient
//			this.context.strokeText(this.tutorialText, this.textX, 800)
		}
		if (this.player.dead) {
			this.context.font = this.fontSize + "px Verdana"
			this.context.strokeStyle = "#000000";
			this.context.strokeText("you lose", 500 - this.fontSize*2, 720);
		}
		else if (this.win) {
			this.context.font = this.fontSize + "px Verdana"
			this.context.strokeStyle = "#000000";
			this.context.strokeText("you win", 500 - this.fontSize*2, 720);
		}		
	}


	startGame() {
		this.bulletManager.killAll()
		this.gameStarted = true
		this.step = 0
		this.player.money = 100000
		this.player.hp = 20
		this.player.dead = false
		this.fontSize = 1
		this.win = false
		this.startButton.radius = 50
		this.level = 1
	}

}

export default Main