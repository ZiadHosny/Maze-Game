var canvas;
var ctx;
var dx = 50;
var dy = 50;
var x = 0;
var y = 0;
var WIDTH = 1000;
var HEIGHT = 600;
var img = new Image();
var collision = 0;
var cc;
var dd;

function drawMaze() {
    
    'use strict';
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red';
    
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.lineTo(50, 50);
    ctx.lineTo(50, 100);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 50);
    ctx.lineTo(200, 50);
    ctx.lineTo(200, 0);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.lineTo(150, 100);
    ctx.lineTo(300, 100);
    ctx.lineTo(300, 50);
    ctx.lineTo(250, 50);
    ctx.lineTo(700, 50);
    ctx.lineTo(700, 100);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(650, 100);
    ctx.lineTo(350, 100);
    ctx.lineTo(350, 150);
    ctx.lineTo(300, 150);
    ctx.lineTo(300, 250);
    ctx.lineTo(100, 250);
    ctx.lineTo(100, 350);
    ctx.lineTo(400, 350);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, 350);
    ctx.lineTo(50, 350);
    ctx.lineTo(50, 200);
    ctx.lineTo(250, 200);
    ctx.lineTo(250, 150);
    ctx.lineTo(100, 150);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(50, 550);
    ctx.lineTo(50, 400);
    ctx.lineTo(450, 400);
    ctx.lineTo(450, 300);
    ctx.lineTo(150, 300);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(350, 200);
    ctx.lineTo(400, 200);
    ctx.lineTo(400, 150);
    ctx.lineTo(500, 150);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(150, 600);
    ctx.lineTo(150, 500);
    ctx.lineTo(400, 500);
    ctx.lineTo(400, 450);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(100, 550);
    ctx.lineTo(100, 450);
    ctx.lineTo(450, 450);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(450, 500);
    ctx.lineTo(450, 550);
    ctx.lineTo(200, 550);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(950, 150);
    ctx.lineTo(850, 150);
    ctx.lineTo(950, 150);
    ctx.lineTo(950, 350);
    ctx.lineTo(1000, 350);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(950, 100);
    ctx.lineTo(850, 100);
    ctx.lineTo(850, 50);
    ctx.lineTo(750, 50);
    ctx.lineTo(750, 150);
    ctx.lineTo(650, 150);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.moveTo(900, 50);
    ctx.lineTo(950, 50);
    ctx.lineTo(950, 100);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(850, 150);
    ctx.lineTo(800, 150);
    ctx.lineTo(800, 200);
    ctx.lineTo(600, 200);
    ctx.lineTo(600, 100);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(700, 100);
    ctx.lineTo(750, 100);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(950, 550);
    ctx.lineTo(550, 550);
    ctx.lineTo(550, 450);
    ctx.lineTo(750, 450);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(450, 500);
    ctx.lineTo(500, 500);
    ctx.lineTo(500, 300);
    ctx.lineTo(550, 300);
    ctx.lineTo(550, 400);
    ctx.lineTo(800, 400);
    ctx.lineTo(800, 500);
    ctx.lineTo(600, 500);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(950, 600);
    ctx.lineTo(950, 500);
    ctx.lineTo(850, 500);
    ctx.lineTo(850, 400);
    ctx.lineTo(950, 400);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(1000, 450);
    ctx.lineTo(900, 450);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(500, 150);
    ctx.lineTo(550, 150);
    ctx.lineTo(550, 250);
    ctx.lineTo(850, 250);
    ctx.lineTo(850, 200);
    ctx.lineTo(900, 200);
    ctx.lineTo(900, 350);
    ctx.lineTo(950, 350);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(850, 400);
    ctx.lineTo(850, 350);
    ctx.lineTo(600, 350);
    ctx.lineTo(600, 300);
    ctx.lineTo(850, 300);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(550, 200);
    ctx.lineTo(500, 200);
    ctx.lineTo(450, 200);
    ctx.lineTo(450, 250);
    ctx.lineTo(500, 250);
    ctx.lineTo(500, 300);
    ctx.stroke();
}

function Clear() {
    
    'use strict';
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawMaze();
        
}

function Draw() {
    
    'use strict';
    cc = new Clear();
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.fillRect(WIDTH - 45, HEIGHT - 45, 45, 50);
    ctx.fill();
    ctx.beginPath();
    ctx.fillRect(0, 0, 50, 45);
    ctx.fill();
    ctx.drawImage(img, x, y, dx, dy);
}



function Update(e) {
    
    'use strict';
    
    switch (e.keyCode) {

    case 65:
        
        if (x - dx >= 0) {
            
            x -= dx;
            cc = new Clear();
        }
        break;
            
    case 68:
        
        if (x + dx < WIDTH) {
        
            x += 50;
            cc = new Clear();
        }
        break;

    case 87:
            
        if (y - dy >= 0) {
            
            y -= 50;
            cc = new Clear();
        }
        break;

    case 83:
            
        if (y + dy < HEIGHT) {
            
            y += 50;
            cc = new Clear();
        }
        break;
    }
    
    dd = new Draw();
}


function Init() {
    
    'use strict';
    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');
    img.src = 'Star.png';
    img.onload = Draw;
    document.onkeydown = Update;
    
}