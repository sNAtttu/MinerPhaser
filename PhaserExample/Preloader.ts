module Miner {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;

        preload() {
 
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite((1920/3), (1080/2), 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
 
            //  Load our actual games assets
            this.load.image('titlepage', 'Assets/Images/Menu/titlepage.jpg');
            this.load.image('logo', 'Assets/Images/Menu/logo.png');
            this.load.audio('gameMusic', 'Assets/Audio/GameBackground.wav', true);
            this.load.audio('titleMusic', 'Assets/Audio/StartScreenAudio.wav', true);
            this.load.spritesheet('playerIdle', 'Assets/Images/Player/playerIdle.png', 61, 62);
            this.load.spritesheet('player', 'Assets/Images/Player/playerRunning.png', 65, 77);
            this.load.image('level1', 'Assets/Images/World/level1.png');

        }

        create() {

            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);

        }

        startMainMenu() {

            this.game.state.start('MainMenu', true, false);

        }

    }

}