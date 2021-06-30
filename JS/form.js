class Form{
    constructor(){
       this.input = createInput("Name");
       this.color = createInput("Color");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.color.hide();
    }
    display() {
        this.title.html("Size Race");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(50, 50);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.color.position(550,450);
        this.color.style('width', '200px');
        this.color.style('height', '20px');
        this.color.style('background', 'lavender');
        

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            player.color = this.color.value();
            playerCount += 1;
            player.index = playerCount;
            player.x = 500;
            player.y = 500;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
            this.color.hide();
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({
                players: null
            });
        });

    }
}