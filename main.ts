namespace SpriteKind {
    export const wizard = SpriteKind.create()
    export const yum = SpriteKind.create()
    export const mmmmm = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onDestroyed(SpriteKind.wizard, function (sprite) {
    mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.wizard)
    mySprite4.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
scene.onOverlapTile(SpriteKind.mmmmm, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (true) {
        _8.destroy()
    }
    _8.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mmmmm, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(10)
    _8.destroy(effects.fire, 500)
    mySprite.say("yahooo", 200)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (true) {
        mySprite6.destroy()
    }
    mySprite6.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    mySprite5.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
function show_instruction (text: string) {
    game.showLongText("move with the arrow keys and dodge the ghosts!", DialogLayout.Bottom)
    game.showLongText("stay alive for as long as possible and make a highscore by eating the food!", DialogLayout.Bottom)
    game.showLongText("Food will keep reappear 4 times so keep eating them!", DialogLayout.Bottom)
    music.baDing.play()
}
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    mySprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    mySprite6.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
scene.onOverlapTile(SpriteKind.yum, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (true) {
        _7.destroy()
    }
    _7.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
scene.onOverlapTile(SpriteKind.wizard, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (true) {
        mySprite4.destroy()
    }
    mySprite4.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(10)
    mySprite5.destroy(effects.fire, 500)
    mySprite.say("yahooo", 200)
})
sprites.onDestroyed(SpriteKind.yum, function (sprite) {
    _7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.yum)
    _7.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yum, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(10)
    _7.destroy(effects.fire, 500)
    mySprite.say("yahooo", 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(10)
    mySprite6.destroy(effects.fire, 500)
    mySprite.say("yahooo", 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.wawawawaa.play()
    mySprite.say("ouch!", 500)
    game.showLongText("Youve Been Caught By The Ghosts, Restart The Game To Get a New HighScore", DialogLayout.Bottom)
    game.over(false, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite2.setPosition(61, 101)
})
sprites.onDestroyed(SpriteKind.mmmmm, function (sprite) {
    _8 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.mmmmm)
    _8.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (true) {
        mySprite5.destroy()
    }
    mySprite5.setPosition(Math.randomRange(10, 230), Math.randomRange(10, 230))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wizard, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(10)
    mySprite4.destroy(effects.fire, 500)
    mySprite.say("yahooo", 200)
})
let _8: Sprite = null
let _7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(15)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303030300000000000000030000000000030300000303030000000300030003000303000003000000000303000000030003030300030003030000000003030300030300000000030300000300000000000303000300000000000303000000000003030003000000000000000000030300030300030003030003030303000000000303000300030000000000000000030003030003000300030300030003000300030300000000000303000300030000000303000303000000000000000300000003030000030000030303000303000300030300000000000000000000000000000303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . 2 . . . . . 2 
2 . . 2 2 2 . . . 2 . 2 . 2 . 2 
2 . . 2 . . . . 2 2 . . . 2 . 2 
2 2 . 2 . 2 2 . . . . 2 2 2 . 2 
2 . . . . 2 2 . . 2 . . . . . 2 
2 . 2 . . . . . 2 2 . . . . . 2 
2 . 2 . . . . . . . . . 2 2 . 2 
2 . 2 . 2 2 . 2 2 2 2 . . . . 2 
2 . 2 . 2 . . . . . . . . 2 . 2 
2 . 2 . 2 . 2 2 . 2 . 2 . 2 . 2 
2 . . . . . 2 2 . 2 . 2 . . . 2 
2 . 2 2 . . . . . . . 2 . . . 2 
2 . . 2 . . 2 2 2 . 2 2 . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleInsignia],
            TileScale.Sixteen
        ))
music.baDing.play()
show_instruction("abc")
music.baDing.play()
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
. . . . . . f b d b f d d f b d b f . . . . . . 
. . . . . . f c d c f 1 1 f c d c f . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f f f c d b 1 b d f f f f . . . . . 
. . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
. . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
. . . . f b f b f f f f f f b f b f b f . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
mySprite2.setPosition(61, 101)
mySprite3.setPosition(36, 39)
mySprite4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . c a a a c . . . . . . . 
. . . c c f a b b c . . . . . . 
. . . b f f b f a a . . . . . . 
. . . b b a b f f a . . . . . . 
. . . c b f b b a c . . . . . . 
. . . . b a f c c . . . . . . . 
. . . . . b b c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.wizard)
mySprite4.setPosition(129, 120)
mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c b a c . . . . . . 
. . . . c c b c f a c . . . . . 
. . . . a f b b b a c . . . . . 
. . . . a f f b a f c c . . . . 
. . . . c b b a f f c . . . . . 
. . . . . b b a f a . . . . . . 
. . . . . . c b b . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
mySprite5.setPosition(24, 99)
mySprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . c c . . . . . . 
. . . . . c a a a a . . . . . . 
. . . . . a a f f b a . . . . . 
. . . . c a b f f c b . . . . . 
. . . . c b b b a f c b . . . . 
. . . . c b a c a b b b . . . . 
. . . . . b b f f a a c . . . . 
. . . . . . a a b b c . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
mySprite6.setPosition(200, 230)
_7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c . . . . . . . . 
. . . . c a f b c . . . . . . . 
. . . . b f f b c c . . . . . . 
. . . a a f b a b a c . . . . . 
. . . c a c b b f f b . . . . . 
. . . . b f f b f a b . . . . . 
. . . . a f f b b b a . . . . . 
. . . . . a b b c c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.yum)
_7.setPosition(20, 230)
_8 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . a b a a . . . . . . 
. . . . . c b a f c a c . . . . 
. . . . c b b b f f a c c . . . 
. . . . b b f a b b a a c . . . 
. . . . c b f f b a f c a . . . 
. . . . . c a a c b b a . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.mmmmm)
_8.setPosition(230, 20)
music.playMelody("D C E D C E D E ", 120)
mySprite2.follow(mySprite, 76)
mySprite3.follow(mySprite, 78)
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
