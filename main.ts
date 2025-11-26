info.onScore(1000, function () {
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Left, assets.tile`myTile`)) {
        tiles.setTileAt(location, assets.tile`myTile`)
        tiles.setWallAt(location, true)
        Win = sprites.create(img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(Win, location)
        Win.x += 15
        sprites.destroy(Win, effects.rings, 100)
        info.changeScoreBy(100)
    } else {
        tiles.setWallAt(location, true)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mariano,
    [img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . . 2 2 2 . . 2 2 2 . . . . . 
        . . e e e . . . . e e e . . . . 
        . e e e e . . . . e e e e . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . . 2 2 2 . . . e e e . . . . 
        . . e e e . . . . e e e e . . . 
        . e e e e . . . . . . . . . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . e e e . . . 2 2 2 . . . . . 
        . e e e e . . . . e e e . . . . 
        . . . . . . . . . e e e e . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . . 2 2 2 . . . e e e . . . . 
        . . e e e . . . . e e e e . . . 
        . e e e e . . . . . . . . . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . e e e . . . 2 2 2 . . . . . 
        . e e e e . . . . e e e . . . . 
        . . . . . . . . . e e e e . . . 
        `],
    1000,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Mariano,
    [img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 . d d . . e 
        e 2 2 2 2 2 2 2 2 2 2 2 2 2 e e 
        e 2 2 2 2 2 2 . 2 2 2 2 2 2 e e 
        e . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . . 2 2 2 . . . e e e . . . . 
        . . e e e . . . . e e e e . . . 
        . e e e e . . . . . . . . . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . e e e . . . 2 2 2 . . . . . 
        . e e e e . . . . e e e . . . . 
        . . . . . . . . . e e e e . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . . 2 2 2 . . . e e e . . . . 
        . . e e e . . . . e e e e . . . 
        . e e e e . . . . . . . . . . . 
        `,img`
        . . . . . 8 8 8 8 8 . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 . . . 
        . . . . 5 5 5 d d f d . . . . . 
        . . . 5 d 5 d d d f d d . . . . 
        . . . 5 d 5 5 d d d f d d d . . 
        . . . 5 5 d d d d f f f f . . . 
        . . . . d d d d d d d d . . . . 
        . . . 8 8 2 8 8 8 8 8 . . . . . 
        . . 8 8 8 2 8 8 2 8 8 8 . . . . 
        . 8 8 8 8 2 2 2 2 8 8 8 8 . . . 
        . d d 8 2 5 2 2 5 2 8 d d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . d d 2 2 2 2 2 2 2 2 d d . . . 
        . . e e e . . . 2 2 2 . . . . . 
        . e e e e . . . . e e e . . . . 
        . . . . . . . . . e e e e . . . 
        `],
    500,
    true
    )
    if (Mariano.isHittingTile(CollisionDirection.Bottom)) {
        Mariano.vy += -180
        Mariano.setImage(img`
            . . . . 8 8 8 8 8 8 8 8 8 . . . 
            . . . . 5 5 5 d d f d . . . . . 
            . . . 5 d 5 d d d f d d d . . . 
            . . . 5 d 5 5 d d d f d d d . . 
            . . . 5 5 d d d d f f f f . . . 
            . . . . . d d d d d d d . . . . 
            . . . . 8 8 2 8 8 8 8 . . . . . 
            . . . 8 8 8 2 8 8 2 8 8 8 . . . 
            . . 8 8 8 8 2 2 2 2 8 8 8 8 . . 
            . . d d 8 2 5 2 2 5 2 8 d d . . 
            . . d . d 2 2 2 2 2 2 d d d . . 
            . . . . 2 2 2 2 2 2 2 2 . . e e 
            e e e 2 2 2 2 2 2 2 2 2 2 e e e 
            e e 2 2 2 2 . . . . 2 2 2 2 e e 
            e e . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
function PlaceEnemies (col: number, row: number, vx: number) {
    mario = sprites.create(img`
        ........................
        .......fff..............
        ....fffff2f.............
        ..ffeeeee22ff...........
        .ffeeeeee222ff..........
        .feeeefffeeeef..........
        .fffffeee2222ef.........
        fffe222fffffe2f.........
        fffffffffeeefff.....cc..
        fefe44ebbf44eef...ccdc..
        .fee4d4bbfddef..ccddcc..
        ..feee4dddddfeecdddc....
        ...f2222222eeddcdcc.....
        ...f444445e44ddccc......
        ...ffffffffeeee.........
        ...fff...ff.............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mario, tiles.getTileLocation(col, row))
    mario.setBounceOnWall(true)
    mario.setVelocity(vx, 0)
}
function PlaceEnemies2 (col: number, row: number, vx: number) {
    mario = sprites.create(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, SpriteKind.Enemy)
    tiles.placeOnTile(mario, tiles.getTileLocation(col, row))
    mario.setBounceOnWall(true)
    mario.setVelocity(vx, 0)
}
function PlaceCoins (col: number, rom: number) {
    Win = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f . . 
        . . f f 5 5 5 5 5 5 5 5 5 f f . 
        . f . f 5 1 5 5 1 5 5 1 5 f . f 
        . f . f 5 5 5 1 5 5 1 5 5 f . f 
        . . f f 5 5 1 5 5 1 5 5 5 f f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . f f f 5 5 5 f f f . . . 
        . . . . . . f 2 2 8 f . . . . . 
        . . . . . . f 8 8 8 f . . . . . 
        . . . . . . f 8 2 8 f . . . . . 
        . . . . . . f 8 2 8 f . . . . . 
        . . . . f f f 2 2 8 f f f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(Win, tiles.getTileLocation(149, 7))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite.vx > 10) {
        sprites.destroy(otherSprite, effects.disintegrate, 500)
        info.changeScoreBy(999)
    } else {
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        pause(1000)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    game.gameOver(true)
    game.setGameOverMessage(true, "YOU WIN!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let mario: Sprite = null
let Win: Sprite = null
let Mariano: Sprite = null
info.startCountdown(90)
info.setLife(1)
info.setScore(0)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
Mariano = sprites.create(img`
    . . . . . 8 8 8 8 8 . . . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 5 5 5 d d f d . . . . . 
    . . . 5 d 5 d d d f d d d . . . 
    . . . 5 d 5 5 d d d f d d d . . 
    . . . 5 5 d d d d f f f f . . . 
    . . . . . d d d d d d d . . . . 
    . . . . 8 8 8 8 8 8 8 . . . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 . . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . d d 8 8 8 8 8 8 8 8 d d . . 
    . . d d d 8 8 8 8 8 8 d d d . . 
    . . d d 8 8 8 8 8 8 8 8 d d . . 
    . . . . 8 8 8 . . 8 8 8 . . . . 
    . . . e e e . . . . e e e . . . 
    . . e e e e . . . . e e e e . . 
    `, SpriteKind.Player)
controller.moveSprite(Mariano, 100, 0)
tiles.placeOnTile(Mariano, tiles.getTileLocation(1, 14))
scene.cameraFollowSprite(Mariano)
PlaceEnemies(45, 14, 45)
PlaceEnemies(67, 14, 45)
PlaceEnemies(24, 14, 45)
PlaceEnemies(102, 15, 100000)
PlaceEnemies(102, 15, 100000)
PlaceEnemies(114, 15, 100000)
PlaceEnemies(120, 15, 100000)
PlaceEnemies(125, 15, 100000)
PlaceEnemies(129, 15, 100000)
PlaceEnemies(133, 15, 100000)
PlaceEnemies(118, 15, 100000)
PlaceEnemies(83, 15, 100000)
PlaceEnemies(83, 15, 100000)
PlaceEnemies(83, 15, 100000)
PlaceEnemies(15, 15, 100000)
PlaceEnemies(15, 15, 100000)
PlaceEnemies(15, 15, 100000)
PlaceEnemies(95, 15, 100000)
PlaceEnemies(95, 15, 100000)
PlaceEnemies(95, 15, 100000)
PlaceEnemies2(148, 7, 100)
Mariano.ay = 300
PlaceCoins(149, 7)
