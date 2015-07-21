

window.onload=function(){
// test to make sure sound js is working properly
    if(!createjs.Sound.initializeDefaultPlugins()){return;};

    //setup how soundsjs works soundJS has the ability to preload sounds

    createjs.Sound.registerSound({id:"soundId",src:"music/03_Dungeon.ogg"});

    //listen for the file to load
    createjs.Sound.addEventListener("fileload", handleFileLoad);

    function handleFileLoad(event){
        // A sound has been loaded
        //once per every sound loaded

        console.log("preloaded:", event.src);

        //play the loaded sound

       // createjs.Sound.play(event.src);

    }



};


function playMusic(){


    //play the music when button is clicked
    createjs.Sound.play("soundId");



}
