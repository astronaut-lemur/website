/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 1100
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 25,
          "height": 25
        }
      },
      "opacity": {
        "value": 0.3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 75,
        "color": "#ffffff",
        "opacity": 0.3,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

//show and hide divs
function seePost(divID) {
  var elements = ["home", "about_me", "space_school", "ex-countdown", "ex-w1", "ex-w2", "ex-w3", "ark-sm", "ark-bp", "ark-pe"];
  var theDiv = document.getElementById(divID);
  
  if (theDiv.style.display === "none") {
    for(var i=0; i<elements.length; i++) {
      var temp = document.getElementById(elements[i]);
      temp.style.display = "none";
    }
    
    theDiv.style.display = "block";    

  } 
}

//snake game
var mycanvas = document.getElementById('gameCanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 10;
var width = 350;
var height = 350;
var score = 0;
var snake;
var food;

var drawMod = ( function() {
  var bodySnake = function(x, y) {
    ctx.fillStyle = "#010b2b";
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    
    ctx.strokeStyle = "#010b2b";
    ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }
  
  var food = function(x, y) {
    ctx.fillStyle = "white";
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    
    ctx.fillStyle = "white";
    ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }
  
  var scoreText = function() {
    var score_text = score;
    ctx.fillStyle = "black";
    ctx.fillText(score_text, 145, h-5);
  }
  
  var drawSnake = function() {
    var length = 4;
    snake = [];
    
    for (var i = length; i>=0; i--) {
      snake.push({x:i, y:0});
    }
  }
  
  var createFood = function() {
    food = {
      x: Math.floor((Math.random() *30) +1),
      y: Math.floor((Math.random() *30) +1)
    }
    
    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;
      
      if (food.x===snakeX || food.y ===snakeY || food.y ===snakeY && food.x===snake.X) {
        food.x = Math.floor((Math.random() * 30) + 1);
        food.y = Math.floor((Math.random() * 30) + 1);
      }
    }
  }
  
  var checkCollision = function(x, y, array) {
    for(var i=0; i<array.length; i++) {
      if(array[1].x === x && array[i].y ===y)
        return true;
    }
    return false;
  }
  
  var paint = function () {
    ctx.fillStyle = '#010b2b';
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = '#010b2b';
    ctx.strokeRect(0, 0, w, h);

    btn.setAttribute('disabled', true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if (direction == 'right') {
        snakeX++;
    } else if (direction == 'left') {
        snakeX--;
    } else if (direction == 'up') {
        snakeY--;
    } else if (direction == 'down') {
        snakeY++;
    }

    if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || check_collision(snakeX, snakeY, snake)) {

        btn.removeAttribute('disabled', true);

        ctx.clearRect(0, 0, w, h);
        gameloop = clearInterval(gameloop);
        return;
    }

    if (snakeX == food.x && snakeY == food.y) {
        var tail = {
            x: snakeX,
            y: snakeY
        };
        score++;
        createFood();
    } else {
        var tail = snake.pop();
        tail.x = snakeX;
        tail.y = snakeY;
    }
    
    snake.unshift(tail);

    for (var i = 0; i < snake.length; i++) {
        bodySnake(snake[i].x, snake[i].y);
    }

    createFood(food.x, food.y);
    scoreText();
}
  (function (window, document, drawModule, undefined) {

    var btn = document.getElementById('game-btn');
    btn.addEventListener("click", function () {
        drawModule.init();
    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

        case 37:
            if (direction != 'right') {
                direction = 'left';
            }
            console.log('left');
            break;

        case 39:
            if (direction != 'left') {
                direction = 'right';
                console.log('right');
            }
            break;

        case 38:
            if (direction != 'down') {
                direction = 'up';
                console.log('up');
            }
            break;

        case 40:
            if (direction != 'up') {
                direction = 'down';
                console.log('down');
            }
            break;
        }
    }
})(window, document, drawModule);
