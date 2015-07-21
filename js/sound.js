var soundID = "Dungeon";

function loadSound () {
    createjs.Sound.registerSound("music/03_Dungeon.ogg", soundID);
}

function playSound () {
    createjs.Sound.play(soundID);


}