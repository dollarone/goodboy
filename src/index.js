"use strict"

import Main from './app/main.js'
import './styles/main.css'
import MainLoop from './app/mainloop.js'
import CPlayer from './app/player-small.js'
import Blob from './app/Blob.js'

let hihat_sound = document.getElementById("hihat")
let snare_sound = document.getElementById("snare")
let bass_sound = document.getElementById("bass")
let crash_sound = document.getElementById("crash")
let song1_sound = document.getElementById("song1")
let bell_sound = document.getElementById("bell")

function startDemo() {


  var bell_src = {
      songData: [
        { // Instrument 0
          i: [
          0, // OSC1_WAVEFORM
          255, // OSC1_VOL
          152, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          152, // OSC2_SEMI
          12, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          2, // ENV_ATTACK
          0, // ENV_SUSTAIN
          60, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          255, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          47, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          157, // FX_DELAY_AMT
          2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {n: [127],
             f: []}
          ]
        },  
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },      
        
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 2  // End pattern
    };

    var snare_src = {
      songData: [
        { // Instrument 0
          i: [
          0, // OSC1_WAVEFORM
          160, // OSC1_VOL
          128, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          51, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          210, // NOISE_VOL
          4, // ENV_ATTACK
          7, // ENV_SUSTAIN
          41, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          60, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          255, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          61, // FX_PAN_AMT
          5, // FX_PAN_FREQ
          8, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {n: [127],
             f: []}
          ]
        },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },      
	  ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 2  // End pattern
    };

    var bass_src = {
      songData: [
        { // Instrument 0
          i: [
          0, // OSC1_WAVEFORM
          255, // OSC1_VOL
          116, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          116, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          0, // NOISE_VOL
          4, // ENV_ATTACK
          6, // ENV_SUSTAIN
          35, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          14, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          0, // FX_DELAY_AMT
          0 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {n: [120],
             f: []}
          ]
        },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },      
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 2  // End pattern
    };
    // This music has been exported by SoundBox. You can use it with
    // http://sb.bitsnbites.eu/player-small.js in your own product.

    // See http://sb.bitsnbites.eu/demo.html for an example of how to
    // use it in a demo.

    // Song data
    var song = {
      songData: [
        { // Instrument 0
          i: [
          2, // OSC1_WAVEFORM
          100, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          201, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          5, // ENV_ATTACK
          6, // ENV_SUSTAIN
          58, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          195, // LFO_AMT
          6, // LFO_FREQ
          1, // LFO_FX_FREQ
          2, // FX_FILTER
          135, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          147, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          121, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,3,3,3,3,2,2,2,2],
          // Columns
          c: [
            {n: [149,149,,,,,,,,,,,,,,,,,,,,,,,147],
             f: []},
            {n: [142,,,,,,,,,,,,,,,,,,,,,,,,144],
             f: []},
            {n: [139,139,,,,,,,,,,,,,,,,,,,,,,,144],
             f: []},
            {n: [142,,,,,,,,,,,,,,,,,,,,,,,,140,140],
             f: []}
          ]
        },
        { // Instrument 1
          i: [
          2, // OSC1_WAVEFORM
          100, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          201, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          0, // ENV_ATTACK
          6, // ENV_SUSTAIN
          29, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          195, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          3, // FX_FILTER
          50, // FX_FREQ
          184, // FX_RESONANCE
          119, // FX_DIST
          244, // FX_DRIVE
          147, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          84, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,3,3,3,3,2,2,2,2,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,3,3,3,3,2,2,2,2],
          // Columns
          c: [
            {n: [113,,125,,113,,125,,113,,125,,113,,125,,113,,125,,113,,125,,111,,123,,111,,123],
             f: []},
            {n: [118,,130,,118,,130,,118,,130,,118,,130,,118,,130,,118,,130,,120,,132,,120,,132],
             f: []},
            {n: [115,,127,,115,,127,,115,,127,,115,,127,,115,,127,,115,,127,,120,,132,,120,,132],
             f: []},
            {n: [118,,130,,118,,130,,118,,130,,118,,130,,118,,130,,118,,130,,116,,128,,116,,128],
             f: []}
          ]
        },
        { // Instrument 2
          i: [
          1, // OSC1_WAVEFORM
          27, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          1, // OSC2_WAVEFORM
          99, // OSC2_VOL
          128, // OSC2_SEMI
          9, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          7, // ENV_ATTACK
          5, // ENV_SUSTAIN
          52, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          255, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          47, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          146, // FX_DELAY_AMT
          2 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,3,3,3,3,2,2,2,2],
          // Columns
          c: [
            {n: [125,,,,132,,,,130,,,,132,,,,125,,,,132,,,,123,,,,128],
             f: []},
            {n: [118,,,,125,,,,123,,,,125,,,,121,,,,125,,,,120,,,,121],
             f: []},
            {n: [115,,,,122,,,,120,,,,122,,,,118,,,,122,,,,125,,,,113],
             f: []},
            {n: [118,,,,125,,,,123,,,,125,,,,121,,,,125,,,,113,,,,116],
             f: []}
          ]
        },
        { // Instrument 3
          i: [
          1, // OSC1_WAVEFORM
          95, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          1, // OSC2_WAVEFORM
          191, // OSC2_VOL
          116, // OSC2_SEMI
          9, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          6, // ENV_ATTACK
          22, // ENV_SUSTAIN
          34, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          69, // LFO_AMT
          3, // LFO_FREQ
          1, // LFO_FX_FREQ
          1, // FX_FILTER
          23, // FX_FREQ
          167, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          77, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          25, // FX_DELAY_AMT
          6 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,,,,,,,,,,,,,,,,,,,,,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,3,3,3,3,2,2,2,2],
          // Columns
          c: [
            {n: [137,,139,,142,,140,,137,,139,,135,,139,,137,,139,,142,,140,,137,,139,,135,,139],
             f: []},
            {n: [130,,132,,130,,132,,128,,130,,128,,127,,130,,132,,130,,132,,128,,130,,128,,127],
             f: []},
            {n: [127,,128,,130,,128,,125,,127,,123,,125,,127,,128,,130,,128,,125,,127,,123,,125],
             f: []},
            {n: [130,,132,,133,,130,,128,,130,,125,,128,,130,,128,,127,,128,,125,,128,,123,,125],
             f: []}
          ]
        },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 49  // End pattern
    };

    var hihat_src = {
      songData: [
        { // Instrument 0
          i: [
          2, // OSC1_WAVEFORM
          40, // OSC1_VOL
          148, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          0, // OSC2_VOL
          140, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          255, // NOISE_VOL
          0, // ENV_ATTACK
          15, // ENV_SUSTAIN
          29, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          3, // FX_FILTER
          161, // FX_FREQ
          192, // FX_RESONANCE
          0, // FX_DIST
          32, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          71, // FX_DELAY_AMT
          1 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {n: [209],
             f: []}
          ]
        },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },      
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 2  // End pattern
    };

    // This music has been exported by SoundBox. You can use it with
    // http://sb.bitsnbites.eu/player-small.js in your own product.

    // See http://sb.bitsnbites.eu/demo.html for an example of how to
    // use it in a demo.

    // Song data
    var crash_src = {
      songData: [
        { // Instrument 0
          i: [
          0, // OSC1_WAVEFORM
          167, // OSC1_VOL
          94, // OSC1_SEMI
          1, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          92, // OSC2_SEMI
          0, // OSC2_DETUNE
          1, // OSC2_XENV
          255, // NOISE_VOL
          0, // ENV_ATTACK
          0, // ENV_SUSTAIN
          196, // ENV_RELEASE
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          255, // FX_FREQ
          0, // FX_RESONANCE
          3, // FX_DIST
          48, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          25, // FX_DELAY_AMT
          1 // FX_DELAY_TIME
          ],
          // Patterns
          p: [1],
          // Columns
          c: [
            {n: [144],
             f: []}
          ]
        },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
        { i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },
		{ i: [], p: [], c: [] },      
      ],
      rowLen: 5513,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 2  // End pattern
    };

  //----------------------------------------------------------------------------
  // Demo program section
  //----------------------------------------------------------------------------

  	// Initialize music generation (player).
  	var player = new CPlayer();
  	player.init(hihat_src);
  	var done = false;
  	while(!done) {    	
    	done = player.generate() >= 1;
    	if (done) {
    		var wave = player.createWave();
    		hihat_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
    		hihat_sound.volume = "0.4"
    	}
	}

  	player.init(snare_src);
  	done = false;
  	while(!done) {
    	done = player.generate() >= 1;
    	if (done) {
    		var wave = player.createWave();
    		snare_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
    		snare_sound.volume = "0.5"
    	}
	}

  	player.init(song);
  	done = false;
	while(!done) {
	 	if (done) {
    		return;
    	}
    	done = player.generate() >= 1;

    	if (done) {
    		var wave = player.createWave();
    		song1_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
    		song1_sound.loop = true
    	}
	}
  	

	player.init(bass_src);
  	done = false
  	while(!done) {
    	done = player.generate() >= 1;

	    if (done) {
      		var wave = player.createWave();
      		bass_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));

  		}
  	}
	player.init(crash_src);
  	done = false
  	while(!done) {
    	done = player.generate() >= 1;

	    if (done) {
      		var wave = player.createWave();
      		crash_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
      		crash_sound.volume = "0.14"

  		}
  	}
	player.init(bell_src);
  	done = false
  	while(!done) {
    	done = player.generate() >= 1;

	    if (done) {
      		var wave = player.createWave();
      		bell_sound.src = URL.createObjectURL(new Blob([wave], {type: "audio/wav"}));
      		bell_sound.volume = "0.5"
  		}
  	}

}
//startDemo()

this.game = new Main()

a.onclick=e=>{ 
	[click_x,click_y]=update_mouse(e)
	this.game.click() 
}

MainLoop.setUpdate(this.game.update).setDraw(this.game.render)
MainLoop.start()
/*
function stateChange(newState) {
    setTimeout(function () {
    	document.getElementById("i").style.display = "none";
		song1_sound.play()
        MainLoop.start()
    }, 5000);
}
stateChange()
*/