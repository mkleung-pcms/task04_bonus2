let x = -1
let y = -1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        x += 1
        if (x > 4) {
            x = 0
        }
        if (y < 0) {
            y = 0
        }
        led.plot(x, y)
        basic.pause(500)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        y += 1
        if (y > 4) {
            y = 0
        }
        if (x < 0) {
            x = 0
        }
        led.plot(x, y)
        basic.pause(500)
    }
})
