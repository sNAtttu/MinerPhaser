module Miner {

    export class Player extends Phaser.Sprite {

        constructor(game: Phaser.Game, x: number, y: number) {

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

}