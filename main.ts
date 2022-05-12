input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
})
let sprite: game.LedSprite = null
if (pins.analogReadPin(AnalogPin.P0) < 400) {
    sprite.move(1)
} else if (pins.analogReadPin(AnalogPin.P1) < 900) {
	
} else {
	
}
sprite.move(1)
basic.forever(function () {
    sprite = game.createSprite(pins.analogReadPin(AnalogPin.P0), pins.analogReadPin(AnalogPin.P1))
})
