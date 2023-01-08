input.onButtonPressed(Button.A, function () {
    if (time - 5 >= 0) {
        time += -5
        basic.showNumber(time)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.AB, function () {
    while (time > 0) {
        time += -1
        basic.showNumber(time)
        basic.pause(60000)
    }
    basic.showIcon(IconNames.Happy)
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    time += 5
    basic.showNumber(time)
})
let time = 0
time = 5
for (let index = 0; index < 1; index++) {
    basic.pause(300)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(300)
    basic.showIcon(IconNames.Heart)
    basic.pause(300)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
led.setBrightness(100)
loops.everyInterval(500, function () {
	
})
