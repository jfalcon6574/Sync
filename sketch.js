var ball;
var dataBase, Position
var ball1 
function setup(){
    createCanvas(500,500);
    database = firebase.database()


    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball1 = database.ref('ball/position')
    ball1.on("value", read)
    
 
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(a,b){
    database.ref('ball/position').set({
        x : Position.x + a, y : Position.y + b
    })


}

function read(data){
  Position = data.val()
  ball.x = Position.x 
  ball.y = Position.y
   


}