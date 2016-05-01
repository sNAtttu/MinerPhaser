module Miner {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Miner.Player;
        helpShown: boolean;
        helpText: string;
        helpStyle: {};
        helpDomElement: Phaser.Text;

        create() {
            this.helpText = "M: Stop music, Arrow keys: Movement, Space: Try to find lewt";
            this.helpStyle = { font: "36px Arial", fill: "#ffffff", align: "center" };
            this.input.keyboard.addKey(Phaser.Keyboard.H).onDown.add(this.showHelpMenu, this);
            this.input.keyboard.addKey(Phaser.Keyboard.M).onDown.add(this.stopMusic, this);
            this.game.add.graphics(100, 40);
            this.helpShown = false;
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
        showHelpMenu() {
            if (this.helpShown) {
                this.game.world.remove(this.helpDomElement);  
                console.log("piilota");
                this.helpShown = false;
            }
            else {
                this.helpDomElement = this.game.add.text(0, 0, this.helpText, this.helpStyle);
                console.log("näytä");
                this.helpShown = true;
            }
        }

    }

} 