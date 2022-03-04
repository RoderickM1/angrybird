function makeRedBird () {
    Redbirds = darts.create(img`
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . . 2 . 2 2 . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        f . 2 2 2 2 f f 2 f f 2 2 2 2 . 
        . f 2 2 2 2 1 1 2 1 1 2 2 2 2 . 
        . f 2 2 2 2 1 f 2 1 f 2 2 2 2 . 
        f . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 2 2 2 2 2 5 5 2 2 2 2 2 2 . 
        f . 2 2 2 2 2 5 5 5 2 2 2 2 2 . 
        f . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 d d d d 2 2 2 2 . . 
        . . . . 2 d d d d d d d 2 . . . 
        . . . . . d d d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(Redbirds.sprite, tiles.getTileLocation(1, 17))
    Redbirds.controlWithArrowKeys()
    Redbirds.setTrace()
    Redbirds.sprite.ay = 200
}
function Enemies () {
    Enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 . . . 7 7 7 . . . . 
        . 7 7 6 6 7 . . . 7 6 6 7 7 . . 
        . 7 6 7 7 7 7 7 7 7 7 7 6 7 . . 
        . 7 6 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 6 6 6 6 6 6 7 7 7 7 7 
        7 7 1 1 f 6 7 7 7 7 6 f 1 1 7 7 
        7 7 1 1 f 6 7 7 7 7 6 f 1 1 7 7 
        7 7 7 7 7 6 6 6 6 6 6 7 7 7 7 7 
        7 7 7 7 f 1 f f 1 f f 1 7 7 7 7 
        . 7 7 7 f f f f f f f f 7 7 7 . 
        . . 7 7 7 7 7 f f f 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . 7 7 . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Enemy1, assets.tile`pig`)
    Enemy2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 . . . 7 7 7 . . . . 
        . 7 7 6 6 7 . . . 7 6 6 7 7 . . 
        . 7 6 7 7 7 7 7 7 7 7 7 6 7 . . 
        . 7 6 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 6 6 6 6 6 6 7 7 7 7 7 
        7 7 1 1 f 6 7 7 7 7 6 f 1 1 7 7 
        7 7 1 1 f 6 7 7 7 7 6 f 1 1 7 7 
        7 7 7 7 7 6 6 6 6 6 6 7 7 7 7 7 
        7 7 7 7 f 1 f f 1 f f 1 7 7 7 7 
        . 7 7 7 f f f f f f f f 7 7 7 . 
        . . 7 7 7 7 7 f f f 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . . . 7 7 . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(Enemy2, assets.tile`myTile5`)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Redbirds.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Redbirds.throwDart()
})
function map1 () {
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`level1`)
}
let Redbirds: Dart = null
let Enemy1: Sprite = null
let Enemy2: Sprite = null
map1()
makeRedBird()
Enemies()
scene.cameraFollowSprite(Enemy2)
pause(3000)
scene.cameraFollowSprite(Enemy1)
pause(3000)
scene.cameraFollowSprite(Redbirds.sprite)
game.splash("Press A to throw and B to stop")
