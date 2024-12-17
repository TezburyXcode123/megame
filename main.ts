input.onButtonPressed(Button.A, function () {
    sprite = 0
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        sprite.ifOnEdgeBounce()
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.X, 1)
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Blocking)
})
let sprite = 0
basic.showLeds(`
    # # # # #
    . . . . #
    # . . . #
    . . . . #
    # # # # #
    `)
radio.setGroup(165)
game.setLife(4)
basic.forever(function () {
    if (sprite.isTouching(sprite)) {
        game.addScore(randint(0, 10))
        music.play(music.stringPlayable("C5 B C5 G C5 A F G ", 70), music.PlaybackMode.LoopingInBackground)
    }
})
