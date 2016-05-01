var PhaserExample = (function () {
    function PhaserExample() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    PhaserExample.prototype.preload = function () {
        this.game.load.image('logo', 'Assets/Images/ujoose.png');
    };
    PhaserExample.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.set(0.5, 0.5);
        logo.scale.setTo(0.2, 0.2);
        logo.game.add.tween(logo.scale).to({ x: 1, y: 1 }, 2000, Phaser.Easing.Bounce.Out, true);
    };
    return PhaserExample;
})();
window.onload = function () {
    var game = new PhaserExample();
};
//# sourceMappingURL=app.js.map