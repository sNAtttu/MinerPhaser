module Miner {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Miner.Player;

        create() {

            this.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(this.stopMusic, this);
            this.game.add.graphics(100, 40);
            this.background = this.add.sprite(0, 0, 'level1');
            this.add.tween(this.background);
            this.music = this.add.audio('gameMusic',1, true);
            this.music.play();
            this.player = new Player(this.game, 130, 284);

        }

        stopMusic() {
            if (this.music.isPlaying) {
                this.music.stop();
            }
            else {
                this.music.play();
            }
        }

    }

} 