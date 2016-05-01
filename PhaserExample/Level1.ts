module Miner {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Miner.Player;

        create() {

            this.background = this.add.sprite(0, 0, 'level1');
            this.add.tween(this.background);
            this.music = this.add.audio('gameMusic',1, true);
            this.music.play();
            
            this.player = new Player(this.game, 130, 284);

        }

    }

} 