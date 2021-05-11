let input_dir = { x: 0, y: 0 };
const food_sound = new Audio("../sounds/game_over.wav");
const game_over_sound = new Audio("../sounds/game_over.wav");
const move_sound = new Audio("../sounds/game_over.wav");
const music_sound = new Audio("../sounds/game_over.wav");


let speed = 5;
let last_paint_time = 0
let score = 0;
let snake_arr = [
    { x: 13, y: 15 }
]
food = { x: 6, y: 7 };

// Game function
function main(current_time) {
    window.requestAnimationFrame(main);
    // console.log(current_time);
    if ((current_time - last_paint_time) / 1000 < 1 / speed) {
        return;

    }
    last_paint_time = current_time;
    game_engine();

}
function is_collide(sarr) {
    return false;

}

function game_engine() {
    // Updating the snake array and food
    if (is_collide(snake_arr)) {
        game_over_sound.play();
        music_sound.play();
        input_dir = { x: 0, y: 0 };
        alert("Game Over, Press any key to play again");
        snake_arr = [{ x: 13, y: 15 }];
        music_sound.play();
        score = 0;

    }

    // If you have eaten the food, increment the score and regenerate the food.
    if (snake_arr[0].y === food.y && snake_arr[0] === food.x) {
        snake_arr.unshift({ x: snake_arr[0].x + input_dir.x, y: snake_arr[0].y + input_dir.y });
        let a = 2;
        let b = 16;
        snake_food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    // Moving the snake
    for (let i = snake_arr.length - 2; i >= 0; i--) {
        snake_arr[i + 1] = { ...snake_arr[i] };
    }
    snake_arr[0].x += input_dir.x;
    snake_arr[0].y += input_dir.y;

    // Display the snake
    snake_board.innerHTML = "";
    snake_arr.forEach((e, index) => {
        snake_element = document.createElement("game");
        snake_element.style.gridRowStart = e.y;
        snake_element.style.gridColumnStart = e.x;
        snake_element.classList.add("snake");
        if (index === 0) {
            snake_element.classList.add("snake_head");
        }
        else {
            snake_element.classList.add("snake");
        }
        snake_board.appendChild(snake_element);
    });



    // Display the snake food
    food_element = document.createElement("game");
    food_element.style.gridRowStart = food.y;
    food_element.style.gridColumnStart = food.x;
    food_element.classList.add("snake_food");
    snake_board.appendChild(food_element);
}


//Main logic
window.requestAnimationFrame(main);
window.addEventListener("keydown", e => {
    input_dir = { x: 0, y: 1 } //start the game
    move_sound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            input_dir.x = 0;
            input_dir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            input_dir.x = 0;
            input_dir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            input_dir.x = -1;
            input_dir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            input_dir.x = 1;
            input_dir.y = 0;
            break;
        default:
            break;

    }
});


