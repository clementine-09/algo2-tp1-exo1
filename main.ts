input.onButtonPressed(Button.A, function () {
    led.unplot(PosX, 0)
    PosX = Math.max(0, PosX - 1)
    led.plot(PosX, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(PosX, 0)
    PosX = Math.min(4, PosX + 1)
    led.plot(PosX, 0)
})
let PosX = 0
PosX = 2
led.plot(PosX, 0)
let direction = 0
basic.forever(function () {
    basic.pause(500)
    led.unplot(PosX, 0)
    PosX += direction
    if (PosX >= 4) {
        direction = -1
    } else if (PosX <= 0) {
        direction = 1
    }
    led.plot(PosX, 0)
})
