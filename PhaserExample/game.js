window.onload = () => {
    var game = new Miner.Game();
};
var Miner;
(function (Miner) {
    class Boot extends Phaser.State {
        preload() {
            this.load.image('preloadBar', 'Assets/Images/Menu/loader.png');
        }
        create() {
            //  Unless you specifically need to support multitouch I would recommend setting this to 1
            this.input.maxPointers = 1;
            //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
            this.stage.disableVisibilityChange = true;
            this.game.state.start('Preloader', true, false);
        }
    }
    Miner.Boot = Boot;
})(Miner || (Miner = {}));
var Miner;
(function (Miner) {
    class Game extends Phaser.Game {
        constructor() {
            super(1920, 1080, Phaser.AUTO, 'content', null);
            this.state.add('Boot', Miner.Boot, false);
            this.state.add('Preloader', Miner.Preloader, false);
            this.state.add('MainMenu', Miner.MainMenu, false);
            this.state.add('Level1', Miner.Level1, false);
            this.state.start('Boot');
        }
    }
    Miner.Game = Game;
})(Miner || (Miner = {}));
var Miner;
(function (Miner) {
    class Level1 extends Phaser.State {
        create() {
            this.background = this.add.sprite(0, 0, 'level1');
            this.add.tween(this.background);
            this.music = this.add.audio('gameMusic', 1, true);
            this.music.play();
            this.player = new Miner.Player(this.game, 130, 284);
        }
    }
    Miner.Level1 = Level1;
})(Miner || (Miner = {}));
var Miner;
(function (Miner) {
    class MainMenu extends Phaser.State {
        create() {
            this.background = this.add.sprite(0, 0, 'titlepage');
            //this.background.alpha = 0;
            this.music = this.add.audio('titleMusic', 1, true);
            this.music.play();
            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);
            this.add.tween(this.background).to({ alpha: 1 }, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);
            this.input.onDown.addOnce(this.fadeOut, this);
        }
        fadeOut() {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            var tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startGame, this);
        }
        startGame() {
            this.music.stop();
            this.game.state.start('Level1', true, false);
        }
    }
    Miner.MainMenu = MainMenu;
})(Miner || (Miner = {}));
var Miner;
(function (Miner) {
    class Player extends Phaser.Sprite {
        constructor(game, x, y) {
            super(game, x, y, 'player', 0);
            this.anchor.setTo(0.5, 0);
            this.animations.add('walk');
            this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).onDown.add(function () {
                console.log("PASKA LOOTTONEN");
            });
            game.add.existing(this);
            game.physics.enable(this, 0);
        }
        update() {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
                this.body.velocity.x = -150;
                this.animations.play('walk');
                if (this.scale.x == 1) {
                    this.scale.x = -1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
                this.body.velocity.x = 150;
                this.animations.play('walk');
                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
                this.body.velocity.y = 150;
                this.animations.play('walk');
                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
                this.body.velocity.y = -150;
                this.animations.play('walk');
                if (this.scale.x == -1) {
                    this.scale.x = 1;
                }
            }
            else {
                this.animations.frame = 0;
            }
        }
    }
    Miner.Player = Player;
})(Miner || (Miner = {}));
var Miner;
(function (Miner) {
    class Preloader extends Phaser.State {
        preload() {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite((1920 / 3), (1080 / 2), 'preloadBar');
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
    Miner.Preloader = Preloader;
})(Miner || (Miner = {}));
//# sourceMappingURL=game.js.map