class MainScreen extends Phaser.Scene {
    constructor() {
        super("mainScreen");
    }

    preload() {
        //Bouton de lancement
        this.load.image("Button_Test", "assets/launchTest.png");
        this.load.image("Button_Game", "assets/launchGame.png");

        //Sprite Perso
        this.load.spritesheet('perso', 'assets/perso.png',
            { frameWidth: 32, frameHeight: 32 });

        //Spritesheet Mob
        this.load.spritesheet('mob', 'assets/mob.png',
            { frameWidth: 32, frameHeight: 32 });

        //Preload Asset Tiled
        this.load.image("Phaser_tuilesdejeu", "assets/Tiled/tileset.png");
        this.load.tilemapTiledJSON("darkForest", "assets/Tiled/DarkForest.json");
        this.load.tilemapTiledJSON("rockPlain", "assets/Tiled/RockPlain.json");
        this.load.tilemapTiledJSON("cave", "assets/Tiled/Cave.json");
        this.load.tilemapTiledJSON("waterTemple", "assets/Tiled/Temple.json");

        //Preload Attaque
        this.load.image("sword_y", "assets/attaque_joueur_y.png");
        this.load.image("sword_x", "assets/attaque_joueur_x.png");
        this.load.image("projBow", "assets/projBow.png");

        //Preload Barre de vie
        this.load.image("CadreVie", "assets/CadreVie.png");
        this.load.image("BarreVie", "assets/BarreVie.png");

        //Preload Loot
        this.load.image("Monnaie", "assets/Monnaie.png");
        this.load.image("Soin", "assets/Soin.png");
        this.load.image("Bow", "assets/Bow.png");
        this.load.image("Tear", "assets/Tear.png");
        this.load.image("Key", "assets/Cle.png");

        //Preload Environnement
        this.load.image("ForestToPlain", "assets/ForestToPlain.png");
        this.load.image("ForestToTemple", "assets/ForestToTemple.png");
        this.load.image("RockToForest", "assets/ForestToPlain.png");
        this.load.image("RockToCave", "assets/RockToCave.png");
        this.load.image("CaveToPlain", "assets/CaveToPlain.png");
        this.load.image("ForestToPlain", "assets/ForestToPlain.png");
        this.load.image("ForestToTemple", "assets/ForestToTemple.png");
        this.load.image("Rock", "assets/Rock.png");
        this.load.image("Door", "assets/Porte.png");
    }

    create() {
        this.testButton = this.add.image(400, 200, "Button_Test").setInteractive();
        this.gameButton = this.add.image(400, 400, "Button_Game").setInteractive();
        this.testButton.on("pointerdown", this.lauchTest, this);
        this.gameButton.on("pointerdown", this.launchGame, this);
    }

    update() {
    }

    lauchTest() {
        console.log("Launch Test");
        this.scene.start('MondeTest');
    }

    launchGame(){
        console.log("Launch Game");
        this.scene.start('darkForest', {
            porteMonnaie : 0,
            unlock_Sword : false,
            unlock_Bow : false,
            unlock_Tear : false,
            unlock_Key : false,
            health : 100,
            spawnX : 1952,
            spawnY : 2316,
        });
    }
}