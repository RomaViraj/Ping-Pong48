class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h1');
      this.title=createElement("h1")
      this.b = createButton('PLAY');
      this.resetTitle = createElement("h2");
      this.resetButton = createButton("");
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.greeting.hide();
    }
  
    display(){
      this.handleResetButton();

      this.title.html("PING PONG ");
      this.title.style('font-size','60px')
      this.title.style('color','yellow')
      this.title.position(displayWidth/2, displayHeight/7);
     // this.title.fill("yellow")
  
      this.input.position(displayWidth/2, displayHeight/3);
      this.button.position( displayWidth/2, displayHeight/2.5);

      this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(width / 2 + 300, 40);

    this.resetButton.class("resetButton");
    this.resetButton.position(width / 2 +330, 100);

      
  
      this.button.mousePressed(()=>{
        this.b.position(displayWidth/2, displayHeight/2)
        this.input.hide();
        this.button.hide();
        this.title.hide();
       var  playerName = this.input.value();
       this.greeting.html("Hello " + playerName)
        this.greeting.position( displayWidth/2, displayHeight/3);
      });
   this.b.mousePressed(()=>{
//     this.greeting.hide();
//     this.b.hide();
//  gameState=1
 
this.play()

   } )
// if(gameState===2){
//   this.input.hide();
//   this.button.hide();
//   this.title.hide();
//   this.greeting.hide();
//     this.b.hide();
// }

  }
  play(){
   
        this.greeting.hide();
        this.b.hide();
        gameState=1
  }
  handleResetButton() {
    this.resetButton.mousePressed(() => {
     
      window.location.reload();
    });
  }

    
  }
  